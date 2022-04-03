import * as tttt from 'trythistrythat'
import { async_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/async.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.async_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is function' )
    tttt.describe( 'returns false'.yellow() )
    tttt.line()

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

    tttt.line()

    tttt.separator()
    tttt.line()

    tttt.describe( 'variable is an AsyncFunction -> async () => {})' )
    tttt.describe( 'returns [ true, [AsyncFunction: func], {type: \'AsyncFunction\'} ]'.yellow() )
    tttt.line()

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

    tttt.end_test( tttt.id() )
}
