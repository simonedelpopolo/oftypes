import oftypes from '../oftypes.js'
import { fulfilled, reject } from '../../index.js'

const null_Symbol = Symbol.for( 'Object [ oftypes.null_ ]' )
const null_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], null_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.null_ ]
     *
     * **type check for null**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = null
     *
     *     console.log( await oftypes.null_( variable, {
     *       true:'the variable is null',
     *       false:'variable is NOT null'
     *     }))
     *
     *     // **prints -> the variable is null**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function null_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, rejects ) => {

            reject( 'null_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) rejects( rejection )

                    else{

                        variable === null
                            ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                            : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                    }
                } )
        } )
    },
} )

export default null_[ null_Symbol ]
