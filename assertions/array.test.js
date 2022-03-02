import { array_ } from '../index.js'
import { deeeeepStrictEqual, describe, end_test, failed, oki, separator } from 'trythistrythat'

export default async () => {
    await describe( 'UNIT test for Object [ oftypes.array_ ]' )
    console.log()
    
    let error
    
    await describe( 'variable is an array of {number[]} -> [ 5 ]' )
    await describe( 'returns true'.yellow() )
    console.log()
    
    error = await oki( async () => {
        
        return {
            expected: true,
            actual: await array_( [ 5 ] ),
            error: 'something went wrong oki test'
        }
        
    } )
    
    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
    }else
        console.log( 'test passed'.green() )
    
    console.log()
    
    await separator()
    
    await describe( 'variable is an object -> { object: null }' )
    await describe( 'returns [ false, { object: null } ]'.yellow() )
    console.log()
    
    error = await deeeeepStrictEqual( async () => {
        
        return {
            expected: [ false, { object: null } ],
            actual: await array_( { object: null }, undefined, true ),
            error: 'something went wrong deeeeepStrictEqual'
        }
        
    } )
    
    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
    }else
        console.log( 'test passed'.green() )
    
    end_test()
}
