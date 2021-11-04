const {image} = require('./image')

let arg = {}                // parameters for running the tested module

beforeEach(() => {      // it runs before starting each test
    arg = {
        id: '',
        rootId: '',
        height: 0,
        width: 0,
        simpleSize: 'sm'
    }
})

describe('Image function testing:', () => {

    test('1) if id and rootId are defined should return defined', () => {
        arg.id = 'child'
        arg.rootId = 'root'

        expect(image(arg)).toBeDefined()     // toBeUndefined - Matcher
    })

    test('2) if id or rootId is undefined should return undefined', () => {
        arg.id = ''
        arg.rootId = 'root'

        expect(image(arg)).toBeUndefined()
    })

    test('3) if id or rootId is undefined should return undefined', () => {
        arg.id = 'child'
        arg.rootId = ''
        expect(image(arg)).toBeUndefined()
    })

    test('4) if simpleSize is "sm" or "md" or "lg" should return defined', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = 'md'

        expect(image(arg)).toBeDefined()
    })

    test('5) if simpleSize is "sm" or "md" or "lg" should return defined', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = 'lg'

        expect(image(arg)).toBeDefined()     // toBeUndefined - Matcher
    })

    test('6) if simpleSize is passed, height and width can not be passed ', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = 'sm'
        arg.height = 50

        expect(image(arg)).toBeUndefined()     // toBeUndefined - Matcher
    })

    test('7) if simpleSize is passed, height and width can not be passed ', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = 'sm'
        arg.width = 100

        expect(image(arg)).toBeUndefined()
    })

    test('8) if height and width are passed and simpleSize is not passed should return defined', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = ''
        arg.height = 50
        arg.width = 100

        expect(image(arg)).toBeDefined()
    })

    test('9) if simpleSize is not passed both height and width should be passed otherwise should return undefined', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = ''
        arg.height = 50

        expect(image(arg)).toBeUndefined()
    })

    test('10) if simpleSize is not passed both height and width should be passed otherwise should return undefined', () => {
        arg.id = 'child'
        arg.rootId = 'root'
        arg.simpleSize = ''
        arg.width = 100

        expect(image(arg)).toBeUndefined()
    })
})
