import * as oftypes from '../public.js'
import * as tttt from 'trythistrythat'
import { oftypes as oftypes_enumerate_objects } from '../lib/exports.js'

/**
 * Examples
 * - use cases and ideas.
 *
 * @returns {Promise<void> | void}
 */
export default async function oftypes_examples_unit(){

    tttt.describe( '# oftypes object structure'.yellow().underline().strong() )
    tttt.line()
    tttt.describe( oftypes_enumerate_objects )
    tttt.line()
    tttt.separator()

    tttt.line()
    tttt.describe( '# Examples UNIT'.yellow().underline().strong() )
    tttt.separator()
    tttt.line()

    tttt.line()
    tttt.describe( '# payback argument tips'.yellow().underline().strong() )
    tttt.describe( '## every oftypes function has the argument "payback" default set to "false"'.magenta().strong().underline() )
    tttt.describe( '   - when "payback" is set to "true" the <oftypes>.<type_function> return an array so formed' )
    tttt.line()

    tttt.describe( [ 'the resolver result', 'the variable itself', { type:'actual variable\'s type' } ] )
    tttt.line()

    tttt.separator()

    tttt.line()
    tttt.describe( '## <oftypes>.<undefined_> "payback"=true and "resolvers:true"=>closure'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( await oftypes.undefined_(
        undefined,
        {
            true: ( ( any ) =>  any )( 'resolvers can be set to anything, in this case is a closure accepting a parameter.' ),
            false: false,
        },
        true
    ) )
    tttt.line()

    tttt.separator()

    tttt.line()
    tttt.describe( '## <oftypes>.<symbol_> "payback"=true'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( await oftypes.symbol_( [ Symbol( 'I\'ll not be seeing in here lol' ) ], undefined, true ) )
    tttt.line()

    tttt.separator()

    tttt.line()
    tttt.describe( '## <oftypes>.<number_> "payback"=true'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( await oftypes.number_( '11', undefined, true, false ) )
    tttt.line()

    tttt.separator()

    tttt.line()
    tttt.describe( '## <oftypes>.<array_> "payback"=true'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( await oftypes.array_( { hello: 'ciao' }, undefined, true ) )

    tttt.line()
    tttt.describe( '## <oftypes>.<bigint_> "payback"=true'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( await oftypes.bigint_( BigInt( 10_100_012 ), undefined, true ) )

    tttt.end_test( tttt.id() )
}




