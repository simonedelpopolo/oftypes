import { argument_type_check } from '../../../index.js'
import { OftypesError } from '../../../public.js'
import { shared } from '../../oftypes.js'

const rejectsSymbol = Symbol.for( 'Object [ oftypes.shared.rejects ]' )
const rejects = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], rejectsSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

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
    value: function reject( oftypes, argument ){

        let string = undefined
        if( argument.string !== undefined )
            string = argument.string

        let resolvers_argument = undefined
        if( argument.resolvers_argument !== undefined )
            resolvers_argument = argument.resolvers_argument

        return ( async () => {
            let rejection = undefined
            for await ( let type_checks of argument_type_check( argument.payback, argument.strict, argument.resolvers, string, resolvers_argument ) ){

                if( type_checks.constructor.name === 'String' ) {
                    type_checks = `❗️<oftypes.${oftypes}> argument-error\n>   ${ type_checks }`
                    rejection = new OftypesError( type_checks )

                    break
                }
            }

            return rejection
        } )()

    }
} )

export default rejects[ rejectsSymbol ]
