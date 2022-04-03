import * as oftypes from '../public.js'
import * as tttt from 'trythistrythat'
import { oftypes as oftypes_enumerate_objects } from '../lib/exports.js'

/**
 * Examples
 * - use cases and ideas.
 *
 * @returns {Promise<void> | void}
 */
export default async() => {

    tttt.describe( '**oftypes.examples.js**'.underline().strong() )

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

    tttt.line()
    tttt.describe( '## <oftypes>.<resolvers> rejects/throws>'.magenta().strong().underline() )
    tttt.describe( '   - when "truthy" & "falsy" aren\'t given, also if just one parameter is not given like in this case' )
    tttt.line()

    await oftypes.resolvers( 'truthy for true' ).catch( error => tttt.describe( error.message ) )
    tttt.line()

    tttt.line()
    tttt.describe( '## <oftypes>.<undefined_> boolean variable>'.magenta().strong().underline() )
    tttt.describe( '### JavaScript type coercion transform boolean "false"/ number 0/ string "0"/ string ""/ "null" to undefined.'.blue().strong().underline() )
    tttt.line()
    tttt.describe( 'await oftypes.undefined_(false)' )
    tttt.line()
    tttt.describe( 'will return false - NOT undefined'.b_red() )
    tttt.line()
    tttt.describe( await oftypes.undefined_( false ) )
    tttt.line()

    tttt.line()
    tttt.describe( '## <oftypes>.<oftype_> Array of string>'.magenta().strong().underline() )
    tttt.line()
    tttt.describe( 'will return [ \'array\', \'of\', \'string\' ]'.b_red() )
    tttt.line()

    let variable = [ 'array', 'of', 'string' ]
    let resolver = { Array: variable }

    tttt.describe( await oftypes.oftype_( variable, resolver ) )

    tttt.end_test( tttt.id() )
}




