import * as tttt from 'trythistrythat'
import { oftype_ } from '../../public.js'

export default async () => {

    let error

    tttt.describe( '**oftypes/oftype.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.oftype_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    tttt.describe( 'variable is an array of {number[]} -> [ 5 ]' )
    tttt.describe( 'returns Array'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: 'Array',
            actual: await oftype_( [ 5 ] ),
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

    tttt.describe( 'variable is an object -> { object: null }' )
    tttt.describe( 'returns [ \'object type\', { object: null }, {type: \'Object\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ 'object type', { object: null }, { type: 'Object' } ],
            actual: await oftype_( { object: null }, { Object: 'object type' }, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
