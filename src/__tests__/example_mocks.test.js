import { storage } from "../lib/storage";
import { getUsername, saveUsername } from "../user";

jest.mock('../lib/storage.js');

test('A self explained name to this test', () => {
    
    const myMock = jest.fn()
        .mockReturnValueOnce(true)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce('Hello Camilo');
    
    const result1 = myMock();
    const result2 = myMock();
    const result3 = myMock();
    
    expect(myMock).toHaveBeenCalledTimes(3);

    expect(result1).toBe(true);
    expect(result2).toBe(1);
    expect(result3).toBe('Hello Camilo');

})

test('Should save an item at local storage', () => {
    
    saveUsername('Juan');
    expect(storage.save).toHaveBeenCalled();
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save).toHaveBeenCalledWith({key: 'username', value: 'Juan'});
})

test('Should get an item at local storage', () => {
    
    getUsername();
    expect(storage.get).toHaveBeenCalled();
    expect(storage.get).toHaveBeenCalledWith({key: 'username'});
})