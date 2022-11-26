import { User, UserService } from './UserService';
 
 describe('UserService', () => {
    const mockDB: User[] = [];
    const userService = new UserService(mockDB);

    it("Deve adicionar um novo Usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log")
        userService.createUser("Angelo", "Gui@live.com");
        expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDB);
     })
})

