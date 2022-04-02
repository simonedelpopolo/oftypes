import { argument_type_check } from '../../../index.js'
import { shared } from '../../oftypes.js'

const rejectSymbol = Symbol.for( 'Object [ oftypes.shared.reject ]' )
const reject = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], rejectSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.shared.reject ]
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
     * @returns {Promise<void> | void}
     */
    value: async function reject( oftypes, argument ){

        let string = undefined
        if( argument.string !== undefined )
            string = argument.string

        let resolvers_argument = undefined
        if( argument.resolvers_argument !== undefined )
            resolvers_argument = argument.resolvers_argument

        for await ( const type_checks of argument_type_check( argument.payback, argument.strict, argument.resolvers, string, resolvers_argument ) ){

            if( type_checks instanceof Error ) {
                type_checks.message = `❗️<oftypes.${oftypes}> argument-error\n>   ${ type_checks }`
                throw type_checks
            }
        }
    }
} )

export default reject[ rejectSymbol ]
