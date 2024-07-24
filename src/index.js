import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is listening on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("something went wrong", err);
  });

/*
import express from "express"
const app = express()

;(async ()=>{
	try {
		await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`)
		app.on("error", (error)=>{
			console.log("ERROR", error)
			throw error
		})

		app.listen(process.env.PORT, ()=>{
			console.log(`app is listening on port ${process.env.PORT}`)
		})
	} catch (error) {
		console.error("ERROR: ", error);
		throw error;
	}
})()*/
