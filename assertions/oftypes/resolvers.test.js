/* eslint-disable jsdoc/require-jsdoc */
import * as oftypes from '../../public.js'
import * as tttt from 'trythistrythat'
import { rejects, strictEqual } from 'node:assert'

export default async () => {

    tttt.describe( '**oftypes/resolvers.test.js**'.underline().strong() )

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

    tttt.separator()

    tttt.line()
    tttt.describe( '## (2) "resolvers" arguments are required'.bg_yellow().strong().underline() )
    tttt.line()
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.resolvers> argument-error\n'.yellow() )
    tttt.describe( '>   ♠ both arguments \'truthy\' & \'falsy\' are required'.yellow() )
    tttt.line()

    tttt.separator()

    try{

        await rejects(
            async () => {
                throw await oftypes.resolvers()
            },
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


