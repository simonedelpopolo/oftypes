import * as tttt from 'trythistrythat'
import { promise_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/promise.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.promise_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is Promise' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await promise_( new Promise( resolve => resolve( 'ok' ) ) )
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

    tttt.describe( 'variable is an Function -> () => {})' )
    tttt.describe( 'returns [ false, [AsyncFunction: func], {type: \'AsyncFunction\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        const func = () => {}

        return {
            expected: [ false, func, { type: 'Function' } ],
            actual: await promise_( func, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
