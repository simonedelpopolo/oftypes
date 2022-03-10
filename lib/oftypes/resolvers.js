import { error } from './functions/error.js'
import oftypes from '../oftypes.js'
import { undefined_ } from '../../index.js'

const resolversSymbol = Symbol( 'Object [ oftypes.resolvers ]' )
const resolvers = Object.defineProperty( oftypes, resolversSymbol, {
    enumerable: true,
    writable: false,
    configurable: false,

    /**
     * Resolvers ⬇
     * Instead of using the resolvers in the form of an Object -> `{true: any, false: any}` this function wrap them in two arguments.
     * This function is made to simplify the way to pass the resolvers to **oftypes.[functions]**.
     * **No more one ~~_unique variables name_~~ for the resolvers**.
     *
     * @param {any} truthy - truthy
     * @param {any} falsy - falsy
     * @returns {Promise<{true:any, false:any}>|{true:any, false:any}}
     */
    value: async function resolvers( truthy, falsy ){

        if( ( await undefined_( truthy ) || await undefined_( falsy ) ) === true ) {
            await error( 'both arguments `truthy` & `falsy` are required' )
                .catch( error => {throw error} )
        }

        return{
            true: truthy,
            false: falsy
        }
    }
} )

export default resolvers[ resolversSymbol ]
