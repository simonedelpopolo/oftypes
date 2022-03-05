import { error } from './functions/error.js'
import { fulfilled } from './functions/fulfilled.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'
import { null_, undefined_ } from '../../index.js'

const promise_Symbol = Symbol( 'Object [ oftypes.promise_ ]' )
const promise_ = Object.defineProperty( oftypes, promise_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The promise_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function promise_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )
        if ( await null_( variable ) === true ) return ( fulfilled( variable, resolvers.false, payback ) )
    
        let types_ = types( resolvers, payback )
        if ( types_ !== true )
            return error( types_ )
        
        return new Promise( ( resolve ) => {
            
            variable.constructor.name === 'Promise' || variable.constructor.name === 'AsyncFunction' ?
    
                resolve( fulfilled( variable, resolvers.true, payback ) ) :
                resolve( fulfilled( variable, resolvers.false, payback ) )
            
        } )
    },
} )

export default promise_[ promise_Symbol ]
