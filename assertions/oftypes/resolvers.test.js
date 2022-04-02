/* eslint-disable jsdoc/require-jsdoc */
import * as oftypes from '../../public.js'
import * as tttt from 'trythistrythat'

export default async () => {
    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.resolvers ]**'.bg_yellow().strong().underline() )
    tttt.line()
    tttt.separator()

    tttt.line()
    tttt.describe( '\n', '## (1) arguments set'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ returns {true: \'truthy argument set\', false: \'falsy argument set\'}'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: { true:'truthy argument set', false: 'falsy argument set' },
            actual: await oftypes.resolvers( 'truthy argument set', 'falsy argument set' ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.line()
        tttt.describe( error )
    } else {
        tttt.line()
        tttt.describe( 'test passed'.green() )
    }
    tttt.end_test( tttt.id() )
}


