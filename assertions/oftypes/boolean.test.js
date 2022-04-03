import * as tttt from 'trythistrythat'
import { boolean_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/boolean.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.boolean_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable Boolean' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await boolean_( false ),
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

    tttt.describe( 'variable is NOT boolean' )
    tttt.describe( 'returns [ false, { object: null }, {type: \'Object\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, { object: true }, { type: 'Object' } ],
            actual: await boolean_( { object: true }, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
