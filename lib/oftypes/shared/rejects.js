import argument_type_check from './argument_type_check.js'
import OftypesError from './OftypesError.js'

/**
 * Object [ oftypes.shared.rejects ]
 * it runs the type check for the arguments.
 *
 * @param {string} oftypes - Object
 * @param {{
 *   payback:any,
 *   strict:any,
 *   resolvers:any,
 *   string:boolean|undefined,
 *   resolvers_argument: {truthy:any,falsy:any}=
 * }} argument - arguments
 * @throws {OftypesError}
 * @returns {Promise<undefined|OftypesError> | undefined|OftypesError}
 */
export default async function rejects( oftypes, argument ){

    let string = undefined
    if( argument.string !== undefined )
        string = argument.string

    let resolvers_argument = undefined
    if( argument.resolvers_argument !== undefined )
        resolvers_argument = argument.resolvers_argument

    let rejection = undefined
    for await ( let type_checks of argument_type_check( argument.payback, argument.strict, argument.resolvers, string, resolvers_argument ) ){

        if( type_checks.constructor.name === 'String' ) {
            type_checks = `❗️<oftypes.${oftypes}> argument-error\n>   ${ type_checks }`
            rejection = new OftypesError( type_checks )

            break
        }
    }

    return rejection

}
