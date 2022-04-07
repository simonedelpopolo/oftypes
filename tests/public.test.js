import * as public_module from '../public.js'
import * as tttt from 'trythistrythat'

/**
 * Exports in module public.js.
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async ( id ) => {

    tttt.describe( '## UNIT test for module public.js will shown the exports. Included oftypes itself'.yellow().underline().strong() )

    console.dir( Object.values( public_module ), { depth: null } )

    tttt.end_test( id )

}
