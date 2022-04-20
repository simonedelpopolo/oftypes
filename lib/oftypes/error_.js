import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

/**
 * Object [ oftypes.error_ ]
 *
 * **type check for instanceof Error**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = new Error( 'test' )
 *
 *     console.log( await oftypes.error_( variable, {
 *       true:'the variable is Error',
 *       false:'variable is NOT Error'
 *     }))
 *
 *     // **prints -> the variable is Error**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]>| PromiseRejectedResult<OftypesError> | boolean|any|[any,any,{type:string}]}
 */
export default function error_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return new Promise( ( resolve, reject ) => {

        rejects( 'error_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else{

                    variable instanceof Error
                        ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                        : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                }
            } )
    } )
}
