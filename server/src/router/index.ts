import express from "express";

import authentication from "./authentication";
import users from "./users";
import pages from "./pages";
import fact from "./fact";
import suggestions from "./suggestions";

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  users(router);
  pages(router);
  fact(router);
  suggestions(router);
  return router;
};
