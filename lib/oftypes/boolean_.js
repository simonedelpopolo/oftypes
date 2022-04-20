import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.boolean_ ]
 *
 * **type check for boolean**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = true
 *
 *     console.log( await oftypes.boolean_( variable, {
 *       true:'the variable is Boolean',
 *       false:'variable is NOT Boolean'
 *     }))
 *
 *     // **prints -> the variable is Boolean**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'boolean_', reference: 'Boolean' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
