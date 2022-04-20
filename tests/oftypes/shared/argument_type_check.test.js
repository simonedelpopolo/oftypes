import * as tttt from 'trythistrythat'
import argument_type_check from '../../../lib/oftypes/shared/argument_type_check.js'
import { OftypesError } from '../../../index.js'

/**
 * UNIT-test argument_type_check.test.js
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.shared.argument_type_check ]**'.bg_yellow().strong().underline(), '\n' )
    await tttt.separator()

    tttt.describe( '\n', '## (1) this UNIT do not rejects.'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "returns" true'.yellow(), '\n' )
    await tttt.separator()

    let argument_type_check_true = false
    for await ( const type_checks of argument_type_check( true, true, { true:true, false: false } ) )
        if( ! ( type_checks instanceof Error ) ) argument_type_check_true = type_checks

    error = await tttt.oki( () => {

        return {
            expected: true,
            actual: argument_type_check_true
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    await tttt.separator()

    tttt.describe( '\n', '## (2) this UNIT rejects with <oftypes.shared><OftypesError>.'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "returns" OftypesError'.yellow(), '\n' )
    await tttt.separator()

    argument_type_check_true = false
    for await ( let type_checks of argument_type_check( true, 'strict as string will throws/rejects', { true:true, false: false }, false ) ) {

        if ( type_checks.constructor.name === 'String' ) {
            type_checks = `❗️<oftypes.compare> argument-error\n>   ${ type_checks }`
            argument_type_check_true = new OftypesError( type_checks )

            break
        }
    }

    error = await tttt.oki( () => {

        return {
            expected: 'OftypesError',
            actual: argument_type_check_true.name
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error )
    }else
        tttt.describe( '\n', 'test passed'.green() )

    tttt.end_test( id )
}
