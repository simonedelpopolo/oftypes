import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'
import { array_, buffer_, function_, null_, promise_, undefined_ } from '../../index.js'

const object_Symbol = Symbol( 'Object [ oftype.object_ ]' )
const object_ = Object.defineProperty( oftypes, object_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * The object_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function object_( variable, resolvers = { true: true, false: false }, payback = false ) {

        if ( await undefined_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        if ( await null_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        if ( await promise_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        if ( await function_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        if( await buffer_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        if ( await array_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        let types_ = types( resolvers, payback, false )
        if ( types_ !== true )
            return error( types_ )

        return new Promise( ( resolve ) => {

            typeof variable === 'object' ?
                resolve( fulfilled( variable, resolvers.true, payback ) ) :
                resolve( fulfilled( variable, resolvers.false, payback ) )

        } )
    },
} )

export default object_[ object_Symbol ]
