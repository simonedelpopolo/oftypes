/**
 * It checks the types of both arguments resolvers and payback.
 *
 * @param {any} resolvers - Any kind of variable will be checked.
 * @param {any} payback - Any kind of variable will be checked.
 * @returns {string|boolean}
 */
export function types( resolvers, payback ) {
    
    if ( typeof payback !== 'boolean' )
        return `only boolean is an accepted parameter for payback. Given type: ${ typeof payback }`
    
    if( typeof resolvers !== 'undefined' ){
        if ( resolvers === null )
            return 'only object is an accepted parameter for resolvers. Given: null'
    
        if ( resolvers.constructor && resolvers.call && resolvers.apply )
            return 'only object is an accepted parameter for resolvers. Given type: Function'
    
        if ( Array.isArray( resolvers ) )
            return 'only object is an accepted parameter for resolvers. Given type: Array'
    
        if ( typeof resolvers !== 'object' )
            return `only object is an accepted parameter for resolvers. Given type: ${ typeof resolvers }`
    }
    
    
    return true
}
