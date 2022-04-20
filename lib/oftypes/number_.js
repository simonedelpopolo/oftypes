import empty from './shared/empty.js'
import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

/**
 * Object [ oftypes.number_ ]
 *
 * **_type check for Number_**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @param {boolean} [string=true] - consider Number also string like number variable.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = 10
 *
 *     console.log( await oftypes.number_( variable, {
 *       true:'the variable is Number',
 *       false:'variable is NOT Number'
 *     }))
 *
 *     // **prints -> the variable is Number**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function number_( variable, resolvers = { true: true, false: false }, payback = false, string = true ) {

    const rejection = await rejects( 'number_', { payback:payback, resolvers:resolvers, strict: false, string: string } )

    return new Promise( ( resolve, reject ) => {

        if( rejection ) reject( rejection )

        else{

            if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, resolvers: resolvers.false, payback: payback } ) )

            else if( string ){
                Number( variable ) === parseInt( variable )
                    ? resolve( fulfilled( false, { variable:variable, resolvers: resolvers.true, payback: payback } ) )
                    : resolve( fulfilled( false, { variable:variable, resolvers: resolvers.false, payback: payback } ) )

            }else{

                variable.constructor.name === 'Number'
                    ? resolve( fulfilled( false, { variable:variable, resolvers: resolvers.true, payback: payback } ) )
                    : resolve( fulfilled( false, { variable:variable, resolvers: resolvers.false, payback: payback } ) )

            }
        }
    } )
}
