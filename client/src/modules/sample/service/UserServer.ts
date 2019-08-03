import * as Rx from 'typeless/rx';

// selectUserだとfetchでuserが一つしか取ってこれないの変だから後で直そう
// TODO: interface.tsに移動させる
type User = { userId: number, name: string }

interface UserServer{
    fetchUser: (userId: number) => Promise<User>
}

const userMockServer: UserServer = {
    fetchUser: (userId: number) => {
        return new Promise<User>((resolve, reject) => {
            resolve({userId: userId, name: 'hoge'});
        })
    }
};

export class UserService{
    constructor(private server: UserServer){}

    public getUser(userId: number): Rx.Observable<User>{
        return Rx.fromPromise(this.server.fetchUser(userId));
    }
}

export const userService = new UserService(userMockServer);
