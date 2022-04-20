import fulfilled from './shared/fulfilled.js'

/**
 * Object [ oftypes.oftype_ ]
 * Enhanced typeof, and resolvers to avoid if/elseif conditional statements.
 *
 * @param {any} variable - any kind of variable.
 * @param {{[unknown:string]:any}|undefined=} resolver - resolve the type of the variable.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = [ 'array', 'of', 'string' ]
 *     let resolver = { Array: variable }
 *
 *     console.log( await oftypes.oftype_( variable, resolver ) )
 *     // **prints -> [ 'array', 'of', 'string' ]**
 * @returns {Promise<string|any>|string|any}
 */
export default function oftype_( variable, resolver= undefined, payback = false ){

    return new Promise( resolve => {

        let gotcha

        if( ! variable && variable !== null && typeof variable !== 'boolean' && typeof variable !== 'number'  && typeof variable !== 'string' )
            gotcha = 'undefined'

        else if( variable === null )
            gotcha = 'null'

        else gotcha = variable.constructor.name

        ! resolver

            ? resolve( fulfilled( false, { variable: variable, resolvers: gotcha, payback: payback } ) )
            : resolve( fulfilled( false, { variable: variable, resolvers: resolver[ gotcha ], payback: payback } ) )
    } )

}
