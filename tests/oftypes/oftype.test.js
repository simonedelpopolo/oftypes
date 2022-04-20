import * as tttt from 'trythistrythat'
import { oftype_ } from '../../index.js'

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

    tttt.describe( 'variable is null returns null' )
    error = await tttt.oki( async () => {

        return {
            expected: 'null',
            actual: await oftype_( null ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.describe( 'variable is undefined returns undefined' )
    error = await tttt.oki( async () => {

        return {
            expected: 'undefined',
            actual: await oftype_( undefined ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.describe( 'variable is false returns Boolean' )
    error = await tttt.oki( async () => {

        return {
            expected: 'Boolean',
            actual: await oftype_( false ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.describe( 'String.length === 0 returns String' )
    error = await tttt.oki( async () => {

        return {
            expected: 'String',
            actual: await oftype_( '' ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.describe( 'resolver looks for Array get alright' )
    error = await tttt.oki( async () => {

        return {
            expected: 'alright',
            actual: await oftype_( [ '' ], { Array: 'alright' } ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.describe( 'resolver looks for Array get "undefined"' )
    error = await tttt.oki( async () => {

        return {
            expected: undefined,
            actual: await oftype_( String( '' ), { Array: 'alright' } ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
