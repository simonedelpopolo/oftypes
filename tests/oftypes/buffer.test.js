import * as tttt from 'trythistrythat'
import { buffer_ } from '../../public.js'

export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.buffer_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable is Buffer' )
    tttt.describe( 'returns true'.yellow() )
    await tttt.line()

    error = await tttt.oki( async () => {

        return {
            expected: true,
            actual: await buffer_( Buffer.from( 'hello folks' ) ),
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

    tttt.describe( 'variable is string -> \'hello folks\'' )
    tttt.describe( 'returns [ false, \'hello folks\', { type: \'String\' } ]'.yellow() )
    await tttt.line()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ false, 'hello folks', { type: 'String' } ],
            actual: await buffer_( 'hello folks', undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error )
    }else
        tttt.describe( 'test passed'.green() )

    tttt.end_test( id )
}
