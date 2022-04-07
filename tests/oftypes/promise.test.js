import * as tttt from 'trythistrythat'
import { promise_ } from '../../public.js'

export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.promise_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable is Promise' )
    tttt.describe( 'returns true'.yellow() )
    await tttt.line()

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

    await tttt.line()

    await tttt.separator()
    await tttt.line()

    tttt.describe( 'variable is an Function -> () => {})' )
    tttt.describe( 'returns [ false, [AsyncFunction: func], {type: \'AsyncFunction\'} ]'.yellow() )
    await tttt.line()

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

    tttt.end_test( id )
}
