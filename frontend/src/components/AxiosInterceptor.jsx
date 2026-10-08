import { useAuth } from "@clerk/react";
import { useEffect } from "react";
import axiosInstance from "../lib/axios";

function AxiosInterceptor({ children }) {
  const { getToken, isLoaded } = useAuth();

  useEffect(() => {
    if (!isLoaded) return;

    const interceptor = axiosInstance.interceptors.request.use(
      async (config) => {
        const token = await getToken({ skipCache: true });

        console.log("Clerk token available:", !!token);

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
          console.log("Authorization header added: true");
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    return () => {
      axiosInstance.interceptors.request.eject(interceptor);
    };
  }, [getToken, isLoaded]);

  return children;
}

export default AxiosInterceptor;
