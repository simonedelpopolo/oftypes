import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

/**
 * Object [ oftypes.undefined_ ]
 *
 * **type check for undefined**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable
 *
 *     console.log( await oftypes.undefined_( variable, {
 *       true:'the variable is undefined',
 *       false:'variable is set'
 *     }))
 *
 *     // **prints -> the variable is undefined**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return new Promise( ( resolve, reject ) => {

        rejects( 'undefined_', { payback:payback, strict: false, resolvers: resolvers, string: undefined } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else{

                    ! variable && variable !== null && typeof variable !== 'boolean' && typeof variable !== 'number'  && typeof variable !== 'string'
                        ? resolve( fulfilled( false, { variable: variable, resolvers: resolvers.true, payback: payback } ) )
                        : resolve( fulfilled( false, { variable: variable, resolvers: resolvers.false, payback: payback } ) )

                }
            } )
    } )
}
