import * as index_module from '../index.js'
import * as tttt from 'trythistrythat'

/**
 * Exports in index.js file.
 */
export default async() => {

    tttt.describe( '**index.test.js**'.underline().strong() )

    tttt.describe( '## UNIT test for module index.js will shown the exports'.yellow().underline().strong() )

    console.dir( Object.values( index_module ), { depth: null } )
}

