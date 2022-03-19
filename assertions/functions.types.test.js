import * as tttt from 'trythistrythat'
import { types } from '../lib/oftypes/functions/types.js'
import { describe, failed, oki } from 'trythistrythat'

/**
 * UNIT test [functions.types].
 */
export default async function(){

    tttt.describe( 'UNIT test functions.types' )
    tttt.describe()

    let error

    describe( 'resolvers is of type AsyncFunction OR Promise' )
    describe( 'rejects and throws'.yellow() )
    tttt.describe()

    error = await oki( () => {

        return {
            expected: 'only object is an accepted argument for resolvers. Given type: AsyncFunction OR Promise',
            actual: types( async () => {}, true, true ),
            error: 'something went wrong oki at UNIT test functions.types'
        }
    } )

    if( error instanceof Error ) {
        failed( true )
        tttt.describe( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    tttt.describe()

    tttt.separator()

    tttt.describe()

    describe( 'resolvers is of type Object and has true and false as key properties names' )
    describe( 'returns true'.yellow() )
    tttt.describe()

    error = await oki( () => {

        return {
            expected: true,
            actual: types( { true:true, false:false }, true, true ),
            error: 'something went wrong oki at UNIT test functions.types'
        }
    } )

    if( error instanceof Error ) {
        failed( true )
        tttt.describe( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    tttt.describe()

    tttt.separator()

    tttt.describe()

    describe( 'resolvers is of type Buffer' )
    describe( 'rejects and throws'.yellow() )
    tttt.describe()

    error = await oki( () => {

        return {
            expected: 'only object is an accepted argument for resolvers. Given type: Buffer',
            actual: types( Buffer.alloc( 1 ), true, true ),
            error: 'something went wrong oki at UNIT test functions.types'
        }
    } )

    if( error instanceof Error ) {
        failed( true )
        tttt.describe( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    tttt.describe()

    tttt.separator()

    tttt.describe()

    describe( 'resolvers has true & false has properties key' )
    describe( 'returns true'.yellow() )
    tttt.describe()

    error = await oki( () => {

        return {
            expected: true,
            actual: types( { true:() => {}, false:() => {} }, true, true ),
            error: 'something went wrong oki at UNIT test functions.types'
        }
    } )

    if( error instanceof Error ) {
        failed( true )
        tttt.describe( error.message.red() )
    }else
        console.log( 'test passed'.green() )

    tttt.describe()

    tttt.end_test( tttt.id() )
}
