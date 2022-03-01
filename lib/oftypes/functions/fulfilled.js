/**
 * Method for resolve function in Promise.
 * It checks the payback argument. If true it resolve the promise with a destructured array including the resolvers message and the checked variable.
 * Otherwise, just the resolvers.
 *
 * @param {any} variable - The variable argument.
 * @param {{true:any,false:any}} resolvers - The resolvers' argument.
 * @param {boolean} payback - The payback argument.
 * @returns {[any,any]|any} - If payback is true it resolve the promise with a destructured array including the resolvers message and the checked variable.
 */
export function fulfilled( variable, resolvers, payback ){
    
    return payback === true ?
        
        [ resolvers, variable, ] :
        
        resolvers
}
