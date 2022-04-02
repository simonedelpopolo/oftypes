import { shared } from '../../oftypes.js'

const OftypesErrorSymbol = Symbol.for( 'Object [ oftypes.shared.OftypesError ]' )
const OftypesError = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], OftypesErrorSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Extending TypeError.
     *
     * @param {string} message - the error message to be thrown.
     * @returns {OftypesError}
     */
    value: function OftypesError( message ){

        /**
         * Extending TypeError.
         *
         * @param {string} message - the error message to be thrown.
         * @returns {OftypesError}
         */
        function OftypesErrorObject( message ) {

            /**
             * @type {OftypesError}
             */
            let ErrorReference = new TypeError( message )
            ErrorReference.name = 'OftypesError'
            Object.setPrototypeOf( ErrorReference, Object.getPrototypeOf( this ) )
            if ( TypeError.captureStackTrace )
                TypeError.captureStackTrace( ErrorReference, OftypesErrorObject )

            return ErrorReference
        }

        OftypesErrorObject.prototype = Object.create( TypeError.prototype, {
            constructor: {
                value: TypeError,
                enumerable: true,
                writable: false,
                configurable: false
            }
        } )

        Object.setPrototypeOf( OftypesErrorObject, TypeError )

        return new OftypesErrorObject( message )

    }
} )

export default OftypesError[ OftypesErrorSymbol ]
