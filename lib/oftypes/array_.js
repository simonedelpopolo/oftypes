import resolves from './shared/resolves.js'

/**
 * Object [ oftypes.array_ ]
 *
 * **type check for array**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable = [ 45, { string: 'hello' } ]
 *
 *     console.log( await oftypes.array_( variable, {
 *       true:'the variable is Array',
 *       false:'variable is NOT Array'
 *     }))
 *
 *     // **prints -> the variable is Array**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default function array_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return new Promise( ( resolve, reject ) => {

        resolves( {
            name: 'array_',
            reference: 'Array'
        }, {
            variable:variable,
            resolvers:resolvers,
            payback: payback
        }, {
            resolve: resolve,
            reject: reject
        } )
    } )
}
