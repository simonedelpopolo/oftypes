import {
    argument_type_check__,
    empty__,
    fulfilled__,
    OftypesError__,
    reject__,
} from './lib/exports.js'

/**
 * OftypesError.
 *
 * @typedef {OftypesError} OftypesError
 */

/**
 * Oftypes.
 *
 * @typedef {Object<Oftypes>} Oftypes
 */

/**
 * Exports.
 *
 * @private
 */

/**
 * Type checking for the arguments passed to any of the oftypes Objects function.
 *
 * @param {any} payback - argument
 * @param {any} strict - argument for node:assert/deepStrictEqual @ Object [ oftypes.compare ]
 * @param {any} resolvers - argument
 * @param {any|undefined} string - argument string @ Object [ oftypes.number_ ]
 * @returns {AsyncGenerator< boolean|OftypesError, boolean, void>}
 */
export function argument_type_check( payback, strict, resolvers, string ){
    return argument_type_check__( payback, strict, resolvers, string )
}

/**
 * Object [ oftypes.shared.fulfilled ]
 * Method for resolve function in Promise
 * It checks the payback argument. If true it resolve the promise with a destructured array including the resolvers message and the checked variable.
 * Otherwise, just the resolvers.
 *
 * @param {boolean} compare - switcher for <oftypes>.<type> function or <oftypes>.<compare> function
 * @param {
 *    {variable:any,resolvers:{true:any,false:any},payback:{boolean}} |
 *    {v_1:any,v_2:any,resolvers:{true:any,false:any},payback:{boolean}}
 * } data - object including
 * @property {any} variable - argument.
 * @property {any} v_1 - argument.
 * @property {any} v_2 - argument.
 * @property {{true:any,false:any}} resolvers - argument.
 * @property {boolean} payback - argument.
 * @returns {
 *    [any,{true:any,false:any},{type:string}]|{true:any,false:any}
 *    [any,any,{true:any,false:any},{left_type:string,right_type:string}]|{true:any,false:any}
 * } - If payback is true it resolves the promise with a destructured array including the resolvers message, the variable and the variable.constructor.name.
 */
export function fulfilled( compare, data ){
    return fulfilled__( compare, data )
}

/**
 * Object [ oftypes.shared.reject ]
 * it runs the type check for the arguments.
 *
 * @param {string} oftypes - Object
 * @param {{
 *   payback:any,
 *   strict:any,
 *   resolvers:any,
 *   string:boolean|undefined
 * }} argument - arguments
 * @throws {OftypesError}
 * @returns {Promise<void> | void}
 */
export function reject( oftypes, argument ){
    return reject__( oftypes, argument )
}

/**
 * Object [ oftypes.shared.empty ]
 * resolve and return for undefined variable or set to null.
 *
 * @param {any} variable - variable
 * @returns {boolean}
 */
export function empty( variable ){
    return empty__( variable )
}


/**
 * Extending TypeError.
 *
 * @param {string} message - the error message to be thrown.
 * @returns {OftypesError}
 */
export function OftypesError( message ){
    return new OftypesError__( message )
}
