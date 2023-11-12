import express from "express";

import {
  getAllPages,
  updatePage,
  deletePages,
  addPage,
  searchPageByKey,
  getPageBySuggestion,
} from "../controllers/pages";

export default (router: express.Router) => {
  router.get("/pages", getAllPages);
  router.delete("/pages/:id", deletePages);
  router.patch("/pages/:id", updatePage);
  router.post("/pages/add", addPage);
  router.get("/pages/search", searchPageByKey);
  router.get("/pages/suggestion", getPageBySuggestion);
};
