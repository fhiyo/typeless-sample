import * as Rx from 'typeless/rx';
import { User } from '../modules/selectUser/interface';

interface UserServer{
    fetchAllUsers: () => Promise<User[]>
}

const userMockServer: UserServer = {
    fetchAllUsers: () => {
        return new Promise<User[]>((resolve, reject) => {
            resolve([
                {userId: '1', name: 'hoge'},
                {userId: '2', name: 'fuga'},
                {userId: '3', name: 'piyo'},
            ]);
        })
    }
};

export class UserService{
    constructor(private server: UserServer){}

    public fetchAllUsers(): Rx.Observable<User[]>{
        return Rx.fromPromise(this.server.fetchAllUsers());
    }
}

export const userService = new UserService(userMockServer);
