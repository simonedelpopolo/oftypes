import * as tttt from 'trythistrythat'
import { async_ } from '../../index.js'

/**
 * UNIT-test async.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.async_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable is function' )
    tttt.describe( 'returns false'.yellow() )
    await tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: false,
            actual: await async_( () => {} ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    await tttt.line()

    await tttt.separator()
    await tttt.line()

    tttt.describe( 'variable is an AsyncFunction -> async () => {})' )
    tttt.describe( 'returns [ true, [AsyncFunction: func], {type: \'AsyncFunction\'} ]'.yellow() )
    await tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        const func = async() => {}

        return {
            expected: [ true, func, { type: 'AsyncFunction' } ],
            actual: await async_( func, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
