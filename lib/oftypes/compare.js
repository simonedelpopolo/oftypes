import { deepStrictEqual } from 'node:assert/strict'
import fulfilled from './shared/fulfilled.js'
import rejects from './shared/rejects.js'

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
export default function compare( v_1, v_2, strict = false, resolvers = { true: true, false: false }, payback = false ) {

    return new Promise( ( resolve, reject ) => {

        let truthy = false

        rejects( 'compare', { payback:payback, strict: strict, resolvers: resolvers, string: undefined } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else{

                    if( ! v_1 && v_1 !== null ) v_1 = 'undefined'
                    else if( v_1 === null ) v_1 = 'null'

                    if( ! v_2 && v_2 !== null ) v_2 = 'undefined'
                    else if( v_2 === null ) v_2 = 'null'


                    // - early resolves for undefined and null values.
                    if( v_1 === 'undefined' && v_2 === 'undefined' || v_1 === 'null' && v_2 === 'null' )
                        resolve( fulfilled( true, { v_1: v_1, v_2: v_2, resolvers: resolvers.true, payback: payback } ) )

                    else if ( v_1 === 'undefined' && v_2 === 'null' || v_1 === 'null' && v_2 === 'undefined' )
                        resolve( fulfilled( true, { v_1: v_1, v_2: v_2, resolvers: resolvers.false, payback: payback } ) )

                    else if( v_1.constructor.name === v_2.constructor.name ) {

                        truthy = true

                        if ( strict && truthy ) {
                            try {
                                deepStrictEqual( v_1, v_2 )
                            } catch {
                                truthy = false
                            }
                        }

                        if ( truthy )
                            resolve( fulfilled( true, { v_1: v_1, v_2: v_2, resolvers: resolvers.true, payback: payback } ) )


                        resolve( fulfilled( true, { v_1: v_1, v_2: v_2, resolvers: resolvers.false, payback: payback } ) )
                    }

                }
            } )
    } )
}
