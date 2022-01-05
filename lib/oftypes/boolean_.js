import oftypes from '../oftypes.js'
import { oftypes__ } from './oftypes__.js'
import { undefined_ } from '../../index.js'

export const boolean_Symbol = Symbol( 'Function boolean_(variable, resolvers, payback):any' )
export const boolean_ = Object.defineProperty( oftypes, boolean_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The boolean_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'boolean' ?
                
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )
