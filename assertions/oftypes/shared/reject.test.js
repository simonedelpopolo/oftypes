import * as tttt from 'trythistrythat'
import { reject } from '../../../index.js'
import { rejects, strictEqual } from 'node:assert'

export default async () => {

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.reject ]**'.bg_yellow().strong().underline(), '\n' )
    tttt.separator()

    tttt.describe( '\n', '## (1) "resolvers" argument must be Object"'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "resolvers" <oftypes> {String} = resolvers must be an object"' )
    tttt.describe( ' ➡ "throws/rejects"  ❗️<oftypes.undefined_> argument-error\n'.yellow() +
                   '>   OftypesError: ♠ only Object is an accepted argument for resolvers. Given type: String '.yellow(), '\n' )
    tttt.separator()

    try{
        await rejects(
            async () => reject(
                'undefined_',
                { strict: false, payback: false, resolvers: 'resolver must be an object'
                }
            ),
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
    tttt.describe( '\n', '## (2) "resolvers" properties must be "true" & "false"'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "resolvers" <oftypes> {Object} = "{ true:true, no_right_property:false }"' )
    tttt.describe( ' ➡ "throws/rejects" ❗️<oftypes.undefined_> argument-error\n'.yellow() +
                   '>   OftypesError: ♠ resolvers argument must have only properties "true" & "false". Given properties: true,no_right_property  ]'.yellow(), '\n' )
    tttt.separator()

    try{
        await rejects(
            async () => reject(
                'promise_',
                { strict: false, payback: false, resolvers: { true:true, no_right_property:false }
                }
            ),
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
