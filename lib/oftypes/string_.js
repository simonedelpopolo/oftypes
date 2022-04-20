import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.string_ ]
 *
 * **type check for string**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = 'hello folks'
 *
 *     console.log( await oftypes.string_( variable, {
 *       true:'the variable is String',
 *       false:'variable is NOT String'
 *     }))
 *
 *     // **prints -> the variable is String**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function string_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'string_', reference: 'String' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
