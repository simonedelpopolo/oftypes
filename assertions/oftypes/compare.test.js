import * as tttt from 'trythistrythat'
import { compare } from '../../public.js'

export default async () => {
    let error

    tttt.describe( '# UNIT tests for **Object [ oftypes.compare ]**'.bg_yellow().strong().underline(), '\n' )
    tttt.separator()

    tttt.describe( '\n', '## (1) this comparison is true'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable_1" set to {String} = "variable one"' )
    tttt.describe( ' ➡ "variable_2" set to {String} = "variable two"' )
    tttt.describe( ' ➡ returns true'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let variable_1 = 'variable one'
        let variable_2 = 'variable two'

        return {
            expected: true,
            actual: await compare( variable_1, variable_2 )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error.stack.red(), '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.separator()

    tttt.describe( '\n', '## (2) this comparison is true'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable_1" set to {null} = null' )
    tttt.describe( ' ➡ "variable_2" set to {null} = null' )
    tttt.describe( ' ➡ returns true'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let variable_1 = null
        let variable_2 = null

        return {
            expected: true,
            actual: await compare( variable_1, variable_2 )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.separator()

    tttt.describe( '\n', '## (3) this comparison is false'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable_1" set to {null} = null' )
    tttt.describe( ' ➡ "variable_2" set to {undefined} = undefined' )
    tttt.describe( ' ➡ returns false'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let variable_1 = null
        let variable_2 = undefined

        return {
            expected: false,
            actual: await compare( variable_1, variable_2 )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.separator()

    tttt.describe( '\n', '## (4) this comparison is FALSE because of "strict" argument set to "true"'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable_1" set to {Array} = [ 10 ]' )
    tttt.describe( ' ➡ "variable_2" set to {Array} = [ 11 ]' )
    tttt.describe( ' ➡ returns false'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let variable_1 = [ 10 ]
        let variable_2 = [ 11 ]

        return {
            expected: false,
            actual: await compare( variable_1, variable_2, true )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.separator()

    tttt.describe( '\n', '## (4) this comparison is TRUE because of "strict" argument set to "false"'.bg_yellow().strong().underline(), '\n' )
    tttt.describe( ' ➡ "variable_1" set to {Object} = { array: [ 10 ] , func:()=>{}}' )
    tttt.describe( ' ➡ "variable_2" set to {Object} = { array: [ 11 ], obj: { hello: \'folks\' } ' )
    tttt.describe( ' ➡ returns true'.yellow(), '\n' )
    tttt.separator()

    error = await tttt.oki( async () => {

        let variable_1 = { array: [ 10 ], func:() => {} }
        let variable_2 = { array: [ 11 ], obj: { hello: 'folks' } }

        return {
            expected: true,
            actual: await compare( variable_1, variable_2 )
        }

    } )

    if( error instanceof Error ) {
        tttt.failed( true )
        tttt.describe( '\n', error, '\n' )
    }else
        tttt.describe( '\n', 'test passed'.green(), '\n' )

    tttt.end_test( tttt.id() )
}
