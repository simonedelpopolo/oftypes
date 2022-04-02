import * as tttt from 'trythistrythat'
import { OftypesError } from '../../../index.js'
import { strictEqual, throws } from 'node:assert'

export default () => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.OftypesError ]**'.bg_yellow().strong().underline(), '\n' )
    tttt.separator()

    tttt.describe( '\n', '## (1) throw new OftypesError'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "throws"  >   OftypesError: ♠ <oftypes.shared.OftypesError>'.yellow(), '\n' )
    tttt.separator()

    try{
        throws(
            () => { throw new OftypesError( 'OftypesError: ♠ <oftypes.shared.OftypesError>' ) },
            ( error ) => {

                strictEqual( error.name, 'OftypesError' )

                tttt.describe( '\n', error.message, '\n' )

                return true
            } )

        tttt.describe( 'test passed'.green() )

    }catch ( AssertionError ) {

        tttt.failed( true )
        tttt.describe( '\n', AssertionError )
    }

    tttt.end_test( tttt.id() )
}