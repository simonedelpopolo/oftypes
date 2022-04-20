import empty from './empty.js'
import fulfilled from './fulfilled.js'
import rejects from './rejects.js'

/**
 * Object [ oftypes.shared.resolve ]
 * resolves the promise of the <oftypes><functions>.
 * functions that share this Object:
 * array_
 * async_
 * bigint_
 * boolean_
 * buffer_
 * function_
 * object_
 * string_
 * symbol_
 * .
 *
 * @param {{name:string, reference:string}} oftype - referenced function name & referenced constructor.name
 * @param {{variable:any, resolvers:{true:any, false:any},payback:boolean}} data - arguments
 * @param {{resolve:(value: (PromiseLike<unknown> | unknown)) => void, reject:(reason?: any) => void}} executors - Promise (resolve,reject)
 */
export default function resolves( oftype, data, executors ){

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
                    variable.constructor.name === oftype.reference
                        ? resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.true } ) )
                        : resolve( fulfilled( false, { variable:variable, payback:payback, resolvers:resolvers.false } ) )

                }

            }
        } )
}
