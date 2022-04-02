import * as tttt from 'trythistrythat'
import { undefined_ } from '../../public.js'

export default async () => {
    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.undefined_ ]**'.bg_yellow().strong().underline(), '\n' )
    tttt.separator()

    tttt.describe( '\n', '## (1) "null" different from "undefined"'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "null"' )
    tttt.describe( ' ➡ argument "payback" set to "true"' )
    tttt.describe( ' ➡ returns array [ false, null, { type:\'null\' } ]'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        let undefined_variable = null

        return {
            expected: [ false, null, { type:'null' } ],
            actual: await undefined_( undefined_variable, undefined, true ),
            error: 'test failed'
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.separator()
    tttt.describe( '\n', '## (2) "undefined" variable'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "undefined"' )
    tttt.describe( ' ➡ returns true'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let undefined_variable = undefined

        return {
            expected: true,
            actual: await undefined_( undefined_variable ),
            error: 'test failed'
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )
    tttt.end_test( tttt.id() )
}
