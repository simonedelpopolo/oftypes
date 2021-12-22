import { undefined_ } from '../index.js'

describe( `\x1b[31m ↓ test, the variable is undefined, return true \x1b[0m
\t{undefined} \`variable\` -> let undefy = ${ undefined }
\twill resolve -> ${ true }`, () => {
    test( 'test, the variable is undefined', () => {
        let undefy = undefined
        return expect( undefined_( undefy ) )
            .resolves
            .toBe( true )
    } )
} )

describe( `\x1b[31m ↓ test, the variable is defined, return false and the variable itself \x1b[0m
\t{object} \`variable\` -> let undefy = {object:1,integer:138}
\t{undefined} \`resolvers\` -> let resolvers = ${ undefined }
\t{boolean} \`payback\` -> let payback = ${ true }
\tit returns {[false, {object: 1, integer:138}]}
\twill resolve -> ${ false }`, () => {
    test( 'test, the variable is NOT undefined', () => {
        let undefy = { object: 1, integer: 138 }
        let resolvers = undefined
        let payback = true
        expect( undefined_( undefy, resolvers, payback ) )
            .resolves
            .toStrictEqual( [
                false,
                { object: 1, integer: 138 },
            ] )
    } )
} )


describe( `\x1b[31m ↓ test, the resolver parameter goes wrong. \x1b[0m
\t{undefined} \`variable\` -> let undefy = ${ undefined }
\t{string}  \`resolvers\` -> let resolvers = 'won\'t work with resolvers set to string'
\twill throw -> TypeError( 'only object is an accepted parameter for resolvers. Given type: string' )`, () => {
    let undefy = undefined
    let resolvers = 'won\'t work with resolvers set to string'
    let payback = undefined
    
    test( 'won\'t work with resolvers set to string', () => {
        return expect( undefined_( undefy, resolvers, payback ) )
            .rejects
            .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: string' ) )
    } )
} )

describe( `\x1b[31m ↓ test, the resolver parameter goes wrong. \x1b[0m
\t{undefined} \`variable\` -> let undefy = ${ undefined }
\t{function}  \`resolvers\` -> let resolvers = (resolvers)=>{return 'as function won\'t work'}
\twill throw -> TypeError( 'only object is an accepted parameter for resolvers. Given type: Function' )`, () => {
    let undefy = undefined
    let resolvers = (resolvers)=>{return 'as function won\'t work'}
    let payback = undefined
    
    test( `(resolvers)=>{return 'as function won\'t work'}`, () => {
        // make sure to add a return statement
        return expect( undefined_( undefy, resolvers, payback ) )
            .rejects
            .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: Function' ) )
    } )
})

test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, [ () => { } ], true ) )
        .rejects
        .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: Array' ) )
} )


test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, 10, true ) )
        .rejects
        .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: number' ) )
} )

test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, null, true ) )
        .rejects
        .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given: null' ) )
} )

test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, Symbol( 'etchiiii!' ), true ) )
        .rejects
        .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: symbol' ) )
} )

test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, BigInt( true ), true ) )
        .rejects
        .toThrow( TypeError( 'only object is an accepted parameter for resolvers. Given type: bigint' ) )
} )

test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, BigInt( true ), 'string' ) )
        .rejects
        .toThrow( TypeError( 'only boolean is an accepted parameter for payback. Given type: string' ) )
} )


test( 'reject and throws', () => {
    // make sure to add a return statement
    return expect( undefined_( undefined, BigInt( true ), null ) )
        .rejects
        .toThrow( TypeError( 'only boolean is an accepted parameter for payback. Given type: object' ) )
} )

