import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

const object_Symbol = Symbol.for( 'Object [ oftype.object_ ]' )
const object_ = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], object_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.object_ ]
     *
     * **type check for object**.
     *
     * @param {any} variable - to check for
     * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
     * @param {boolean} [payback=false] - If true it will send back the variable value.
     * @example
     *     import * as oftypes from 'oftypes'
     *
     *     let variable = { func:() => {} }
     *
     *     console.log( await oftypes.object_( variable, {
     *       true:'the variable is Object',
     *       false:'variable is NOT Object'
     *     }))
     *
     *     // **prints -> the variable is Object**
     * @throws {OftypesError}
     * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
     */
    value: function object_( variable, resolvers = { true: true, false: false }, payback = false ) {

        return new Promise( ( resolve, rejects ) => {

            reject( 'object_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) rejects( rejection )

                    else{

                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{
                            variable.constructor.name === 'Object'
                                ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                                : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }

                    }
                } )
        } )
    },
} )

export default object_[ object_Symbol ]
