import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.object_ ]
 *
 * **type check for object**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = { func:() => {} }
 *
 *     console.log( await oftypes.object_( variable, {
 *       true:'the variable is Object',
 *       false:'variable is NOT Object'
 *     }))
 *
 *     // **prints -> the variable is Object**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default function object_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'object_', reference: 'Object' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
