import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'
import { symbol_, undefined_ } from '../../index.js'

const number_Symbol = Symbol( 'Object [ oftypes.number_ ]' )
const number_ = Object.defineProperty( oftypes, number_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * The number_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function number_( variable, resolvers = { true: true, false: false }, payback = false ) {

        if ( await undefined_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )
        if ( await symbol_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )

        let types_ = types( resolvers, payback, false )
        if ( types_ !== true )
            return error( types_ )

        return new Promise( ( resolve ) => {

            Number( variable ) === parseInt( variable ) ?
                resolve( fulfilled( parseInt( variable ), resolvers.true, payback ) ) :
                resolve( fulfilled( variable, resolvers.false, payback ) )

        } )
    },
} )

export default number_[ number_Symbol ]
