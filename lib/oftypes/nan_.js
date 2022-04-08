import oftypes from '../oftypes.js'
import { empty, fulfilled, rejects } from '../../index.js'

const nan_Symbol = Symbol.for( 'Object [ oftypes.nan_ ]' )
const nan_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], nan_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.nan_ ]
     *
     * **type check for nan**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable =
     *
     *     console.log( await oftypes.array_( variable, {
     *       true:'the variable is NaN',
     *       false:'variable is NOT NaN'
     *     }))
     *
     *     // **prints -> the variable is NaN**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function nan_( variable, resolvers = { true: true, false: false }, payback = false ){

        return new Promise( ( resolve, reject ) => {

            rejects( 'array_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) reject( rejection )

                    else{

                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{
                            isNaN( variable )
                                ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                                : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }

                    }
                } )
        } )
    }
} )

export default nan_[ nan_Symbol ]
