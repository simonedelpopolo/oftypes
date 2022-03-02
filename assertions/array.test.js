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
            error: 'something went wrong'
        }
        
    } )
    
    await separator()
    
    await describe( 'variable is an array of {number[]} -> [ 5 ]' )
    await describe( 'returns [ true, [ 5 ] ]'.yellow() )
    console.log()
    
    error = await deeeeepStrictEqual( async () => {
        
        return {
            expected: [ true, [ 5 ] ],
            actual: await array_( [ 5 ], undefined, true ),
            error: 'something went wrong'
        }
        
    } )
    
    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
        end_test()
    }else{
        
        console.log( 'test passed'.green() )
        end_test()
    }
}
