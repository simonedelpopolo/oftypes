import * as tttt from 'trythistrythat'
import { object_ } from '../../public.js'

export default async () => {

    tttt.describe( '**oftypes/object.test.js**'.underline().strong() )

    tttt.describe( '# UNIT tests for **Object [ oftypes.object_ ]**'.bg_yellow().strong().underline() )
    tttt.line()

    let error

    tttt.describe( 'variable is object {func:()=>{}}' )
    tttt.describe( 'returns true'.yellow() )
    tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await object_( { func:() => {} } ),
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
    tttt.describe( 'returns [ false, null , {type: \'null\'} ]'.yellow() )
    tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, null, { type: 'null' } ],
            actual: await object_( null, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( tttt.id() )
}
