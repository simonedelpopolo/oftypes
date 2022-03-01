import { array_ } from '../index.js'
import { output__ } from 'trythistrythat/lib/exporter.js'
import { describe, failed, oki } from 'trythistrythat'

export default async () => {
    await describe( 'UNIT test for array_ type check' )
    
    let error
    error = await oki( async () => {
        
        return {
            expected: true,
            actual: await array_( [ 5 ] ),
            error: 'something went wrong'
        }
        
    } )
    
    if( error instanceof Error ) {
        failed( true )
        console.log( error.message.red() )
        output__.event.emit( 'end' )
    }else if( error === false ){
        
        console.log( 'test passed'.green() )
        output__.event.emit( 'end' )
    }
    
    
}
