import {
  addFact,
  deleteFactById,
  getAllFact,
  getRandomFact,
  updateFactById,
} from "../controllers/facts";

import express from "express";

export default (router: express.Router) => {
  router.get("/facts", getAllFact);
  router.delete("/facts/:id", deleteFactById);
  router.patch("/facts/:id", updateFactById);
  router.post("/facts/add", addFact);
  router.get("/facts/random", getRandomFact);
};
