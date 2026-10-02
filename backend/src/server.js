import express from "express";
import path from "path";
import cors from "cors";
import {serve} from "inngest/express";
import { clerkMiddleware } from '@clerk/express';

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
//import { protectRoute } from "./middleware/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js"; 
import sessionRoutes from "./routes/sessionRoute.js";

const app = express();

const __dirname = path.resolve();

//middleware
app.use(express.json());
//credentials:true meaning?? => server allows a browser to include cookies on request.
app.use(cors({origin:ENV.CLIENT_URL, credentials:true})); //for production, origin is required, CLIENT_URL is frontend URL
app.use(clerkMiddleware()); //this adds auth field to request object: req.auth()

app.use("/api/inngest", serve({client: inngest, functions}));
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res)=>{
    res.status(200).json({msg: "api is up and running"});
});

// app.get("/books", (req, res)=>{
//     res.status(200).json({msg: "this is books endpoint"});
// });

//when you pass an array of middleware to Express, it automatically flattens and executes them sequentially, one by one.
// app.get("/video-calls", protectRoute, (req, res) => {
//     res.status(200).json({msg: "this is a protected route"});
// });

//make our app ready for deployment
if(ENV.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("/{*any}", (req, res) => {
        res.sendFile("index.html", {root: path.join(__dirname, "../frontend", "dist")});
    });
}

//starting the server
const startServer = async() =>{
    try{
        await connectDB();
        app.listen(ENV.PORT, ()=> console.log("Server is running on port:", ENV.PORT));
    } catch(error){
        console.error("Error starting the server", error);
    }
};

startServer();