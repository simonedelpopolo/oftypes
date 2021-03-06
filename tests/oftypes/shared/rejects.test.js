import * as assert from 'node:assert'
import * as tttt from 'trythistrythat'
import rejects from '../../../lib/oftypes/shared/rejects.js'

/**
 * UNIT-test rejects.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.rejects ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    await tttt.line()
    tttt.describe( '## (1) "resolvers" argument must be Object"'.bg_yellow().strong().underline() )
    await tttt.line()
    tttt.describe( ' ➡ "resolvers" <oftypes> {String} = resolvers must be an object"' )
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.undefined_> argument-error\n'.yellow() )
    tttt.describe( '>   OftypesError: ♠ only Object is an accepted argument for resolvers. Given type: String '.yellow() )
    await tttt.line()

    await tttt.separator()

    try{
        await assert.rejects(
            async () => {
                throw await rejects(
                    'undefined_',
                    { strict: false, payback: false, resolvers: 'resolver must be an object' },
                )
            },
            ( error ) => {

                assert.strictEqual( error.name, 'OftypesError' )

                tttt.describe( '\n', error.message, '\n' )

                return true
            } )

        tttt.describe( 'test passed'.green() )

    }catch ( AssertionError ) {

        tttt.failed( true )
        tttt.describe( '\n', AssertionError )
    }

    await tttt.line()
    tttt.describe( '## (2) "resolvers" properties must be "true" & "false"'.bg_yellow().strong().underline() )
    await tttt.line()
    tttt.describe( ' ➡ "resolvers" <oftypes> {Object} = "{ true:true, no_right_property:false }"' )
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.undefined_> argument-error\n'.yellow() )
    tttt.describe( '>   OftypesError: ♠ resolvers argument must have only properties "true" & "false". Given properties: true,no_right_property'.yellow() )
    await tttt.line()

    await tttt.separator()

    try{
        await assert.rejects(
            async () => {
                throw await rejects(
                    'promise_',
                    { strict: false, payback: false, resolvers: { true: true, no_right_property: false } },
                )
            },
            ( error ) => {
                assert.strictEqual( error.name, 'OftypesError' )

                tttt.describe( '\n', error.message, '\n' )

                return true
            } )

        tttt.describe( 'test passed'.green() )

    }catch ( AssertionError ) {

        tttt.failed( true )
        tttt.describe( '\n', AssertionError )

    }

    await tttt.line()
    tttt.describe( '## (3) both arguments for oftypes.resolvers are required'.bg_yellow().strong().underline() )
    await tttt.line()
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.resolvers> argument-error\n'.yellow() )
    tttt.describe( '>   OftypesError: ♠ both arguments \'truthy\' & \'falsy\' are required'.yellow() )
    await tttt.line()
    await tttt.separator()

    try{
        await assert.rejects(
            async () => {
                throw await rejects(
                    'resolvers',
                    { resolvers_argument: {} },
                )
            },
            ( error )  => {
                assert.strictEqual( error.name, 'OftypesError' )

                tttt.line()
                tttt.describe( error.message )
                tttt.line()

                return true
            } )

        tttt.describe( 'test passed'.green() )

    }catch ( AssertionError ) {

        tttt.failed( true )
        await tttt.line()
        tttt.describe( AssertionError )

    }

    tttt.end_test( id )
}
