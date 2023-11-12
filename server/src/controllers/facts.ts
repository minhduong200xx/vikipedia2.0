import express from "express";
import {
  createFact,
  deleteFact,
  getFactById,
  getFacts,
  updateFact,
} from "../db/facts";
export const getAllFact = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const facts = await getFacts();
    return res.status(200).json(facts);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const getRandomFact = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const facts = await getFacts();

    const getRandomFacts = (array: any[], count: number): any[] => {
      const shuffledArray = [...array];

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [
          shuffledArray[j],
          shuffledArray[i],
        ];
      }

      return shuffledArray.slice(0, count);
    };

    const randomFacts = getRandomFacts(facts, 5); // Use 'facts' instead of 'dataArray'
    return res.status(200).json(randomFacts);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
};
export const deleteFactById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const deletedFact = await deleteFact(id);
    return res.json(deletedFact);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const updateFactById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const values = req.body;
    const fact = await updateFact(id, values);
    return res.status(200).json(fact);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
export const addFact = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.sendStatus(400);
    }

    const existingPage = await getFactById(id);

    if (existingPage) {
      return res.sendStatus(400);
    }
    const fact = await createFact(req.body);
    return res.status(200).json(fact);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
