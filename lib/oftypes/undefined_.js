import oftypes from '../oftypes.js'
import { oftypes__ } from './oftypes__.js'

/**
 * @type {symbol}
 */
export const undefined_Symbol = Symbol( 'Function undefined_(variable, resolvers, payback):any' )
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
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            typeof variable === 'undefined' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        } )
    },
} )

// Freeze the oftypes Object Module
Object.freeze( oftypes )
