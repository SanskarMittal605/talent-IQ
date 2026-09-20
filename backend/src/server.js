import express from "express";
import path from "path";
import cors from "cors";
import {serve} from "inngest/express";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { inngest, functions } from "./lib/inngest.js";
const app = express();

const __dirname = path.resolve();

//middleware
app.use(express.json());
//credentials:true meaning?? => server allows a browser to include cookies on request.
app.use(cors({origin:ENV.CLIENT_URL, credentials:true})); //for production, origin is required, CLIENT_URL is frontend URL

app.use("/api/inngest", serve({client: inngest, functions}));

app.get("/health", (req, res)=>{
    res.status(200).json({msg: "api is up and running"});
});

app.get("/books", (req, res)=>{
    res.status(200).json({msg: "this is books endpoint"});
});

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