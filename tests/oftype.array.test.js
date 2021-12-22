import { array_ } from '../index.js'

describe( `\x1b[31m ↓ test, the variable is undefined, return false \x1b[0m
\t{undefined} \`variable\` -> let variable = ${ undefined }
\twill resolve -> ${ false }`, () => {
    test( 'Array_ function expect the parameter variable NOT to be undefined.', () => {
        let variable = undefined
        return expect( array_( variable ) )
            .resolves
            .toBe( false )
    } )
} )

describe( `\x1b[31m ↓ test, the variable is array, return true \x1b[0m
\t{array} \`variable\` -> let variable = [ 0, 1 ]
\twill resolve -> ${ true }`, () => {
    test( 'Array_ function resolves to true.', () => {
        let variable = [ 0, 1 ]
        return expect( array_( variable ) )
            .resolves
            .toBe( true )
    } )
} )
