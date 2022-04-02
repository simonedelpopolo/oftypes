import * as public_module from '../public.js'
import * as tttt from 'trythistrythat'

tttt.describe( '## UNIT test for module public.js will shown the exports. Included oftypes itself'.yellow().underline().strong() )

console.dir( Object.values( public_module ), { depth: null } )
