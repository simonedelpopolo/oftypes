import empty from './shared/empty.js'
import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

/**
 * Object [ oftypes.promise_ ]
 *
 * - for backward compatibility still chasing also AsyncFunction
 * - recommended Object [ oftype.async_ ] to chase AsyncFunction
 *
 * **type check for promise**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = new Promise( resolve => resolve( 'ok' ) )
 *
 *     console.log( await oftypes.promise_( variable, {
 *       true:'the variable is Promise',
 *       false:'variable is NOT Promise'
 *     }))
 *
 *     // **prints -> the variable is Promise**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function promise_( variable, resolvers = { true: true, false: false }, payback = false ) {

    const rejection = await rejects( 'promise_', { resolvers: resolvers, payback: payback, strict: false, string: undefined } )

    return new Promise( ( resolve, reject ) => {

        if( rejection ) reject( rejection )

        else{

            if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

            else{
                variable.constructor.name === 'Promise' || variable.constructor.name === 'AsyncFunction'
                    ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                    : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

            }
        }
    } )
}
