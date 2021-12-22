import * as Module from 'module'

const oftypes = Object.create( Module )
export default oftypes

const __methods = {
    
    /**
     * It handles the type checking from the function types. If that fails, it rejects with TypeError.
     *
     * @param {string} types_rejection - .
     * @returns {Promise<unknown>}
     */
    argument: function argument( types_rejection ) {
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
Object.defineProperty( oftypes, 'undefined_', {
    enumerable: true,
    writable: false,
    configurable: false,
    value: function undefined_( variable, resolvers = { true: true, false: false }, payback = false ) {
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            typeof variable === 'undefined' ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
        } )
    },
} )

Object.defineProperty( oftypes, 'array_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            Array.isArray( variable ) ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'function_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            variable.constructor && variable.call && variable.apply ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'object_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        if ( await function_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        if ( await array_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'object' ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'string_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'string' ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'number_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'number' ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'null_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            variable === null ?
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'boolean_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'boolean' ?
            
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'symbol_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'symbol' ?
            
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
        } )
    },
} )

Object.defineProperty( oftypes, 'bigint_', {
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
        
        if ( await undefined_( variable ) === true ) return ( __methods.fulfilled( payback, resolvers.false, variable ) )
        
        let types = __methods.types( resolvers, payback )
        if ( types !== true )
            return __methods.argument( types )
        
        return new Promise( ( resolve ) => {
            
            typeof variable === 'bigint' ?
            
                resolve( __methods.fulfilled( payback, resolvers.true, variable ) ) :
                resolve( __methods.fulfilled( payback, resolvers.false, variable ) )
            
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
    
    return oftypes.undefined_( variable, resolvers, payback )
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
    
    return oftypes.array_( variable, resolvers, payback )
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
    
    return oftypes.function_( variable, resolvers, payback )
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
    
    return oftypes.object_( variable, resolvers, payback )
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
    
    return oftypes.string_( variable, resolvers, payback )
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
    
    return oftypes.number_( variable, resolvers, payback )
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
    
    return oftypes.null_( variable, resolvers, payback )
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
    
    return oftypes.boolean_( variable, resolvers, payback )
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
    
    return oftypes.symbol_( variable, resolvers, payback )
}

/**
 * The bygint_ checking function.
 *
 * @param {any} variable - Variable to check for.
 * @param {{true:any, false:any}=} resolvers - Default is set to true and false, but can be set to anything.
 * @param {boolean=} payback - If true it will send back the variable value.
 * @returns {Promise | PromiseFulfilledResult<any> | any}
 */
export function bigint_( variable, resolvers = { true: true, false: false }, payback = false ) {
    
    return oftypes.bigint_( variable, resolvers, payback )
}

/**
 * Freeze the Object.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
 */
Object.freeze( oftypes )
