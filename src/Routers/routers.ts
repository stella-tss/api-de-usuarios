import express from 'express';
import candidatesController, { CandidatesController } from '../Controller/candidatesController';

const CandidateRoutes = express.Router()

CandidateRoutes.post('/candidates', (req, res) => {  // Criar candidatos
    const candidatesController = new CandidatesController()
    const data = candidatesController.create(req, res)
});
CandidateRoutes.get('/candidates', (req, res) => {  // Listar candidatos
    const candidatesController = new CandidatesController()
    const data = candidatesController.getCandidates(req, res)
}
);
CandidateRoutes.get('/candidates/:id', (req, res, next) => {  // Listar candidato por id
    const candidatesController = new CandidatesController()
    const data = candidatesController.getCandidate(req, res)
}
);
CandidateRoutes.put('/candidates/:id', (req, res) => {  // Atualizar candidato
    const candidatesController = new CandidatesController()
    const data = candidatesController.updateCandidate(req, res)
}
);
CandidateRoutes.delete('/candidates/:id', (req, res) => {  // Deletar candidato
    const candidatesController = new CandidatesController()
    const data = candidatesController.deleteCandidate(req, res)
}
);


export default CandidateRoutes;
