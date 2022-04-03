import * as tttt from 'trythistrythat'
import { nan_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/nan.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.nan_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is NaN string="37,5"' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            // eslint-disable-next-line quotes
            actual: await nan_( "37,5" )
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

    tttt.describe( 'variable is NOT NaN' )
    tttt.describe( 'returns [ false, \'0.0314E+2\', {type: \'Object\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, '0.0314E+2', { type: 'String' } ],
            actual: await nan_( '0.0314E+2', undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
