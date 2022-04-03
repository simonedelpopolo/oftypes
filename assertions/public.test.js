import * as public_module from '../public.js'
import * as tttt from 'trythistrythat'

export default async () => {

    tttt.describe( '**public.test.js**'.underline().strong() )

    tttt.describe( '## UNIT test for module public.js will shown the exports. Included oftypes itself'.yellow().underline().strong() )

    console.dir( Object.values( public_module ), { depth: null } )

}
