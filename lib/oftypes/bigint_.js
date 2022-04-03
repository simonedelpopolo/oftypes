import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

const bigint_Symbol = Symbol.for( 'Object [ oftypes.bigint_ ]' )
const bigint_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], bigint_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.bigint_ ]
     *
     * **type check for bigint**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = BigInt( 10_100_012 )
     *
     *     console.log( await oftypes.bigint_( variable, {
     *       true:'the variable is BigInt',
     *       false:'variable is NOT BigInt'
     *     }))
     *
     *     // **prints -> the variable is BigInt**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, rejects ) => {

            reject( 'bigint_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) rejects( rejection )

                    else{


                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{

                            variable.constructor.name === 'BigInt'
                                ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                                : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }
                    }
                } )
        } )
    },
} )

export default bigint_[ bigint_Symbol ]
