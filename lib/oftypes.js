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
const oftypes = Object.create( null, {
    /**
     * Extra Layer Object [oftypes]
     * used to define main Objects
     */
    [ Symbol.for( 'oftypes' ) ]:{
        enumerable: true,
        writable:false,
        configurable: false,
        value : {}
    }
} )

/**
 * Extra Layer Object [oftypes.shared]
 * used to define shared Objects
 */
export const shared = Object.defineProperty( oftypes[ Symbol.for( 'oftypes' ) ], Symbol.for( 'oftypes.shared' ), {
    enumerable: true,
    writable:false,
    configurable: false,
    value : {}
} )

export default oftypes
