import * as index_module from '../index.js'
import * as tttt from 'trythistrythat'

tttt.describe( '## UNIT test for module index.js will shown the exports'.yellow().underline().strong() )

console.dir( Object.values( index_module ), { depth: null } )
