import { Request, Response } from "express";
import {
  IRealEstate,
  IRealEstateRequest,
  IRealEstatesResponse,
} from "../interfaces/realEstates.interfaces";
import createRealEstatesService from "../services/realEstates/createRealEstates.service";
import { RealEstate } from "../entities";
import listRealEstatesService from "../services/realEstates/listRealEstates.service";

const createRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstateData: IRealEstateRequest = req.body;

  const realEstate = await createRealEstatesService(realEstateData);
  return res.status(201).json(realEstate);
};

const listRealEstatesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const realEstates: IRealEstatesResponse = await listRealEstatesService();
  return res.json(realEstates);
};

export { createRealEstatesController, listRealEstatesController };
