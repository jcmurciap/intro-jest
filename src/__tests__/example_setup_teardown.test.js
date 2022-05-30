describe('setup and teardown examples', () => {

    beforeAll(() => {
        console.log('beforeAll');
    })

    beforeEach(() => {
        console.log('beforEach');
    })

    afterEach(() => {
        console.log('afterEach')
    })
    
    afterAll(() => {
        console.log('afterAll')
    })

    test('Example 1', () => {
        expect(true).toBe(true);
    })

    test('Example 2', () => {
        expect(true).toBe(true);
    })
})