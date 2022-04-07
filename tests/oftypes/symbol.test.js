import * as tttt from 'trythistrythat'
import { symbol_ } from '../../public.js'

export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.symbol_ ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    tttt.describe( '\n', '## (1) "symbol_variable" is Symbol'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to Symbol.for("variable")' )
    tttt.describe( ' ➡ argument "payback" set to "true"' )
    tttt.describe( ' ➡ returns array [ true, Symbol(variable), { type: \'Symbol\' } ]'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        let symbol_variable = Symbol.for( 'variable' )

        return {
            expected: [ true, Symbol.for( 'variable' ), { type: 'Symbol' } ],
            actual: await symbol_( symbol_variable, undefined, true ),
            error: 'test failed'
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    await tttt.separator()
    tttt.describe( '\n', '## (2) "null & undefined" variable'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "undefined" & "null"' )
    tttt.describe( ' ➡ returns false'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.oki( async () => {

        let undefined_variable = undefined

        return {
            expected: false,
            actual: await symbol_( undefined_variable ),
            error: 'test failed'
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    error = await tttt.oki( async () => {

        let undefined_variable = null

        return {
            expected: false,
            actual: await symbol_( undefined_variable ),
            error: 'test failed'
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    tttt.end_test( id )
}
