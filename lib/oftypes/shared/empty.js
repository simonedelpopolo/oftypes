import { shared } from '../../oftypes.js'

const emptySymbol = Symbol.for( 'Object [ oftypes.shared.empty ]' )
const empty = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], emptySymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.shared.empty ]
     * resolve and return for undefined variable or set to null.
     *
     * @param {any} variable - variable
     * @returns { boolean }
     */
    value: function empty( variable ){
        if( ! variable && typeof variable !== 'boolean' && typeof variable !== 'number' && typeof variable !== 'string' )
            return true
    }
} )

export default empty[ emptySymbol ]
