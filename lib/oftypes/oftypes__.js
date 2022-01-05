export const oftypes__ = {
    
    /**
     * It handles the type checking from the function types. If that fails, it rejects with TypeError.
     *
     * @param {string} types_rejection - .
     * @returns {Promise<unknown>}
     */
    error: function argument( types_rejection ) {
        return new Promise( ( resolve, reject ) => {
            reject( new TypeError( types_rejection ) )
        } )
    },
    
    /**
     * It checks the types of both arguments resolvers and payback.
     *
     * @param {any} resolvers - Any kind of variable will be checked.
     * @param {any} payback - Any kind of variable will be checked.
     * @returns {string|boolean}
     */
    types: function types( resolvers, payback ) {
        
        if ( typeof payback !== 'boolean' )
            return `only boolean is an accepted parameter for payback. Given type: ${ typeof payback }`
        
        if ( resolvers === null )
            return 'only object is an accepted parameter for resolvers. Given: null'
        
        if ( resolvers.constructor && resolvers.call && resolvers.apply )
            return 'only object is an accepted parameter for resolvers. Given type: Function'
        
        if ( Array.isArray( resolvers ) )
            return 'only object is an accepted parameter for resolvers. Given type: Array'
        
        if ( typeof resolvers !== 'object' )
            return `only object is an accepted parameter for resolvers. Given type: ${ typeof resolvers }`
        
        return true
    },
    
    /**
     * Method for resolve function in Promise.
     * It checks the payback argument. If true it resolve the promise with a destructured array including the resolvers message and the checked variable.
     * Otherwise, just the resolvers.
     *
     * @param {boolean} payback - The payback argument.
     * @param {{true:any,false:any}} resolvers - The resolvers' argument.
     * @param {any} variable - The variable argument.
     * @returns {[any,any]|any} - If payback is true it resolve the promise with a destructured array including the resolvers message and the checked variable.
     */
    fulfilled: function fulfilled( payback, resolvers, variable ) {
        return payback === true ? [
            resolvers,
            variable,
        ] : resolvers
    },
}
