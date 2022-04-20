import empty from './shared/empty.js'
import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

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
export default function nan_( variable, resolvers = { true: true, false: false }, payback = false ){

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
