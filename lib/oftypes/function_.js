import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

const function_Symbol = Symbol.for( 'Object [ oftypes.function_ ]' )
const function_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], function_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.function_ ]
     *
     * **type check for function**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = () => {}
     *
     *     console.log( await oftypes.function_( variable, {
     *       true:'the variable is Function',
     *       false:'variable is NOT Function'
     *     }))
     *
     *     // **prints -> the variable is Function**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function function_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve ) => {

            reject( 'function_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) resolve( rejection )

                    else{

                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{
                            variable.constructor.name === 'Function' ?
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) ) :
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }

                    }
                } )
        } )
    },
} )

export default function_[ function_Symbol ]
