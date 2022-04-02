import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

const array_Symbol = Symbol.for( 'Object [ oftypes.array_ ]' )
const array_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], array_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.array_ ]
     *
     * **type check for array**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = [ 45, { string: 'hello' } ]
     *
     *     console.log( await oftypes.array_( variable, {
     *       true:'the variable is Array',
     *       false:'variable is NOT Array'
     *     }))
     *
     *     // **prints -> the variable is Array**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function array_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve ) => {

            reject( 'array_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )

            if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

            variable.constructor.name === 'Array' ?
                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) ) :
                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )
        } )
    },
} )

export default array_[ array_Symbol ]
