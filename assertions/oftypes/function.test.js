import * as tttt from 'trythistrythat'
import { function_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/function.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.function_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is function' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await function_( () => {} ),
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
    tttt.describe( 'returns [ false, [AsyncFunction: func], {type: \'AsyncFunction\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        const func = async() => {}

        return {
            expected: [ false, func, { type: 'AsyncFunction' } ],
            actual: await function_( func, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
