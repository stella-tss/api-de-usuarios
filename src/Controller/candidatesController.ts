import { Request, Response } from "express";
import mongoose from "mongoose";
import Candidate from "../Model/candidates";

export class CandidatesController {

    public async create(req: Request, res: Response) {
        const candidate = new Candidate(req.body);
        const result = await candidate.save();
        res.json(result);
    }
    public async getCandidates(req: Request, res: Response) {
        const candidates = await Candidate.find();
        res.json(candidates);
    }

    public async getCandidate(req: Request, res: Response) {
        const candidate = await Candidate.findById(req.params.id);
        res.json(candidate);
    }

    public async updateCandidate(req: Request, res: Response) {
        const candidate = await Candidate.findByIdAndUpdate(req.params.id, req.body);
        const result = await candidate?.save();
        res.json(result);
    }

    public async deleteCandidate(req: Request, res: Response) {
        const candidate = await Candidate.findByIdAndDelete(req.params.id);
        res.json(`Candidate deleted ${candidate}`);
}
}
export default new CandidatesController();
