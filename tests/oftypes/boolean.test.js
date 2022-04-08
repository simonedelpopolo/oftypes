import * as tttt from 'trythistrythat'
import { boolean_ } from '../../public.js'

/**
 * UNIT-test boolean.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.boolean_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable Boolean' )
    tttt.describe( 'returns true'.yellow() )
    await tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await boolean_( false ),
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

    tttt.describe( 'variable is NOT boolean' )
    tttt.describe( 'returns [ false, { object: null }, {type: \'Object\'} ]'.yellow() )
    await tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, { object: true }, { type: 'Object' } ],
            actual: await boolean_( { object: true }, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
