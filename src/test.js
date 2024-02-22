function doSomething() {
    const test = new Test();
    return test.callMe()
}

class Test {
    callMe() {
        return 3;
    }
}

module.exports = {Test, doSomething}
