import express from "express";
import {
  deletePageById,
  getPages,
  getPageById,
  getPageByTitle,
  createPage,
  updatePageById,
  searchPages,
  getPageByCategory,
} from "../db/pages";
import { getSuggestionByUserId } from "../db/suggestions";
export const getPageBySuggestion = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.body;
    const { categories } = await getSuggestionByUserId(id);
    if (!categories) {
      return res.sendStatus(400).send("Không có gợi ý cho bạn");
    }
    const pages = await getPages();
    const result = pages.filter((item: any) =>
      categories.includes(item.category)
    );
    if (!result) return res.status(400).send("Không có gợi ý cho bạn");
    return res.status(200).json(result);
  } catch (error) {
    return res.sendStatus(400);
  }
};
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
export const searchPageByKey = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { search } = req.body;
    const pages = await getPages();
    if (!search) {
      return res.status(200).json(pages);
    }
    const results = await searchPages(search);
    return res.status(200).json(results);
  } catch (error) {
    return res.sendStatus(500);
  }
};
export const addPage = async (req: express.Request, res: express.Response) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.sendStatus(400);
    }

    const existingPage = await getPageByTitle(title);

    if (existingPage) {
      return res.sendStatus(400);
    }
    const page = await createPage(req.body);
    return res.sendStatus(200).json(page);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
