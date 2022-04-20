import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.bigint_ ]
 *
 * **type check for bigint**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = BigInt( 10_100_012 )
 *
 *     console.log( await oftypes.bigint_( variable, {
 *       true:'the variable is BigInt',
 *       false:'variable is NOT BigInt'
 *     }))
 *
 *     // **prints -> the variable is BigInt**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return resolves( { name: 'bigint_', reference: 'BigInt' }, { variable:variable, resolvers:resolvers, payback: payback } )
}
