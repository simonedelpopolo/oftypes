/**
 * It checks the types of both arguments resolvers and payback.
 *
 * @param {any} resolvers - Any kind of variable will be checked.
 * @param {any} payback - Any kind of variable will be checked.
 * @param {any} strict - only in case of deepStrictEqual in Object [ oftypes.compare ]
 * @returns {string|boolean}
 */
export function types( resolvers, payback, strict ) {

    if ( typeof payback !== 'boolean' )
        return `only boolean is an accepted argument for payback. Given type: ${ typeof payback }`

    if ( typeof strict !== 'boolean' )
        return `only boolean is an accepted argument for strict. Given type: ${ typeof strict }`

    if( typeof resolvers !== 'undefined' ){
        if ( resolvers === null )
            return 'only object is an accepted argument for resolvers. Given: null'

        if( Buffer.isBuffer( resolvers ) === true )
            return 'only object is an accepted argument for resolvers. Given type: Buffer'

        if ( resolvers.constructor.name === 'Promise' || resolvers.constructor.name === 'AsyncFunction' )
            return 'only object is an accepted argument for resolvers. Given type: AsyncFunction OR Promise'

        if ( resolvers.constructor && resolvers.call && resolvers.apply )
            return 'only object is an accepted argument for resolvers. Given type: Function'

        if ( Array.isArray( resolvers ) )
            return 'only object is an accepted argument for resolvers. Given type: Array'

        if( typeof resolvers === 'symbol' )
            return 'only object is an accepted argument for resolvers. Given type: Symbol'

        if ( typeof resolvers !== 'object' )
            return `only object is an accepted argument for resolvers. Given type: ${ typeof resolvers }`

        /**
         * - deep checking for the properties name correctly to true & false.
         */

        const resolversKeys = Object.keys( resolvers )

        if( resolversKeys.length > 2 )
            return `argument resolvers must have no more than two properties. ${'Given resolvers: { '.green().strong().underline()}${ resolver_given( resolvers, resolversKeys ) }${ ' }'.green().strong().underline() }`

        if( !( resolversKeys.includes( 'true' ) ) || !( resolversKeys.includes( 'false' ) ) )
            return `argument resolvers must have true & false has properties key names. ${'Given resolvers: {'.green().strong().underline()}${ resolver_given( resolvers, resolversKeys ) }${ '}'.green().strong().underline() }`

    }


    return true
}

/**
 * Resolver given stringifies.
 *
 * @param {Object} resolvers - the given Object resolvers.
 * @param {string[]} resolversKeys - the key present in the Object resolvers.
 * @returns {string}
 */
function resolver_given( resolvers, resolversKeys ){
    let resolves_given_ = ''
    for ( const key in resolversKeys ) {
        let type_of = typeof resolvers[ resolversKeys[ key ] ]

        resolves_given_ += `${ resolversKeys[ key ].blue()} : ${ type_of.red()}, `
    }

    return resolves_given_.slice( 0, -2 )
}
