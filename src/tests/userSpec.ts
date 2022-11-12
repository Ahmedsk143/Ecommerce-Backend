import UserModel from '../models/userModel';

describe('User Model', () => {
    it('should have a getAll method', () => {
        expect(UserModel.getAll()).toBeDefined();
    });
    // it('getAll should return a list of users', async () => {
    //     const result = await UserModel.getAll();
    //     const expected: User[] = [
    //         {
    //             id: 2,
    //             username: 'username',
    //             password: 'password',
    //         },
    //         {
    //             id: 1,
    //             username: 'ahmed',
    //             password: '123456',
    //         },
    //     ];

    //     expect(result).toEqual(expected);
    // });
});
