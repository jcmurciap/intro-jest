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