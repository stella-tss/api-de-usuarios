import mongoose from "mongoose"

export interface Candidate {
    name: string
    birthDate: Date
    email: string
}

export interface CandidateDocument extends Candidate, mongoose.Document {
    id: string
}

const CandidateSchema = new mongoose.Schema({
    name: { type: String, required: true },
    birthDate: { type: Date, required: true },
    email: { type: String, required: true, index: { unique: true } },
}, {
    timestamps: true
})

const Candidate = mongoose.model<CandidateDocument>('Candidate', CandidateSchema)

export default Candidate

