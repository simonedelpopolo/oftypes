/**
 * Configurable typeof responses.
 *
 * **all the primitives are covered:**
 *   - BigInt
 *   - Boolean
 *   - Buffer(Node.js)
 *   - String
 *   - Number
 *   - Promise
 *   - undefined
 *   - Symbol
 *   - null
 *
 * **these are also checked as types:**
 *   - NaN
 *   - AsyncFunction
 *
 * **to differentiate all the ObjectsTypes is used 'constructor.name' property**
 *   - "null" and "undefined" are taken off from this condition and threaded as separate types.
 *   - Javascript ESModule.
 *
 * **examples ⇩**.
 *
 * @see https://github.com/simonedelpopolo/oftypes/blob/main/assertions/oftypes.examples.js
 * @type {Oftypes}
 */
/**
 * Oftypes.
 *
 * @typedef {Object<Oftypes>} Oftypes
 */
/**
 * OftypesError.
 *
 * @typedef {OftypesError} OftypesError
 */

export { default as array_ } from './lib/oftypes/array_.js'
export { default as async_ } from './lib/oftypes/async_.js'
export { default as bigint_ } from './lib/oftypes/bigint_.js'
export { default as boolean_ } from './lib/oftypes/boolean_.js'
export { default as buffer_ } from './lib/oftypes/buffer_.js'
export { default as compare } from './lib/oftypes/compare.js'
export { default as error_ } from './lib/oftypes/error_.js'
export { default as function_ } from './lib/oftypes/function_.js'
export { default as nan_ } from './lib/oftypes/nan_.js'
export { default as null_ } from './lib/oftypes/null_.js'
export { default as number_ } from './lib/oftypes/number_.js'
export { default as object_ } from './lib/oftypes/object_.js'
export { default as oftype_ } from './lib/oftypes/oftype_.js'
export { default as promise_ } from './lib/oftypes/promise_.js'
export { default as resolvers } from './lib/oftypes/resolvers.js'
export { default as string_ } from './lib/oftypes/string_.js'
export { default as symbol_ } from './lib/oftypes/symbol_.js'
export { default as undefined_ } from './lib/oftypes/undefined_.js'
export { default as OftypesError } from './lib/oftypes/shared/OftypesError.js'
