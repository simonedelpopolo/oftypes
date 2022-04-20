import * as tttt from 'trythistrythat'
import empty from '../../../lib/oftypes/shared/empty.js'


/**
 * UNIT-test empty.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.empty ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    tttt.describe( '\n', '## (1) A null variable.'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "returns" true'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.oki( () => {

        return {
            expected: true,
            actual: empty( null )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    await tttt.separator()

    tttt.describe( '\n', '## (2) An undefined variable.'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "returns" true'.yellow(), '\n' )
    await tttt.separator()

    error = await tttt.oki( () => {

        return {
            expected: true,
            actual: empty( undefined )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    tttt.end_test( id )
}
