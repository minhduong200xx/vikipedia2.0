import express from "express";
import {
  deletePageById,
  getPages,
  getPageById,
  getPageByTitle,
  createPage,
  updatePageById,
} from "../db/pages";
export const getAllPages = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const pages = await getPages();

    return res.status(200).json(pages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deletePages = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedPage = await deletePageById(id);

    return res.json(deletedPage);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const updatePage = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const values = req.body;
    const page = await updatePageById(id, values);
    return res.json(page);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const addPage = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.sendStatus(400);
    }

    const existingPage = await getPageById(id);

    if (existingPage) {
      return res.sendStatus(400);
    }
    const page = await createPage(req.body);
    return res.json(page);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
