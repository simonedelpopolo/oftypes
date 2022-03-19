/**
 * It checks the types of both arguments resolvers and payback.
 *
 * @param {any} resolvers - Any kind of variable will be checked.
 * @param {any} payback - Any kind of variable will be checked.
 * @param {boolean=} strict - only in case of deepStrictEqual in Object [ oftypes.compare ]
 * @returns {string|boolean}
 */
export function types( resolvers, payback, strict= false ) {

    if ( typeof payback !== 'boolean' )
        return `only boolean is an accepted argument for payback. Given type: ${ typeof payback }`

    if ( typeof strict !== 'boolean' )
        return `only boolean is an accepted argument for strict. Given type: ${ typeof strict }`

    if( typeof resolvers !== 'undefined' ){
        if ( resolvers === null )
            return 'only object is an accepted argument for resolvers. Given: null'

        if ( resolvers.constructor && resolvers.call && resolvers.apply )
            return 'only object is an accepted argument for resolvers. Given type: Function'

        if ( Array.isArray( resolvers ) )
            return 'only object is an accepted argument for resolvers. Given type: Array'

        if ( typeof resolvers !== 'object' )
            return `only object is an accepted argument for resolvers. Given type: ${ typeof resolvers }`
    }


    return true
}
