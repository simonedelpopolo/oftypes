import * as tttt from 'trythistrythat'
import { bigint_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/bigint.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.bigint_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is BigInt(20_444_693_565)' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await bigint_( BigInt( 20_444_693_565 ) ),
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
    tttt.describe( 'variable is null' )
    tttt.describe( 'returns [ false, null, { type: \'null\' } ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, null, { type: 'null' } ],
            actual: await bigint_( null, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
