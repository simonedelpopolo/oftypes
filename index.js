import {
    array__,
    bigint__,
    boolean__,
    buffer__,
    function__,
    nan__,
    null__,
    number__,
    object__,
    oftype__,
    oftypes__,
    promise__,
    string__,
    symbol__,
    undefined__,
} from './lib/exporter.js'

export const oftypes = oftypes__

/**
 * The array_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function array_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return array__( variable, resolvers, payback )
}

/**
 * The bigint_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return bigint__( variable, resolvers, payback )
}

/**
 * The boolean_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return boolean__( variable, resolvers, payback )
}

/**
 * The buffer_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function buffer_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return buffer__( variable, resolvers, payback )
}

/**
 * The function__ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function function_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return function__( variable, resolvers, payback )
}

/**
 * The nan_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function nan_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return nan__( variable, resolvers, payback )
}

/**
 * The null_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function null_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return null__( variable, resolvers, payback )
}

/**
 * The number_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function number_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return number__( variable, resolvers, payback )
}

/**
 * The object_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function object_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return object__( variable, resolvers, payback )
}

/**
 * Enhanced typeof, and resolvers to avoid if/elseif conditional statements.
 *
 * @param {any} variable - any kind of variable.
 * @param {{[unknown:string]:any}|undefined} resolvers - resolve the type of the variable.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise<string>}
 */
export function oftype_( variable, resolvers = undefined, payback = false ) {

    return oftype__( variable, resolvers, payback )
}

/**
 * The promise_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function promise_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return promise__( variable, resolvers, payback )
}

/**
 * The string_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function string_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return string__( variable, resolvers, payback )
}

/**
 * The symbol_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function symbol_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return symbol__( variable, resolvers, payback )
}

/**
 * The undefined_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @example
 *     let variable
 *
 *     console.log( await oftype.undefined_( variable, {
 *       true:'the variable is undefined',
 *       false:'variable is set'
 *     }))
 *
 *     // yield: the variable is undefined
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {

    return undefined__( variable, resolvers, payback )
}

Object.freeze( oftypes )
