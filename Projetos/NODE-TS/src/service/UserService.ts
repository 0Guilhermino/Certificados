export interface User {
    name: string;
    email: string;
}

const db = [
    {
        name: "Angelo",
        email: "angeloGui@live.com",
    }
]

export class UserService {
    db: Array<User>

    constructor(
        database = db
    ){
        this.db = database;
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log("DB atualizado",db);
    }

    getAllUsers = () => {
        return db;
    }
}