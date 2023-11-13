import express from "express";
import { Express, Request, Response } from "express";
import { getAllUsers, deleteUser, updateUser } from "../controllers/users";
import { isAuthenticated, isOwner } from "../middlewares";

export default (router: express.Router) => {
  /**
   * @openapi
   * /healthcheck:
   *  get:
   *     tags:
   *     - Healthcheck
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));

   /**
   * @openapi
   * '/api/users':
   *  get:
   *     tags:
   *     - User
   *     summary: Return a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           db:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
  router.get("/users", isAuthenticated, getAllUsers);
  /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.delete("/users/:id", isAuthenticated, isOwner, deleteUser);
  /**
   * @openapi
   * '/api/users':
   *  delete:
   *     tags:
   *     - User
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  router.patch("/users/:id", isAuthenticated, isOwner, updateUser);
  /**
   * @openapi
   * '/api/users':
   *  patch:
   *     tags:
   *     - User
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
};
