import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'
import {
    array_,
    bigint_,
    boolean_,
    buffer_,
    function_,
    null_,
    number_,
    object_,
    promise_,
    string_,
    symbol_,
    undefined_
} from '../../index.js'

const oftype_Symbol = Symbol( 'Object [ oftypes.oftype_ ] typeof enhanced' )
const oftype_ = Object.defineProperty( oftypes, oftype_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Enhanced typeof, and resolvers to avoid if/elseif conditional statements.
     *
     * @param {any} variable - any kind of variable.
     * @param {{[unknown:string]:any}|undefined=} resolvers - resolve the type of the variable.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise<string>}
     */
    value: async function oftype_( variable, resolvers= undefined, payback = false ){

        let gotcha = false

        const types_ = types( resolvers, payback, false )
        if ( types_ !== true )
            return error( types_ )

        const resolvers_ = {
            true:( ( type ) => {

                return type
            } ),
            false:( () => {} )
        }

        if( typeof ( await undefined_( variable, resolvers_ ) )( 'undefined' ) !== 'undefined' )
            gotcha = 'undefined'

        if( typeof ( await string_( variable, resolvers_ ) )( 'String' ) !== 'undefined' )
            gotcha = 'String'

        if( typeof ( await number_( variable, resolvers_ ) )( 'Number' ) !== 'undefined' )
            gotcha = 'Number'

        if( typeof ( await object_( variable, resolvers_ ) )( 'Object' ) !== 'undefined' )
            gotcha = 'Object'

        if( typeof ( await function_( variable, resolvers_ ) )( 'Function' ) !== 'undefined' )
            gotcha = 'Function'

        if( typeof ( await symbol_( variable, resolvers_ ) )( 'Symbol' ) !== 'undefined' )
            gotcha = 'Symbol'

        if( typeof ( await bigint_( variable, resolvers_ ) )( 'bigint' ) !== 'undefined' )
            gotcha = 'bigint'

        if( typeof ( await promise_( variable, resolvers_ ) )( 'Promise' ) !== 'undefined' )
            gotcha = 'Promise'

        if( typeof ( await null_( variable, resolvers_ ) )( 'null' ) !== 'undefined' )
            gotcha = 'null'

        if( typeof ( await boolean_( variable, resolvers_ ) )( 'Boolean' ) !== 'undefined' )
            gotcha = 'Boolean'

        if( typeof ( await array_( variable, resolvers_ ) )( 'Array' ) !== 'undefined' )
            gotcha = 'Array'

        if( typeof ( await buffer_( variable, resolvers_ ) )( 'Buffer' ) !== 'undefined' )
            gotcha = 'Buffer'

        return new Promise( resolve => {

            gotcha === false ?
                resolve( fulfilled( variable, false, payback ) ) :

                typeof resolvers === 'undefined' ?

                    resolve( fulfilled( variable, gotcha, payback ) ) :

                    resolve( fulfilled( variable, resolvers[ gotcha ], payback ) )
        } )

    },
} )

export default oftype_[ oftype_Symbol ]
