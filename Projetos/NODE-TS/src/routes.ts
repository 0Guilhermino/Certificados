import { Router, Request, Response } from "express";
import { UserController } from "./controllers/UserController";

export const router = Router();

const user = new UserController();

router.post("/user", user.createUser);
router.get("/user", user.getAllUsers)
router.delete("/user", (req: Request, res: Response) => {
    const user = req.body;
    console.log("Deletando usuario...",user);
    return  res.status(200).json({message: "Usuário deletado com sucesso"});
})