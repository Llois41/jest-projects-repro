const {describe, it, beforeEach, jest: j, expect} = require('@jest/globals')
const {Test, doSomething} = require('./test')

describe('test', () => {
    let spy;
    beforeEach(() => {
        spy = j.spyOn(Test.prototype, 'callMe');
    })

    it('one call received', () => {
        doSomething();
        expect(spy).toHaveBeenCalledTimes(1);
    })

    it('still one call received since resetMocks restoreMocks is enabled', () => {
        doSomething();
        expect(spy).toHaveBeenCalledTimes(1);
    })
})
