import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

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
export default function null_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return new Promise( ( resolve, reject ) => {

        rejects( 'null_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else{

                    variable === null
                        ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                        : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                }
            } )
    } )
}
