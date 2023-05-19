import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
const PORT = 5000;
const DB_PASSWORD = "SrgkmLgxSTTo52Xs";
const DB_URL = `mongodb+srv://timashkov060896:${DB_PASSWORD}@cluster0.w0j3rdp.mongodb.net/?retryWrites=true&w=majority`;

const app = express();
console.log("app");

app.use(express.json());
app.use("/api", router);
async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});

    app.listen(PORT, () => {
      console.log("SERVER STARTED ON PORT 5000");
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
