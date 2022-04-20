import * as tttt from 'trythistrythat'
import { null_ } from '../../index.js'

/**
 * UNIT-test null.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.null_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable is null' )
    tttt.describe( 'returns true'.yellow() )
    await tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await null_( null ),
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

    tttt.describe( 'variable is number = 5' )
    tttt.describe( 'returns [ false, 5, {type: \'Number\'} ]'.yellow() )
    await tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, 5, { type: 'Number' } ],
            actual: await null_( 5, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
