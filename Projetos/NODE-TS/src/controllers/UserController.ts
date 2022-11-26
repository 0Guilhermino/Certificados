import { UserService } from './../service/UserService';
import { Request, Response } from "express";


export class UserController {
    userService: UserService

    constructor(
        userservice = new UserService()
    ){
        this.userService = userservice;
    }
    createUser = (req: Request, res: Response) => {
        const userService = new UserService();
        const user = req.body;

        if(!user.name){
            return res.status(400).json({mesage: "400, Bad Request: name invalid"})
        }

        if(!user.email){
            return res.status(400).json({mesage: "400, Bad Request: email invalid"})
        }

        userService.createUser(user.name, user.email)
        return res.status(201).json({ message: "Usuário Criado." })
    }

    getAllUsers = (req: Request, res: Response) => {
        const userService = new UserService();
        const users = userService.getAllUsers();
        return  res.status(200).json(users);
    }
} 