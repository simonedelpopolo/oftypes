import oftypes from '../oftypes.js'
import { resolves } from '../../index.js'

const boolean_Symbol = Symbol.for( 'Object [ oftypes.boolean_ ]' )
const boolean_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], boolean_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.boolean_ ]
     *
     * **type check for boolean**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = true
     *
     *     console.log( await oftypes.boolean_( variable, {
     *       true:'the variable is Boolean',
     *       false:'variable is NOT Boolean'
     *     }))
     *
     *     // **prints -> the variable is Boolean**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, reject ) => {

            resolves( {
                name: 'boolean_',
                x: 'Boolean'
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

export default boolean_[ boolean_Symbol ]
