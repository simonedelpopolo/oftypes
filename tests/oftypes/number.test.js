import * as tttt from 'trythistrythat'
import { number_ } from '../../public.js'

export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.number_ ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    tttt.describe( '\n', '## (1) {String}=\'11\' considered Number'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "11"' )
    tttt.describe( ' ➡ argument "payback" set to "true"' )
    tttt.describe( ' ➡ returns array [ true, \'11\', { type:\'String\' } ]'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        let variable = '11'

        return {
            expected: [ true, '11', { type:'String' } ],
            actual: await number_( variable, undefined, true ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    await tttt.separator()
    tttt.describe( '\n', '## (2) test for a number'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "10_000"' )
    tttt.describe( ' ➡ returns false'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.oki( async () => {

        let variable = 10_000

        return {
            expected: true,
            actual: await number_( variable ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    await tttt.line()

    await tttt.separator()
    tttt.describe( '\n', '## (3) {String}=\'10000\' considered NOT Number'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable" set to "10000"' )
    tttt.describe( ' ➡ argument "payback" set to "true"' )
    tttt.describe( ' ➡ argument "string" set to "false"' )
    tttt.describe( ' ➡ returns array [ false, \'10000\', { type:\'String\' } ]'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.deeeeepStrictEqual( async () => {

        let variable = '10000'



        return {
            expected: [ false, '10000', { type:'String' } ],
            actual: await number_( variable, undefined, true, false ).catch( error => error ),
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    tttt.end_test( id )
}
