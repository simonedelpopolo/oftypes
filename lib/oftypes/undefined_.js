import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'

export const undefined_Symbol = Symbol( 'Object [ oftypes.undefined_ ] ' )
export const undefined_ = Object.defineProperty( oftypes, undefined_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * The undefined_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @example
     *     let variable
     *
     *     console.log( await oftype.undefined_( variable, {
     *       true:'the variable is undefined',
     *       false:'variable is set'
     *     }))
     *
     *     // yield: the variable is undefined
     * @returns {Promise | PromiseFulfilledResult<any> | PromiseRejectedResult<TypeError>}
     */
    value: function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {

        let types_ = types( resolvers, payback, false )
        if ( types_ !== true )
            return error( types_ )

        return new Promise( ( resolve ) => {
            typeof variable === 'undefined' ?
                resolve( fulfilled( variable, resolvers.true, payback ) ) :
                resolve( fulfilled( variable, resolvers.false, payback ) )
        } )
    },
} )

export default undefined_[ undefined_Symbol ]
