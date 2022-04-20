import * as oftypes from '../index.js'
import * as tttt from 'trythistrythat'

/**
 * Examples
 * - use cases and ideas.
 *
 * @param {string} id - UNIT-test
 * @returns {Promise<void> | void}
 */
export default async( id ) => {

    await tttt.line()
    tttt.describe( '# Examples UNIT'.yellow().underline().strong() )
    await tttt.separator()
    await tttt.line()

    await tttt.line()
    tttt.describe( '# payback argument tips'.yellow().underline().strong() )
    tttt.describe( '## every oftypes function has the argument "payback" default set to "false"'.magenta().strong().underline() )
    tttt.describe( '   - when "payback" is set to "true" the <oftypes>.<type_function> return an array so formed' )
    await tttt.line()

    tttt.describe( [ 'the resolver result', 'the variable itself', { type:'actual variable\'s type' } ] )
    await tttt.line()

    await tttt.separator()

    await tttt.line()
    tttt.describe( '## <oftypes>.<undefined_> "payback"=true and "resolvers:true"=>closure'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( await oftypes.undefined_(
        undefined,
        {
            true: ( ( any ) =>  any )( 'resolvers can be set to anything, in this case is a closure accepting a parameter.' ),
            false: false,
        },
        true
    ) )
    await tttt.line()

    await tttt.separator()

    await tttt.line()
    tttt.describe( '## <oftypes>.<symbol_> "payback"=true'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( await oftypes.symbol_( [ Symbol( 'I\'ll not be seeing in here lol' ) ], undefined, true ) )
    await tttt.line()

    await tttt.separator()

    await tttt.line()
    tttt.describe( '## <oftypes>.<number_> "payback"=true'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( await oftypes.number_( '11', undefined, true, false ) )
    await tttt.line()

    await tttt.separator()

    await tttt.line()
    tttt.describe( '## <oftypes>.<array_> "payback"=true'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( await oftypes.array_( { hello: 'ciao' }, undefined, true ) )

    await tttt.line()
    tttt.describe( '## <oftypes>.<bigint_> "payback"=true'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( await oftypes.bigint_( BigInt( 10_100_012 ), undefined, true ) )

    await tttt.line()
    tttt.describe( '## <oftypes>.<resolvers> rejects/throws>'.magenta().strong().underline() )
    tttt.describe( '   - when "truthy" & "falsy" aren\'t given, also if just one parameter is not given like in this case' )
    await tttt.line()

    await oftypes.resolvers( 'truthy for true' ).catch( error => tttt.describe( error.message ) )
    await tttt.line()

    await tttt.line()
    tttt.describe( '## <oftypes>.<undefined_> boolean variable>'.magenta().strong().underline() )
    tttt.describe( '### JavaScript type coercion transform boolean "false"/ number 0/ string "0"/ string ""/ "null" to undefined.'.blue().strong().underline() )
    await tttt.line()
    tttt.describe( 'await oftypes.undefined_(false)' )
    await tttt.line()
    tttt.describe( 'will return false - NOT undefined'.b_red() )
    await tttt.line()
    tttt.describe( await oftypes.undefined_( false ) )
    await tttt.line()

    await tttt.line()
    tttt.describe( '## <oftypes>.<oftype_> Array of string>'.magenta().strong().underline() )
    await tttt.line()
    tttt.describe( 'will return [ \'array\', \'of\', \'string\' ]'.b_red() )
    await tttt.line()

    let variable = [ 'array', 'of', 'string' ]
    let resolver = { Array: variable }

    tttt.describe( await oftypes.oftype_( variable, resolver ) )

    // - end of 4t life cycle
    tttt.end_test( id )
}




