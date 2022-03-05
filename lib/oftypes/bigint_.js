import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'
import { undefined_ } from '../../index.js'

const bigint_Symbol = Symbol( 'Object [ oftypes.bigint_ ]' )
const bigint_ = Object.defineProperty( oftypes, bigint_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The bigint_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
        if ( await undefined_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )
    
        let types_ = types( resolvers, payback )
        if ( types_ !== true )
            return error( types_ )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'bigint' ?
                resolve( fulfilled( variable, resolvers.true, payback ) ) :
                resolve( fulfilled( variable, resolvers.false, payback ) )
            
        } )
    },
} )

export default bigint_[ bigint_Symbol ]
