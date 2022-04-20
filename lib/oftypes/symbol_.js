import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.symbol_ ]
 *
 * **_type check for Symbol_**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = Symbol('variable')
 *
 *     console.log( await oftype.symbol_( variable, {
 *       true:'the variable is Symbol',
 *       false:'variable is NOT Symbol'
 *     }))
 *
 *     // **prints -> the variable is Symbol**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default function symbol_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'symbol_', reference: 'Symbol' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
