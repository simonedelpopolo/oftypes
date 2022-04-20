import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.async_ ]
 *
 * **type check for async**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = async () => {}
 *
 *     console.log( await oftypes.async_( variable, {
 *       true:'the variable is AsyncFunction',
 *       false:'variable is NOT AsyncFunction'
 *     }))
 *
 *     // **prints -> the variable is AsyncFunction**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function async_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'async_', reference: 'AsyncFunction' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
