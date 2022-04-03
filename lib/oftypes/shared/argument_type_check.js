import { shared } from '../../oftypes.js'

const argument_type_checkSymbol = Symbol.for( 'Object [ oftypes.shared.argument_type_check ]' )
const argument_type_check = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], argument_type_checkSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Type checking for the arguments passed to any of the oftypes Objects function.
     *
     * @param {any} payback - argument
     * @param {any} strict - argument for node:assert/deepStrictEqual @ Object [ oftypes.compare ]
     * @param {any} resolvers - argument
     * @param {any|undefined} string - argument @ Object [ oftypes.number_ ]
     * @param {{truthy:any,falsy:any}|undefined=} resolvers_argument - arguments string @ Object [ oftypes.resolvers ]
     * @yields
     * @returns {AsyncGenerator< boolean|OftypesError, boolean, void>}
     */
    // \u001b[4m${ this }\x1b[0m
    value: async function* argument_type_check( payback, strict, resolvers, string, resolvers_argument ){

        if( resolvers_argument !== undefined ){

            if( resolvers_argument.truthy === undefined || resolvers_argument.falsy === undefined )
                yield '\u001b[4m♠ both arguments \'truthy\' & \'falsy\' are required\x1b[0m'
            else yield true

        }else{
            yield payback.constructor.name === 'Boolean'
                ? true
                : `\u001b[4m♠ only boolean is an accepted argument for payback. Given type: ${ payback.constructor.name }\x1b[0m`

            yield strict.constructor.name === 'Boolean'
                ? true
                : `\u001b[4m♠ only boolean is an accepted argument for strict. Given type: ${ strict.constructor.name }\x1b[0m`

            yield resolvers === null
                ? `\u001b[4m♠ only Object is an accepted argument for resolvers. Given type: ${ null }\x1b[0m`
                : true

            if( resolvers !== undefined ) {
                yield resolvers.constructor.name === 'Object'
                    ? true
                    : `\u001b[4m♠ only Object is an accepted argument for resolvers. Given type: ${ resolvers.constructor.name }\x1b[0m`

                const resolversKeys = Object.keys( resolvers )
                resolversKeys.includes( 'true' ) && resolversKeys.includes( 'false' )
                    ? yield true
                    : yield `\u001b[4m♠ resolvers argument must have only properties "true" & "false". Given properties: ${ resolversKeys }\x1b[0m`
            }

            if( string !== undefined ) {
                yield string.constructor.name === 'Boolean'
                    ? true
                    : `\u001b[4m♠ only boolean is an accepted argument for string. Given type: ${ string.constructor.name }\x1b[0m`
            }
        }
    }
} )

export default argument_type_check[ argument_type_checkSymbol ]
