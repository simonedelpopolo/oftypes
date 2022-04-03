/**
 * - reset foreground color, background color or decorations
 * - reverse foreground color and background color
 * - stdout brighter background colors
 * - stdout background colors
 * - stdout brighter text colors
 * - stdout text colors
 * - stdout text decoration
 *  - underline
 *  - strong
 */
await ( await import( 'cli-decors' ) ).cli_decors()

/**
 * OftypesError.
 *
 * @typedef {OftypesError} OftypesError
 */

import { default as oftypes__ } from './oftypes.js'
export { default as array__ } from './oftypes/array_.js'
export { default as bigint__ } from './oftypes/bigint_.js'
export { default as boolean__ } from './oftypes/boolean_.js'
export { default as compare__ } from './oftypes/compare.js'
export { default as number__ } from './oftypes/number_.js'
export { default as resolvers__ } from './oftypes/resolvers.js'
export { default as undefined__ } from './oftypes/undefined_.js'
export { default as symbol__ } from './oftypes/symbol_.js'

/**
 * Private Objects
 */
export { default as argument_type_check__ } from './oftypes/shared/argument_type_check.js'
export { default as empty__ } from './oftypes/shared/empty.js'
export { default as OftypesError__ } from './oftypes/shared/OftypesError.js'
export { default as fulfilled__ } from './oftypes/shared/fulfilled.js'
export { default as reject__ } from './oftypes/shared/reject.js'

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
export const oftypes = oftypes__

Object.freeze( oftypes__ )
