import * as tttt from 'trythistrythat'
import { fulfilled } from '../../../index.js'

export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.fulfilled ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    tttt.describe( '\n', '## (1) fulfilled switch <oftypes>.<type>'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "compare" argument {Boolean} = false' )
    tttt.describe( ' ➡ "data" argument {Object} = { variable:\'variable\', payback:true, resolvers:{ true:true, false:false } }' )
    tttt.describe( ' ➡ returns array [ { true: true, false: false }, \'variable\', { type: \'String\' } ]'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ { true: true, false: false }, 'variable', { type: 'String' } ],
            actual: await fulfilled( false, { variable:'variable', payback:true, resolvers:{ true:true, false:false } } ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( error.stack.red() )
    }
    else tttt.describe( 'test passed'.green() )

    await tttt.separator()

    tttt.describe( '\n', '## (2) fulfilled switch <oftypes>.<compare>'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "compare" argument {Boolean} = true' )
    tttt.describe( ' ➡ "data" argument {Object} = { v_1:\'variable one\', v_2:\'variable two\', payback:true, resolvers:{ true:true, false:false } }' )
    tttt.describe( ' ➡ returns array [ { true: true, false: false }, \'variable one\', \'variable two\', { left_type: \'String\', right_type: \'String\' } ]'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: [ { true: true, false: false }, 'variable one', 'variable two', { left_type: 'String', right_type: 'String' } ],
            actual: await fulfilled( true, { v_1:'variable one', v_2:'variable two', payback:true, resolvers:{ true:true, false:false } } ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }
    else tttt.describe( '\n', 'test passed'.green() )

    tttt.end_test( id )
}
