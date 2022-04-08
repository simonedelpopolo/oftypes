import oftypes from '../oftypes.js'
import { resolves } from '../../index.js'

const async_Symbol = Symbol.for( 'Object [ oftypes.async_ ]' )
const async_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], async_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.async_ ]
     *
     * **type check for async**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = async () => {}
     *
     *     console.log( await oftypes.async_( variable, {
     *       true:'the variable is AsyncFunction',
     *       false:'variable is NOT AsyncFunction'
     *     }))
     *
     *     // **prints -> the variable is AsyncFunction**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function async_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, reject ) => {

            resolves( {
                name: 'async_',
                x: 'AsyncFunction'
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

export default async_[ async_Symbol ]
