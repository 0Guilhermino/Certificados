import { router } from './routes';
import express, {Request, Response} from "express";


const server = express();
const PORT = 3000;

server.use(express.json());
server.use(router);

server.get("/",(req: Request, res: Response) => {
    return res.status(200).json({ message: "DioBank API" })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})