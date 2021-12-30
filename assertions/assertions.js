console.time( 'assertions finished ' )
import { EventEmitter } from 'events'
import { stat } from 'fs/promises'
import { bigint_, boolean_, null_, string_, symbol_ } from '../index.js'
import { deepEqual, ok } from 'assert/strict'

const AssertionEvent = new EventEmitter()

AssertionEvent.on( 'end', ()=>{
    console.timeEnd( 'assertions finished ' )
} )

const Assertions = {
    
    assertion0 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        console.log( ' \x1b[31m Assertion number', 0, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type string', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        const expected = true
        const variable = 'hello folks'
        
        ok( await string_( variable ) === expected )
        
        console.log( 'Test passed, the variable is type of string!' )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result -> ', expected )
        
    },
    
    assertion1 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const expected = [ false, 10 ]
        const variable = 10
        
        console.log( ' \x1b[31m Assertion number', 1, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type string', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        deepEqual( await string_( variable, undefined, true ), expected )
        
        console.log( 'Test passed, the variable is NOT of type string!' )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result -> ', expected )
        
    },
    
    assertion2 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const resolvers = {true: 'it is type of string!', false: 'it is not of type string!'}
        const variable_string = 'Hello folkyyyys'
        const variable_number = 10
        const expected_string = [ resolvers.true, variable_string ]
        const expected_number = [ resolvers.false, variable_number ]
        
        console.log( ' \x1b[31m Assertion number', 2, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type string and also that is NOT of type string', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        deepEqual( await string_( variable_string, resolvers, true ), expected_string )
        
        deepEqual( await string_( variable_number, resolvers, true ), expected_number )
        
        console.log( 'Test passed, the variable is type of string!' )
        console.log( 'Given variable -> ', variable_string )
        console.log( 'Expected result -> ', expected_string )
        
        console.log( '__________________________________________________________________________' )
        
        console.log( 'Test passed, the variable is NOT of type string!' )
        console.log( 'Given variable -> ', variable_number )
        console.log( 'Expected result -> ', expected_number )
        
    },
    
    assertion3 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const resolvers = {
            true: async () => {
                return stat( '../index.js' ).then( stat => stat )
                    .catch( error => error )
            }, false: 'it is not a string',
        }
        
        const variable = 'Hello folkyyyys'
        const expected = {}
        const payback = true
        
        console.log( ' \x1b[31m Assertion number', 3, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type string and execute the resolvers.true function', '\x1b[0m' )
        console.log( '\x1b[31m the resolvers.true function return a Stats object', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        let fileStat = await string_( variable, resolvers, payback )
        let resultStats
        if ( typeof fileStat[0] === 'function' )
            resultStats =  await fileStat[ 0 ]()
        else
            resultStats =   fileStat
        
        ok( typeof resultStats === typeof expected )
        
        console.log( 'Test passed, the variable is type of string!' )
        console.log( 'The result from resolvers.true is type of object! And it is the same type as expected ->', typeof expected )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result from the Stats object-> ', resultStats )
        
        console.log( '__________________________________________________________________________' )
        
    },
    
    assertion4 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const resolvers = {true: 'it is null!', false: 'it is not null!'}
        const variable = {object:null}
        const expected_null = [ resolvers.true, variable.object ]
        const expected_not_null = [ resolvers.false, variable ]
        
        console.log( ' \x1b[31m Assertion number', 4, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is null and also that is NOT null', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        // It is null
        deepEqual( await null_( variable.object, resolvers, true ), expected_null )
    
        // It is not null
        deepEqual( await null_( variable, resolvers, true ), expected_not_null )
        
        console.log( 'Test passed, the variable is null!' )
        console.log( 'Given variable -> ', variable.object )
        console.log( 'Expected result -> ', expected_null )
        
        console.log( '__________________________________________________________________________' )
        
        console.log( 'Test passed, the variable is NOT null!' )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result -> ', expected_not_null )
        
    },
    
    assertion5 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const resolvers = {true: 'it is oftype boolean!', false: 'it is not oftype boolean!'}
        const variable_boolean = true
        const variable_not_boolean = {object:()=>{}}
        const expected_boolean = true
        const expected_not_boolean = [ resolvers.false, variable_not_boolean ]
        
        console.log( ' \x1b[31m Assertion number', 5, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is typeof boolean and also that is NOT typeof boolean', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )

        // It is boolean
        ok( await boolean_( variable_boolean, undefined, undefined  ) === expected_boolean )
        
        // It is not boolean
        deepEqual( await boolean_( variable_not_boolean, resolvers, true ), expected_not_boolean )
        
        console.log( 'Test passed, the variable is oftype boolean!' )
        console.log( 'Given variable -> ', variable_boolean )
        console.log( 'Expected result -> ', expected_boolean )
        
        console.log( '__________________________________________________________________________' )
        
        console.log( 'Test passed, the variable is NOT oftype boolean!' )
        console.log( 'Given variable -> ', variable_not_boolean )
        console.log( 'Expected result -> ', expected_not_boolean )
        
    },
    
    assertion6 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const expected = true
        const variable = Symbol( 'symbol_' )
    
        const expected_not_symbol = false
        const variable_not_symbol = Array( 12 )
        
        console.log( ' \x1b[31m Assertion number', 6, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type symbol and also if it is NOT', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        deepEqual( await symbol_( variable ), expected )
        
        console.log( 'Test passed, the variable is of type symbol!' )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result -> ', expected )
    
        console.log( '__________________________________________________________________________' )
    
        deepEqual( await symbol_( variable_not_symbol ), expected_not_symbol )
    
        console.log( 'Test passed, the variable is NOT oftype symbol!' )
        console.log( 'Given variable -> ', variable_not_symbol )
        console.log( 'Expected result -> ', expected_not_symbol )
        
    },
    
    assertion7 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const expected = true
        const variable = BigInt( 10_100_012 )
        
        const expected_not_bigint = false
        const variable_not_bigint = function ( ){}
        
        console.log( ' \x1b[31m Assertion number', 7, '\x1b[0m' )
        console.log( '\x1b[31m It checks if the variable is of type bigint and also if it is NOT', '\x1b[0m' )
        
        console.log( '---------------------------------------------------------------------------' )
        
        deepEqual( await bigint_( variable ), expected )
        
        console.log( 'Test passed, the variable is of type bigint!' )
        console.log( 'Given variable -> ', variable )
        console.log( 'Expected result -> ', expected )
        
        console.log( '__________________________________________________________________________' )
        
        deepEqual( await bigint_( variable_not_bigint ), expected_not_bigint )
        
        console.log( 'Test passed, the variable is NOT oftype symbol!' )
        console.log( 'Given variable -> ', variable_not_bigint )
        console.log( 'Expected result -> ', expected_not_bigint )
        
    },
}

process.argv.splice( 0, 2 )

if(  process.argv.length > 0 ){
    
    await Assertions[process.argv]()
    AssertionEvent.emit( 'end' )
    
}else {
    
    for( const assertion in Assertions )
        await Assertions[assertion]()
    
    AssertionEvent.emit( 'end' )
}