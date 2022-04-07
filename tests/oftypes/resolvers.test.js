/* eslint-disable jsdoc/require-jsdoc */
import * as oftypes from '../../public.js'
import * as tttt from 'trythistrythat'
import { rejects, strictEqual } from 'node:assert'

export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.resolvers ]**'.bg_yellow().strong().underline() )
    await tttt.line()
    await tttt.separator()

    await tttt.line()
    tttt.describe( '\n', '## (1) arguments set'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ returns {true: \'truthy argument set\', false: \'falsy argument set\'}'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        return {
            expected: { true:'truthy argument set', false: 'falsy argument set' },
            actual: await oftypes.resolvers( 'truthy argument set', 'falsy argument set' ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        await tttt.line()
        tttt.describe( error )
    } else {
        await tttt.line()
        tttt.describe( 'test passed'.green() )
    }

    await tttt.separator()

    await tttt.line()
    tttt.describe( '## (2) "resolvers" arguments are required'.bg_yellow().strong().underline() )
    await tttt.line()
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.resolvers> argument-error\n'.yellow() )
    tttt.describe( '>   ♠ both arguments \'truthy\' & \'falsy\' are required'.yellow() )
    await tttt.line()

    await tttt.separator()

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

    tttt.end_test( id )
}


