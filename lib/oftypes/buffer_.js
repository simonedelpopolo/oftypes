import oftypes from '../oftypes.js'
import { resolves } from '../../index.js'

const buffer_Symbol = Symbol.for( 'Object [ oftypes.buffer_ ]' )
const buffer_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], buffer_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.buffer_ ]
     *
     * **type check for buffer**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = Buffer.from('hello folks')
     *
     *     console.log( await oftypes.buffer_( variable, {
     *       true:'the variable is Buffer',
     *       false:'variable is NOT Buffer'
     *     }))
     *
     *     // **prints -> the variable is Buffer**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function buffer_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, reject ) => {

            resolves( {
                name: 'buffer_',
                x: 'Buffer'
            }, {
                variable:variable,
                resolvers:resolvers,
                payback: payback
            }, {
                resolve: resolve,
                reject: reject
            } )
        } )
    },
} )

export default buffer_[ buffer_Symbol ]
