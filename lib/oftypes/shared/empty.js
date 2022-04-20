/**
 * Object [ oftypes.shared.empty ]
 * resolve and return for undefined variable or set to null.
 *
 * @param {any} variable - variable
 * @returns { boolean }
 */
export default  function empty( variable ){
    if( ! variable && typeof variable !== 'boolean' && typeof variable !== 'number' && typeof variable !== 'string' )
        return true
}
