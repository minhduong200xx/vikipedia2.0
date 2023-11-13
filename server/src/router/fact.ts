import {
  addFact,
  deleteFactById,
  getAllFact,
  getRandomFact,
  updateFactById,
} from "../controllers/facts";

import express from "express";

export default (router: express.Router) => {
  /**
   * @openapi
   * '/api/facts':
   *  get:
   *     tags:
   *     - Fact
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.get("/facts", getAllFact);
  /**
   * @openapi
   * '/api/facts/{id}':
   *  delete:
   *     tags:
   *     - Fact
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.delete("/facts/:id", deleteFactById);
  /**
   * @openapi
   * '/api/facts{id}':
   *  patch:
   *     tags:
   *     - Fact
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.patch("/facts/:id", updateFactById);
  /**
   * @openapi
   * '/api/facts/add':
   *  post:
   *     tags:
   *     - Fact
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.post("/facts/add", addFact);
  /**
   * @openapi
   * '/api/facts/random':
   *  get:
   *     tags:
   *     - Fact
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.get("/facts/random", getRandomFact);
};
