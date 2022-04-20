/**
 * Extending TypeError.
 *
 * @param {string} message - the error message to be thrown.
 * @returns {OftypesError}
 */
export default function OftypesError( message ){

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
