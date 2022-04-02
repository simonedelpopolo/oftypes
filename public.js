import {
    array__,
    bigint__,
    compare__,
    number__,
    symbol__,
    undefined__,
} from './lib/exports.js'

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
export function array_( variable, resolvers = { true: true, false: false }, payback = false ) {
    return array__( variable, resolvers, payback )
}

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
export function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {
    return bigint__( variable, resolvers, payback )
}

/**
 * Object [ oftypes.compare ]
 *
 * **compares two variable by the types**.
 *
 * @param {any} v_1 - to check for
 * @param {any} v_2 - to check for
 * @param {boolean} [strict=false] - deepStrictEqual check
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable values, the resolvers and the type of both variables.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     const variable_1 = 'variable one'
 *     const variable_2 = 'variable two'
 *
 *     console.log( await oftypes.compare( variable_1, variable_2) )
 *
 *     // **prints -> true**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,any,{left_type:string,right_type:string}]> | boolean|any|[any,any,any,{left_type:string,right_type:string}]}
 */
export function compare( v_1, v_2, strict = false, resolvers = { true: true, false: false }, payback = false ) {
    return compare__( v_1, v_2, strict, resolvers, payback )
}

/**
 * Object [ oftypes.number_ ]
 *
 * **_type check for Number_**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @param {boolean} [string=true] - consider String NOT Number when set to false. default set to true.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     // example #1
 *     let variable = 10
 *
 *     console.log( await oftypes.number_( variable, {
 *       true:'the variable is Number',
 *       false:'variable is NOT Number'
 *     }))
 *
 *     // **prints -> the variable is Number**
 *
 *     // example #2
 *     let variable = '10'
 *
 *     console.log( await oftypes.number_( variable, {
 *       true:'the variable is Number',
 *       false:'variable is NOT Number'
 *     }))
 *
 *     // **prints -> the variable is Number**
 *
 *     // example #3
 *     let variable = '10'
 *
 *     console.log( await oftypes.number_( variable, {
 *       true:'the variable is Number',
 *       false:'variable is NOT Number'
 *       undefined,
 *       false
 *     }))
 *
 *     // **prints -> the variable is NOT Number**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export function number_( variable, resolvers = { true: true, false: false }, payback = false, string= true ) {
    return number__( variable, resolvers, payback, string )
}

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
export function symbol_( variable, resolvers = { true: true, false: false }, payback = false ) {
    return symbol__( variable, resolvers, payback )
}

/**
 * Object [ oftypes.undefined_ ]
 *
 * **type check for undefined**.
 *
 * @param {any} variable - to check for
 * @param {{true:any,false:any}} [resolvers={true:true,false:false}] - dynamically set "kind of" if/else statement to resolve the type checking.
 * @param {boolean} [payback=false] - If true it will send back the variable value.
 * @example
 *     import * as oftypes from 'oftypes'
 *
 *     let variable
 *
 *     console.log( await oftypes.undefined_( variable, {
 *       true:'the variable is undefined',
 *       false:'variable is set'
 *     }))
 *
 *     // **prints -> the variable is undefined**
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {
    return undefined__( variable, resolvers, payback )
}
