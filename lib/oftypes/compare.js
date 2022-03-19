import { deepStrictEqual } from 'node:assert/strict'
import { error } from './functions/error.js'
import { fulfilled_compare } from './functions/fulfilled_compare.js'
import { oftype_ } from '../../index.js'
import oftypes from '../oftypes.js'
import { types } from './functions/types.js'

const compare_Symbol = Symbol( 'Object [ oftypes.compare ]' )
const compare = Object.defineProperty( oftypes, compare_Symbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.compare ]
     * Compare two variable types.
     *
     * @param {any} v_1 - variable to compare.
     * @param {any} v_2 - variable to compare.
     * @param {boolean=} strict - deepStrictEqual.
     * @param {{true:any, false:any}=} resolvers - default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - if true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function compare( v_1, v_2, strict = false, resolvers = { true: true, false: false }, payback = false ) {

        let types_ = types( resolvers, payback, strict )
        if ( types_ !== true )
            return error( types_ )

        let truthy = false
        if( await oftype_( v_1 ) === await oftype_( v_2 ) )
            truthy = true

        if( strict && truthy ){
            try{
                deepStrictEqual( v_1, v_2 )
            }catch {
                truthy= false
            }
        }

        return new Promise( ( resolve ) => {

            if( truthy )
                resolve( fulfilled_compare( v_1, v_2, resolvers.true, payback ) )

            resolve( fulfilled_compare( v_1, v_2, resolvers.false, payback ) )
        } )
    },
} )

export default compare[ compare_Symbol ]
