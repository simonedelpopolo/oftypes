import { shared } from '../../oftypes.js'

const fulfilledSymbol = Symbol.for( 'Object [ oftypes.shared.fulfilled ]' )
const fulfilled = Object.defineProperty( shared[ Symbol.for( 'oftypes.shared' ) ], fulfilledSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Object [ oftypes.shared.fulfilled ]
     * Method for resolve function in Promise
     * It checks the payback argument. If true it resolve the promise with a destructured array including the resolvers message and the checked variable.
     * Otherwise, just the resolvers.
     *
     * @param {boolean} compare - switcher for <oftypes>.<type> function or <oftypes>.<compare> function
     * @param {
     *    {variable:any,resolvers:{true:any,false:any},payback:{boolean}} |
     *    {v_1:any,v_2:any,resolvers:{true:any,false:any},payback:{boolean}}
     * } data - object including
     * @property {any} variable - argument.
     * @property {any} v_1 - argument.
     * @property {any} v_2 - argument.
     * @property {{true:any,false:any}} resolvers - argument.
     * @property {boolean} payback - argument.
     * @returns {
     *    [{true:any,false:any},any,{type:string}]|{true:any,false:any}
     *    [{true:any,false:any},any,any,{left_type:string,right_type:string}]|{true:any,false:any}
     * } - If payback is true it resolves the promise with a destructured array including the resolvers message, the variable and the variable.constructor.name.
     */
    value: function fulfilled( compare, data ){

        switch( compare ){

            case false: {

                let constructor_name
                if ( ! data.variable && data.variable !== null )
                    constructor_name = 'undefined'
                else if ( data.variable === null )
                    constructor_name = 'null'
                else
                    constructor_name = data.variable.constructor.name

                return data.payback

                    ? [  data.resolvers, data.variable, { type:constructor_name } ]
                    : data.resolvers
            }

            case true: {

                /**
                 * - left variable.
                 */
                let constructor_name_v_1
                if( ! data.v_1 && data.v_1 !== null )
                    constructor_name_v_1 = 'undefined'
                else if( data.v_1 === null )
                    constructor_name_v_1 = 'null'
                else
                    constructor_name_v_1 = data.v_1.constructor.name

                /**
                 * - right variable.
                 */
                let constructor_name_v_2
                if( ! data.v_2 && data.v_2 !== null )
                    constructor_name_v_2 = 'undefined'
                else if( data.v_2 === null )
                    constructor_name_v_2 = 'null'
                else
                    constructor_name_v_2 = data.v_2.constructor.name

                return data.payback

                    ? [ data.resolvers, data.v_1, data.v_2, { left_type:constructor_name_v_1, right_type:constructor_name_v_2 } ]
                    : data.resolvers
            }
            default:
                break
        }

    }
} )

export default fulfilled[ fulfilledSymbol ]
