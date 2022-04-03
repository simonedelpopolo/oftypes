import oftypes from '../oftypes.js'
import { empty, fulfilled, reject } from '../../index.js'

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

        return new Promise( ( resolve, rejects ) => {

            reject( 'async_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
                .then( rejection => {

                    if( rejection ) rejects( rejection )

                    else{

                        if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        else{
                            variable.constructor.name === 'AsyncFunction' ?
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) ) :
                                resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                        }

                    }
                } )
        } )
    },
} )

export default async_[ async_Symbol ]
