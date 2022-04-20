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
 * @throws {OftypesError}
 * @returns {Promise<boolean|any|[any,any,{type:string}]> | boolean|any|[any,any,{type:string}]}
 */
export default async function resolves( oftype, data ){

    const variable = data.variable
    const resolvers = data.resolvers
    const payback = data.payback
    const rejection = await rejects( oftype.name, { resolvers: resolvers, payback: payback, strict: false, string: undefined } )

    return new Promise ( ( resolve, reject ) => {
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
