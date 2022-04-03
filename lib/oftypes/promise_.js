import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

const promise_Symbol = Symbol.for( 'Object [ oftypes.promise_ ]' )
const promise_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], promise_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.promise_ ]
     *
     * **type check for promise**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = new Promise( resolve => resolve( 'ok' ) )
     *
     *     console.log( await oftypes.promise_( variable, {
     *       true:'the variable is Promise',
     *       false:'variable is NOT Promise'
     *     }))
     *
     *     // **prints -> the variable is Promise**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function promise_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve ) => {

            reject( 'promise_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) resolve( rejection )

                    else{

                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{
                            variable.constructor.name === 'Promise' ?
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) ) :
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }

                    }
                } )
        } )
    },
} )

export default promise_[ promise_Symbol ]
