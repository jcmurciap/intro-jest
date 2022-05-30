//callback
const asynCallback = (cb) => {
    setTimeout(() => {
        cb(true);
    }, 1000)
}

// promises
const asyncPromise = () => new Promise((resolve) => resolve(true));

describe('async code', () => {

    test('example of async with callback', (done) => {

        asynCallback((result) => {
            expect(result).toBe(true);
            done();
        });

    });

    test('example of async with promises', () => {
        return asyncPromise().then((result) => expect(result).toBe(true));
    })

    test('Example of async await ', async() => {
        const data = await asyncPromise()
        expect(data).toBe(true);
    })
});