import express from "express";
import {
  createSuggestion,
  getSuggestionByUserId,
  updateSuggestionByUserId,
} from "../db/suggestions";

export const updateSuggestion = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const values = req.body;
    const suggestion = await updateSuggestionByUserId(id, values);
    return res.status(200).json(suggestion);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const addSuggestion = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const suggestion = await createSuggestion(req.body);
    return res.status(200).json(suggestion);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
