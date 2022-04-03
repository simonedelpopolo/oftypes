import * as tttt from 'trythistrythat'
import { array_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/array.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.array_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is an array of {number[]} -> [ 5 ]' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await array_( [ 5 ] ),
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
    tttt.describe( 'returns [ false, { object: null }, {type: \'Object\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, { object: null }, { type: 'Object' } ],
            actual: await array_( { object: null }, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
