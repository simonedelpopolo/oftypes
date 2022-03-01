const consoleTimeMessage = '|               \x1b[33massertion finished\x1b[0m                           |'
console.time( consoleTimeMessage )
import { EventEmitter } from 'events'
import { stat } from 'fs/promises'
import { array_, bigint_, boolean_, buffer_, null_, number_, object_, promise_, string_, symbol_ } from '../index.js'
import { deepEqual, ok } from 'assert'

const AssertionEvent = new EventEmitter()
console.log( ' --------------------------------------------------------------------------' )
console.log( '|               \x1b[33massertion started\x1b[0m', new Date(), '                |' )
console.log( ' --------------------------------------------------------------------------' )
AssertionEvent.on( 'end', () => {
    
    console.log( '___________________________________________________________________________' )
    console.log()
    console.log( ' --------------------------------------------------------------------------' )
    console.timeEnd( consoleTimeMessage )
    console.log( ' --------------------------------------------------------------------------' )
    
    console.log()
    console.log( '---------------------------------------------------------------------------' )
    if( status === 'failed' )
        process.exit( 1 )
} )

let status

const Assertions = {
    
    assertion0 : async () => {
    
        let test_results
        let failed = false
    
        console.log( '__________________________________________________________________________' )
    
        console.log( '\x1b[32mthe variable is of type string', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
        console.log( '    \x1b[32mthe variable is oftypes<string>', '\x1b[31mstatement ->', 0, '\x1b[0m' )
        console.log( '    \x1b[32mthe variable is NOT oftypes<string>', '\x1b[31mstatement ->', 1, '\x1b[0m' )
    
        Assertions.assertion0.statement = {
            '0' : async () => {
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                const expected = true
                const variable = 'hello folks'
    
                try {
                    ok( await string_( variable ) === expected, 'something went wrong' )
                    test_results = true
                }catch ( error ) {
                    test_results = error
                    failed = true
                }
    
                status = failed === true ? 'failed' : 'concluded'
                Assertions.assertion0.statement[ '0' ].message = `test ${status} -> the variable is oftypes<string>`
                
                let results = test_results
                
                return { results, variable }
            },
            
            '1': async () => {
                
                console.log( '    \x1b[31m executing statement -> ', 1, '\x1b[0m\n' )
                const expected = [ false, 10 ]
                const variable1 = 10
    
                try {
                    deepEqual( await string_( variable1, undefined, true ), expected, 'something went wrong!' )
                    test_results = true
                }catch ( error ) {
                    test_results = error
                    failed = true
                }
    
                status = failed === true ? 'failed' : 'concluded'
                Assertions.assertion0.statement[ '1' ].message = `test ${status} -> the variable is oftypes<string>`
    
                let results1 = test_results
    
                return { results1, variable1 }
            }
        }
    
        console.log( '---------------------------------------------------------------------------' )
        const { results, variable } = await Assertions.assertion0.statement[ '0' ]()
        console.log( '\x1b[32m\nreturn ⬇︎', '\x1b[0m\n' )
        console.log( 'returned response -> ', results )
        console.log( 'given variable -> ', variable )
        console.log( Assertions.assertion0.statement[ '0' ].message )
    
        console.log( '---------------------------------------------------------------------------' )
        const { results1, variable1 } = await Assertions.assertion0.statement[ '1' ]()
        console.log( '\x1b[32m\nreturn ⬇︎', '\x1b[0m\n' )
        console.log( 'returned response -> ', results1 )
        console.log( 'given variable -> ', variable1 )
        console.log( Assertions.assertion0.statement[ '1' ].message )
        
    },
    
    assertion1 : async () => {
        
        let test_results
        let failed = false
    
        console.log( '__________________________________________________________________________' )
    
        console.log( '\x1b[32mthe variable is of type buffer', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
        console.log( '    \x1b[32mthe variable is oftypes<Buffer>', '\x1b[31mstatement ->', 0, '\x1b[0m' )
    
        Assertions.assertion1.statement = {
            '0' : async () => {
                
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                const expected = true
                const variable = Buffer.from( 'hello folks' )
            
                try {
                    ok( await buffer_( variable ) === expected, 'something went wrong' )
                    test_results = true
                }catch ( error ) {
                    test_results = error
                    failed = true
                }
            
                status = failed === true ? 'failed' : 'concluded'
                Assertions.assertion1.statement[ '0' ].message = `test ${status} -> the variable is oftypes<Buffer>`
            
                let results = test_results
            
                return { results, variable }
            },
        }
    
        console.log( '---------------------------------------------------------------------------' )
        const { results, variable } = await Assertions.assertion1.statement[ '0' ]()
        console.log( '\x1b[32m\nreturn ⬇︎', '\x1b[0m\n' )
        console.log( 'returned response -> ', results )
        console.log( 'given variable -> ', variable )
        console.log( Assertions.assertion1.statement[ '0' ].message )
    },
    
    assertion2 : async () => {
        
        console.log( '__________________________________________________________________________' )
        
        const resolvers = { true: 'it is type of string!', false: 'it is not of type string!' }
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
        if ( typeof fileStat[ 0 ] === 'function' )
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
        
        const resolvers = { true: 'it is null!', false: 'it is not null!' }
        const variable = { object:null }
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
        
        const resolvers = { true: 'it is oftype boolean!', false: 'it is not oftype boolean!' }
        const variable_boolean = true
        const variable_not_boolean = { object:() => {} }
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
        
        console.log( 'Test passed, the variable is NOT oftype bigint!' )
        console.log( 'Given variable -> ', variable_not_bigint )
        console.log( 'Expected result -> ', expected_not_bigint )
        
    },
    
    assertion8 : async () => {
        console.log( '__________________________________________________________________________' )
    
        console.log( '\x1b[31m Assertions type of array', 8, '\x1b[0m' )
        console.log( '    \x1b[31m check the variable if it is of type array, it will get the payback', 0, '\x1b[0m' )
        console.log( '    \x1b[31m check the variable if it is of type array from a given object, it will get the payback. must return false.', 1, '\x1b[0m' )
    
        let response
        Assertions.assertion8.statement = {
        
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing array_', 0, '\x1b[0m\n' )
                
                const variable = [ { hello:'ciao' } ]
                response = await array_( variable, undefined, true )
            
                try{
                    ok( response[ 0 ] === true )
                }catch ( error ) {
                    response = error.message
                }
            
                Assertions.assertion8.statement[ '0' ].message = 'test concluded'
            
                return response
            },
    
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing array_ must return false', 1, '\x1b[0m\n' )
        
                const variable = { hello: 'ciao' }
                response = await array_( variable, undefined, true )
                
                try{
                    ok( response[ 0 ] === false, 'assertion failed' )
                }catch ( error ) {
                    response = error
                }
        
                Assertions.assertion8.statement[ '1' ].message = 'test concluded'
        
                return response
            },
        
        }
    
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion8.statement[ '0' ]()
        console.log( Assertions.assertion8.statement[ '0' ].message )
        console.log( 'returned response -> ', await  response0 )
    
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion8.statement[ '1' ]()
        console.log( Assertions.assertion8.statement[ '1' ].message )
        console.log( 'returned response -> ', await  response1 )
    },
    
    assertion9 : async () => {
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[31m Assertions type of object', 9, '\x1b[0m' )
        console.log( '    \x1b[31m check the variable if it is of type object, it will get the payback', 0, '\x1b[0m' )
        console.log( '    \x1b[31m check the variable if it is of type object from a given array, it will get the payback. must return false.', 1, '\x1b[0m' )
        
        let response
        Assertions.assertion9.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing object_', 0, '\x1b[0m\n' )
                
                const variable = { hello:'ciao' }
                response = await object_( variable, undefined, true )
                
                try{
                    ok( response[ 0 ] === true )
                }catch ( error ) {
                    response = error.message
                }
                
                Assertions.assertion9.statement[ '0' ].message = 'test concluded'
                
                return response
            },
            
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing object_ must return false', 1, '\x1b[0m\n' )
                
                const variable = [ { hello: 'ciao' } ]
                response = await object_( variable, undefined, true )
                
                try{
                    ok( response[ 0 ] === false, 'assertion failed' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion9.statement[ '1' ].message = 'test concluded'
                
                return response
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion9.statement[ '0' ]()
        console.log( Assertions.assertion9.statement[ '0' ].message )
        console.log( 'returned response -> ', await  response0 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion9.statement[ '1' ]()
        console.log( Assertions.assertion9.statement[ '1' ].message )
        console.log( 'returned response -> ', await  response1 )
    },
    
    assertion10 : async () => {
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[31m Assertions conditional if for object and array', 10, '\x1b[0m' )
        console.log( '    \x1b[31m conditional if "object || array" ', 0, '\x1b[0m' )
        console.log( '    \x1b[31m conditional if "object && array" ', 1, '\x1b[0m' )
        
        let response
        Assertions.assertion10.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing "object || object" ', 0, '\x1b[0m\n' )
                
                const obj = { hello:'ciao' }
                const arr = [ { hello:'ciao' } ]
                
                if( await object_( obj ) === false || await object_( arr ) === false )
                    response = 'caught'
                else
                    response = 'not caught'
    
                try{
                    ok( response === 'caught', 'not caught' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion10.statement[ '0' ].message = 'test concluded'
                
                return response
            },
    
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing "object && array" ', 1, '\x1b[0m\n' )
        
                const obj = { hello:'ciao' }
                const arr = [ { hello:'ciao' } ]
                
                if( ( await object_( obj ) === true ) && ( await array_( arr ) === true ) )
                    response = 'caught'
                else
                    response = 'not caught'
        
                try{
                    ok( response === 'caught', 'not caught' )
                }catch ( error ) {
                    response = error
                }
        
                Assertions.assertion10.statement[ '1' ].message = 'test concluded'
        
                return response
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion10.statement[ '0' ]()
        console.log( Assertions.assertion10.statement[ '0' ].message )
        console.log( 'returned response -> ', await  response0 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion10.statement[ '1' ]()
        console.log( Assertions.assertion10.statement[ '1' ].message )
        console.log( 'returned response -> ', await  response1 )
    },
    
    assertion11 : async () => {
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[31m Assertions is null', 11, '\x1b[0m' )
        console.log( '    \x1b[31m statement is null object ', 0, '\x1b[0m' )
        
        let response
        Assertions.assertion11.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing ', 0, '\x1b[0m\n' )
                
                response = await object_( null )

                try{
                    ok( response === false, 'something wrong with the statement asserted' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion11.statement[ '0' ].message = 'test concluded'
                
                return response
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion11.statement[ '0' ]()
        console.log( Assertions.assertion11.statement[ '0' ].message )
        console.log( 'returned response -> ', await  response0 )
    },
    
    assertion12 : async () => {
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[31m Assertions is number', 12, '\x1b[0m' )
        console.log( '    \x1b[31m statement is number ', 0, '\x1b[0m' )
        console.log( '    \x1b[31m statement is number ', 1, '\x1b[0m' )
        console.log( '    \x1b[31m statement is NOT number ', 2, '\x1b[0m' )
        
        let response
        Assertions.assertion12.statement = {
            
            '0' : async ( ) => {
                console.log( '    \x1b[31m executing ', 0, '\x1b[0m\n' )
                
                const variable = '10'
                const expected = 10
                
                response = await number_( variable, undefined, true )
                
                try{
                    deepEqual( response[ 1 ], expected, 'something wrong with the statement asserted' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion12.statement[ '0' ].message = 'test concluded'
                
                return response
            },
            '1' : async ( ) => {
                console.log( '    \x1b[31m executing ', 1, '\x1b[0m\n' )
                
                const variable = 10
                const expected = 10
                
                response = await number_( variable, undefined, true )
                
                try{
                    deepEqual( response[ 1 ], expected, 'something wrong with the statement asserted' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion12.statement[ '1' ].message = 'test concluded'
                
                return response
            },
            '2' : async ( ) => {
                console.log( '    \x1b[31m executing ', 2, '\x1b[0m\n' )
                
                const variable = 'hello'
                const expected = [ false, 'hello' ]
                
                response = await number_( variable, undefined, true )
                
                try{
                    deepEqual( response, expected, 'something wrong with the statement asserted' )
                }catch ( error ) {
                    response = error
                }
                
                Assertions.assertion12.statement[ '2' ].message = 'test concluded'
                
                return response
            },
            
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const response0 = await Assertions.assertion12.statement[ '0' ]()
        console.log( Assertions.assertion12.statement[ '0' ].message )
        console.log( 'returned response -> ', await  response0 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response1 = await Assertions.assertion12.statement[ '1' ]()
        console.log( Assertions.assertion12.statement[ '1' ].message )
        console.log( 'returned response -> ', await  response1 )
        
        console.log( '---------------------------------------------------------------------------' )
        const response2 = await Assertions.assertion12.statement[ '2' ]()
        console.log( Assertions.assertion12.statement[ '2' ].message )
        console.log( 'returned response -> ', await  response2 )
    },
    
    assertion13 : async () => {
        
        let test_results
        let failed = false
        
        console.log( '__________________________________________________________________________' )
        
        console.log( '\x1b[32mthe variable is of type promise', '\x1b[31massertion ->', 0, '\x1b[0m' )
        console.log( '  \x1b[32mlisting statements', '\x1b[0m' )
        console.log( '    \x1b[32mthe variable is oftypes<Promise>', '\x1b[31mstatement ->', 0, '\x1b[0m' )
        
        Assertions.assertion13.statement = {
            '0' : async () => {
                
                console.log( '    \x1b[31m executing statement -> ', 0, '\x1b[0m\n' )
                const expected = true
                const variable = async () => {}
                
                try {
                    ok( await promise_( variable ) === expected, 'something went wrong' )
                    test_results = true
                }catch ( error ) {
                    test_results = error
                    failed = true
                }
                
                status = failed === true ? 'failed' : 'concluded'
                Assertions.assertion13.statement[ '0' ].message = `test ${status} -> the variable is oftypes<Promise>`
                
                let results = test_results
                
                return { results, variable }
            },
        }
        
        console.log( '---------------------------------------------------------------------------' )
        const { results, variable } = await Assertions.assertion13.statement[ '0' ]()
        console.log( '\x1b[32m\nreturn ⬇︎', '\x1b[0m\n' )
        console.log( 'returned response -> ', results )
        console.log( 'given variable -> ', variable )
        console.log( Assertions.assertion13.statement[ '0' ].message )
    },
    
}

process.argv.splice( 0, 2 )

if(  process.argv.length > 0 ){
    
    await Assertions[ process.argv ]()
    AssertionEvent.emit( 'end' )
    
}else {
    
    for( const assertion in Assertions )
        await Assertions[ assertion ]()
    
    AssertionEvent.emit( 'end' )
}
