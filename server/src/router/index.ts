import express from "express";

import authentication from "./authentication";
import users from "./users";
import pages from "./pages";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  pages(router);
  return router;
};
