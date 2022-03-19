/* eslint-disable jsdoc/require-jsdoc,capitalized-comments */
// noinspection JSUnusedGlobalSymbols

import * as oftype___ from '../index.js'
import * as tttt from 'trythistrythat'
import { throws } from 'node:assert/strict'

export default async function (){

    tttt.describe( 'testing resolvers function'.bg_red() )

    const resolvers_test_oki = await tttt.oki( async () => {
        tttt.describe(  ' - 1'.yellow().bg_black().underline(), 'combined with oftypes.boolean_ returns a String -> \'OK\'' )
        const truthy = () => 'OK'
        const falsy = () => 'KO'

        return {
            expected: 'OK',
            actual: await ( await oftype___.boolean_( true, await oftype___.resolvers( truthy, falsy ) ) )(),
            error: 'mhmhmhm - 1 :/'.bg_red()
        }
    } )

    const resolvers_test_deeeeep = await tttt.deeeeepEqual( async () => {
        tttt.describe(  ' - 2'.yellow().bg_black().underline(), 'called directly returns an Object -> { true: OK, false: KO }' )

        const truthy = 'OK'
        const falsy = 'KO'

        return {
            expected: { true: 'OK', false: 'KO' },
            actual: await oftype___.resolvers( truthy, falsy ),
            error: 'mhmhmhm - 2 :/'.bg_red()
        }
    } )

    tttt.describe(  ' - 3'.yellow().bg_black().underline(), 'called directly without arguments should throw' )

    let thrower = true
    let thrower_message = ''
    const err = await oftype___.resolvers().catch( error => error )

    try{
        throws( () => {throw err}, { name:'TypeError' }, 'mhmhmhm - 3 :/'.bg_red() )
    }catch ( error_message ) {
        thrower = false
        thrower_message = error_message.message
    }

    if ( resolvers_test_oki instanceof Error ){
        tttt.failed( true )
        console.log( resolvers_test_oki )
    }else
        console.log( 'fine oki'.bg_green() )

    if ( resolvers_test_deeeeep instanceof Error ){
        tttt.failed( true )
        console.log( resolvers_test_deeeeep )
    }else
        console.log( 'fine deeeeep'.bg_green() )

    if( thrower === false ){
        tttt.failed( true )
        console.log( thrower_message )
    }else
        console.log( 'fine throws'.bg_green() )

    tttt.end_test( tttt.id() )
}