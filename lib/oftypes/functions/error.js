/**
 * It handles the type checking from the function types. If that fails, it rejects with TypeError.
 *
 * @param {string} types_rejection - .
 * @returns {Promise<unknown>}
 */
export function error( types_rejection ) {
    return new Promise( ( resolve, reject ) => {
        reject( new TypeError( types_rejection ) )
    } )
}
