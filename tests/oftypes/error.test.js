import * as tttt from 'trythistrythat'
import { error_, OftypesError } from '../../public.js'

export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.error_ ]**'.bg_yellow().strong().underline() )
    await tttt.line()

    let error

    tttt.describe( 'variable is OftypesError' )
    tttt.describe( 'returns true'.yellow() )
    await tttt.line()

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

    await tttt.line()

    await tttt.separator()
    await tttt.line()

    tttt.describe( 'variable is OftypesError' )
    tttt.describe( 'returns [ true, Error.stack, {type: \'TypeError\'} ]'.yellow() )
    await tttt.line()

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

    tttt.end_test( id )
}
