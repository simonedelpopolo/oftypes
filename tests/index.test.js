import * as index_module from '../index.js'
import * as tttt from 'trythistrythat'

/**
 * Exports in module index.js.
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async( id ) => {

    tttt.describe( '## UNIT test for module index.js will shown the exports'.yellow().underline().strong() )

    console.dir( Object.values( index_module ), { depth: null } )

    tttt.end_test( id )
}

