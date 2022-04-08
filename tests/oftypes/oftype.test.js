import * as tttt from 'trythistrythat'
import { oftype_ } from '../../public.js'

/**
 * UNIT-test oftype.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.oftype_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    tttt.describe( 'variable is an array of {number[]} -> [ 5 ]' )
    tttt.describe( 'returns Array'.yellow() )
    await tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: 'Array',
            actual: await oftype_( [ 5 ] ),
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

    tttt.describe( 'variable is an object -> { object: null }' )
    tttt.describe( 'returns [ \'object type\', { object: null }, {type: \'Object\'} ]'.yellow() )
    await tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ 'object type', { object: null }, { type: 'Object' } ],
            actual: await oftype_( { object: null }, { Object: 'object type' }, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
