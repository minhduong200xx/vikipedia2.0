import express from "express";
import { addSuggestion, updateSuggestion } from "../controllers/suggestions";

export default (router: express.Router) => {
  router.patch("/suggestion/:id", updateSuggestion);
  router.post("/suggestion/add", addSuggestion);
};
