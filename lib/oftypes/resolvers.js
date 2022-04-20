import rejects from './shared/rejects.js'

/**
 * Object [ oftypes.resolvers ]
 *
 * It sets the resolvers in the form of an Object -> `{true: any, false: any}`.
 * This function is made to simplify the way to pass the resolvers to **oftypes.[type_functions]**.
 *
 * @param {any} truthy - resolver
 * @param {any} falsy - resolver
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     const truthy = 'variable is Number, thanks to resolvers function'
 *     const falsy = 'variable is NOT Number'
 *
 *     console.log(
 *       await oftypes.number_(
 *         '10', await oftypes.resolvers(truthy, falsy)
 *       )
 *     )
 *
 *     // **prints -> variable is Number, thanks to resolvers function**
 * @throws {OftypesError}
 * @returns {Promise<{true:any, false:any}>|{true:any, false:any}}
 */
export default function resolvers( truthy, falsy ){

    return new Promise( ( resolve, reject ) => {

        rejects( 'resolvers', { resolvers_argument: { truthy: truthy, falsy: falsy } } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else resolve( { true: truthy, false: falsy } )

            } )

    } )
}
