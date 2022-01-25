import express from "express";

const router = express.Router();

router.get("/", async (req, res)=> {
  const data = await;
  res.json({success : true, payload : data})
})