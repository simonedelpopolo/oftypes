import * as tttt from 'trythistrythat'
import { compare } from '../index.js'
import { describe, failed, oki } from 'trythistrythat'

/**
 * UNIT test Object [ oftypes.compare].
 */
export default async function(){

    await tttt.describe( 'UNIT test Object [ oftypes.compare]' )

    console.log()

    let error

    await describe( 'v_1 is an array of {number[]} -> [ 5 ]' )
    await describe( 'v_2 is an array of {number[]} -> [ 5 ]' )
    await describe( 'returns true'.yellow() )

    console.log()

    error = await oki( async () => {

        return {
            expected: true,
            actual: await compare( [ 5 ], [ 5 ] ),
            error: 'something went wrong oki test'
        }

    } )

    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    console.log()

    await tttt.separator()

    console.log()

    await describe( 'v_1 is an array of {number[]} -> [ 5 ]' )
    await describe( 'v_2 is an array of {number[]} -> [ 1685 ]' )
    await describe( 'returns false'.yellow() )

    error = await oki( async () => {

        return {
            expected: false,
            actual: await compare( [ 5 ], [ 1685 ], true ),
            error: 'something went wrong oki test'
        }

    } )

    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    console.log()

    tttt.end_test( tttt.id() )
}
