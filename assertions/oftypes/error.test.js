import * as tttt from 'trythistrythat'
import { error_, OftypesError } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/error.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.error_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is OftypesError' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await error_( OftypesError( 'error message' ) ),
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

    tttt.describe( 'variable is OftypesError' )
    tttt.describe( 'returns [ true, Error.stack, {type: \'TypeError\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        const error = OftypesError( 'error message' )

        return {
            expected: [ true, error, { type: 'TypeError' } ],
            actual: await error_( error, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
