import {
    array__, array_Symbol,
    bigint__, bigint_Symbol,
    boolean__, boolean_Symbol,
    function__, function_Symbol,
    null__, null_Symbol,
    number__, number_Symbol,
    object__, object_Symbol,
    string__, string_Symbol,
    symbol__, symbol_Symbol,
    undefined__, undefined_Symbols
} from './lib/oftypes/exporter.js'

// A todo working on promise checker
// eslint-disable-next-line no-unused-vars
const promise = {
    promise_: function ( variable ) {
        return variable.constructor.name === 'Promise' || variable.constructor.name === 'AsyncFunction' ? 'Promise' : false
    },
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
    
    return undefined__[ undefined_Symbols ]( variable, resolvers, payback )
}

/**
 * The array_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function array_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return array__[ array_Symbol ]( variable, resolvers, payback )
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
    
    return function__[ function_Symbol ]( variable, resolvers, payback )
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
    
    return object__[ object_Symbol ]( variable, resolvers, payback )
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
    
    return string__[ string_Symbol ]( variable, resolvers, payback )
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
    
    return number__[ number_Symbol ]( variable, resolvers, payback )
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
    
    return null__[ null_Symbol ]( variable, resolvers, payback )
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
    
    return boolean__[ boolean_Symbol ]( variable, resolvers, payback )
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
    
    return symbol__[ symbol_Symbol ]( variable, resolvers, payback )
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
    
    return bigint__[ bigint_Symbol ]( variable, resolvers, payback )
}
