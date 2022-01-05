import oftypes from '../oftypes.js'
import { oftypes__ } from './oftypes__.js'
import { undefined_ } from '../../index.js'

/**
 * @type {symbol}
 */
export const number_Symbol = Symbol( 'Function number_(variable, resolvers, payback):any' )
export const number_ = Object.defineProperty( oftypes, number_Symbol, {
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
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'number' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )
