import * as tttt from 'trythistrythat'
import { null_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/null.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.null_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is null' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await null_( null ),
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

    tttt.describe( 'variable is number = 5' )
    tttt.describe( 'returns [ false, 5, {type: \'Number\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, 5, { type: 'Number' } ],
            actual: await null_( 5, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
