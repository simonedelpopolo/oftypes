import * as Module from 'module'

const oftypes = Object.create( Module )
export default oftypes

// A todo working on promise checker
// eslint-disable-next-line no-unused-vars
const promise = {
    promise_: function ( variable ) {
        return variable.constructor.name === 'Promise' || variable.constructor.name === 'AsyncFunction' ? 'Promise' : false
    },
}

const oftypes__ = {
    
    /**
     * It handles the type checking from the function types. If that fails, it rejects with TypeError.
     *
     * @param {string} types_rejection - .
     * @returns {Promise<unknown>}
     */
    error: function argument( types_rejection ) {
        return new Promise( ( resolve, reject ) => {
            reject( new TypeError( types_rejection ) )
        } )
    },
    
    /**
     * It checks the types of both arguments resolvers and payback.
     *
     * @param {any} resolvers - Any kind of variable will be checked.
     * @param {any} payback - Any kind of variable will be checked.
     * @returns {string|boolean}
     */
    types: function types( resolvers, payback ) {
        
        if ( typeof payback !== 'boolean' )
            return `only boolean is an accepted parameter for payback. Given type: ${ typeof payback }`
        
        if ( resolvers === null )
            return 'only object is an accepted parameter for resolvers. Given: null'
        
        if ( resolvers.constructor && resolvers.call && resolvers.apply )
            return 'only object is an accepted parameter for resolvers. Given type: Function'
        
        if ( Array.isArray( resolvers ) )
            return 'only object is an accepted parameter for resolvers. Given type: Array'
        
        if ( typeof resolvers !== 'object' )
            return `only object is an accepted parameter for resolvers. Given type: ${ typeof resolvers }`
        
        return true
    },
    
    /**
     * Method for resolve function in Promise.
     * It checks the payback argument. If true it resolve the promise with a destructured array including the resolvers message and the checked variable.
     * Otherwise, just the resolvers.
     *
     * @param {boolean} payback - The payback argument.
     * @param {{true:any,false:any}} resolvers - The resolvers' argument.
     * @param {any} variable - The variable argument.
     * @returns {[any,any]|any} - If payback is true it resolve the promise with a destructured array including the resolvers message and the checked variable.
     */
    fulfilled: function fulfilled( payback, resolvers, variable ) {
        return payback === true ? [
            resolvers,
            variable,
        ] : resolvers
    },
}

const undefined__ = Symbol( 'Function undefined_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, undefined__, {
    enumerable: true,
    writable: false,
    configurable: false,
    /**
     * The undefined_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @example
     *     let variable
     *
     *     console.log( await oftype.undefined_( variable, {
     *       true:'the variable is undefined',
     *       false:'variable is set'
     *     }))
     *
     *     // yield: the variable is undefined
     * @returns {Promise | PromiseFulfilledResult<any> | PromiseRejectedResult<TypeError>}
     */
    value: function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            typeof variable === 'undefined' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        } )
    },
} )

const array__ = Symbol( 'Function array_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, array__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The array_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function array_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            Array.isArray( variable ) ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const function__ = Symbol( 'Function function_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, function__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The function_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function function_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
    
        if ( await null_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            variable.constructor && variable.call && variable.apply ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const object__ = Symbol( 'Function object_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, object__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The object_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function object_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        if ( await function_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
    
        if ( await null_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        if ( await array_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'object' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const string__ = Symbol( 'Function string_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, string__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The string_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function string_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'string' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const number__ = Symbol( 'Function number_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, number__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The number_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function number_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'number' ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const null__ = Symbol( 'Function null_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, null__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The null_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function null_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            variable === null ?
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const boolean__ = Symbol( 'Function boolean_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, boolean__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The boolean_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'boolean' ?
                
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const symbol__ = Symbol( 'Function symbol_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, symbol__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The symbol_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function symbol_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'symbol' ?
                
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

const bigint__ = Symbol( 'Function bigint_(variable, resolvers, payback):any' )
Object.defineProperty( oftypes, bigint__, {
    enumerable: true,
    writable: false,
    configurable: false,
    
    /**
     * The bigint_ checking function.
     *
     * @param {any} variable - Variable to check for.
     * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
     * @param {boolean=} payback - If true it will send back the variable value.
     * @returns {Promise | PromiseFulfilledResult<any> | any}
     */
    value: async function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        if ( await undefined_( variable ) === true ) return ( oftypes__.fulfilled( payback, resolvers.false, variable ) )
        
        let types = oftypes__.types( resolvers, payback )
        if ( types !== true )
            return oftypes__.error( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'bigint' ?
                
                resolve( oftypes__.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( oftypes__.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

/**
 * The undefined_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @example
 *     let variable
 *
 *     console.log( await oftype.undefined_( variable, {
 *       true:'the variable is undefined',
 *       false:'variable is set'
 *     }))
 *
 *     // yield: the variable is undefined
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ undefined__ ]( variable, resolvers, payback )
}

/**
 * The array_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function array_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ array__ ]( variable, resolvers, payback )
}

/**
 * The function__ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function function_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ function__ ]( variable, resolvers, payback )
}

/**
 * The object_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function object_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ object__ ]( variable, resolvers, payback )
}

/**
 * The string_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function string_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ string__ ]( variable, resolvers, payback )
}

/**
 * The number_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function number_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ number__ ]( variable, resolvers, payback )
}

/**
 * The null_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function null_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ null__ ]( variable, resolvers, payback )
}

/**
 * The boolean_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function boolean_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ boolean__ ]( variable, resolvers, payback )
}

/**
 * The symbol_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function symbol_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ symbol__ ]( variable, resolvers, payback )
}

/**
 * The bigint_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes[ bigint__ ]( variable, resolvers, payback )
}

/**
 * Freeze the Object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
Object.freeze( oftypes )
