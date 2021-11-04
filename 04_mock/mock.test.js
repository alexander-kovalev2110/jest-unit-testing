const {map} = require('./mock')

describe('Map function', () => {
    let array
    let fn

    beforeEach(() => {
        array = [1, 2, 3, 5]
        fn = jest.fn(x => x ** 2)       // when testing replaces the real callback
        map(array, fn)
    })

    test('should call callback', () => {
        expect(fn).toBeCalled()
    })

    test('should call callback 4 times', () => {
        expect(fn).toBeCalledTimes(4)       // how many times the function can be called
        expect(fn.mock.calls.length).toBe(4)
    })

    test('should pow 2 each element', () => {
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
    })

    test('should fn work', () => {
        fn                   // fn should return the listed values on the first, second and subsequent times
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('42')

        expect(fn()).toBe(100)
        expect(fn()).toBe(200)
        expect(fn()).toBe('42')
        expect(fn()).toBe('42')

    })
})
