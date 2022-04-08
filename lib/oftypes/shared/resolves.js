import { shared } from '../../oftypes.js'
import { empty, fulfilled, rejects } from '../../../index.js'

const resolvesSymbol = Symbol.for( 'Object [ oftypes.shared.resolves ]' )
const resolves = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], resolvesSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.shared.resolve ]
     * resolves the promise of the <oftypes><functions>.
     * function that shares this Object:
     * array_
     *
     * .
     *
     * @param {Object<{name:string, x:string}>} oftype - referenced function name
     * @param {Object<{variable:any, resolvers:{true:any, false:any},payback:boolean}>} data - arguments
     * @param {Object<{resolve:PromiseConstructor.resolve, reject:PromiseConstructor.reject}>} executors - Promise (resolve,reject)
     */
    value: function resolves( oftype, data, executors ){

        const resolve = executors.resolve
        const reject = executors.reject
        const variable = data.variable
        const resolvers = data.resolvers
        const payback = data.payback

        rejects( oftype.name, { resolvers: resolvers, payback: payback, strict: false, string: undefined } )
            .then( rejection => {

                if( rejection ) reject( rejection )

                else{

                    if( empty( variable ) ) resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                    else{
                        variable.constructor.name === oftype.x
                            ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                            : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                    }

                }
            } )
    }
} )

export default resolves[ resolvesSymbol ]
