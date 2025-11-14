//my imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

//initialise express
const app = express();

//tell express to use json
app.use(express.json());

//tell express to use cors
app.use(cors());
//configure dotenv
dotenv.config();
// setup our db using the connection string from supabase and the pg package

const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({ connectionString: dbConnectionString });

// set up a PORT for our server to listen to 
const PORT = 8080;
app.listen(PORT, function () {
    console.log(`Server is running and ready to rumble in port ${PORT}`);
});

// I nee to write a endpoint for my root route 
// I want to READ data --> GET method

// app.get("/",function(request,response){
//     response.json({message:"You are looking at my root route"})
// });
app.get("/content", async function (request, response) {
    const sampleContent = await db.query("SELECT * FROM content;");
    response.json(sampleContent.rows);
});

app.post("/content", async function (request, response){

}
);