# oftypes

___

###### Configurable typeof responses. All the primitives are covered [bigint, boolean, buffer, string, number, promise, undefined, symbol, null] and NaN. Function, Array, Promise ( STD built-in objects ) and Buffer ( Node.js )  are differentiated from Object. Javascript ESM module.

[Standard built-in object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

###### Javascript ESM module.

___

#### [Functions & Examples](#functions-&-examples)

- [oftype_ enhanced typeof](#oftype_-enhanced-typeof)
- [array_ type check.](#array_-type-check)
- [bigint_type check.](#bigint_-type-check)
- [boolean_type check.](#boolean_-type-check)
- [buffer_type check.](#buffer_-type-check)
- [function_type check.](#function_-type-check)
- [nan_type check.](#nan_-type-check)
- [null_type check.](#null_-type-check)
- [number_type check.](#number_-type-check)
- [object_type check.](#object_-type-check)
- [promise_type check.](#promise_-type-check)
- [string_type check.](#string_-type-check)
- [symbol_type check.](#symbol_-type-check)
- [undefined_type check.](#undefined_-type-check)
___

### Installation

```shell
npm i oftypes
```

___

### Functions & Examples

___

- #### oftype_ enhanced typeof.

#### oftype\_(variable, [resolvers], [payback]) ⇒ `Promise<string|any>|string|any`

**Kind**: global function

| Param       | Type      | Default                  | Description                                   |
|-------------|-----------|--------------------------|-----------------------------------------------|
| variable    | `any`     |                          | Variable to check for.                        |
| [resolvers] | `Object`  | `{[unknown:string]:any}` | Default is set to undefined.                  |
| [payback]   | `boolean` | `false`                  | If true it will send back the variable value. |

> ℹ returned values:

- Array
- bigint
- Boolean
- Buffer
- Function
- null
- Number
- Object
- Promise
- String
- Symbol
- undefined

The returned values can be set as property name of the resolvers' argument Object
The value of the property of the resolvers' object can be any type.

**Example**

We are expecting a variable to be type of {number}

```javascript
import { oftype_ } from 'oftypes'

// the variable is well-known type of {number}
const variable = 10 

/**
 * the resolvers Object
 *
 * oftype_ returns a Promise<string> of the type, in this case Number.
 * so, we set the property name of the resolvers to Number
 * and we set the value of the property to 'allright'
 * doing so the Promise<string> will be 'allright' and not Number
 * 
 * ℹ notice that the value of the property, in this case Number, could be anything, also a function.
 * ℹ notice that the property name can be wrapped into sigle quotes or not
 */
const resolvers = {
    Number: 'allright'
}

// this will return the value from the resolvers object and the variable itself into an array
const payback = true

console.log( await oftype_(variable, resolvers, payback))

// Yields -> [ 'allright', 10 ]
```


**Example**

```js
import { oftype_ } from 'oftypes'

const variable = [ 'array', 'of', 'string' ]
const resolvers = { 'Array': 'it is an Array' }

console.log( await oftype_( variable, resolvers ) )

// Yield -> it is an Array
```

```js
import { oftype_ } from 'oftypes'

const variable = async ()=>{}

console.log( await oftype_( variable ) )

// Yield -> Promise
```

```js
import { oftype_ } from 'oftypes'

const variable = async ()=>{}
const resolvers = { Symbol: 'it is a Symbol' }

console.log( await oftype_( variable, resolvers ) )

// Yield -> undefined
```

___

- #### array_ type check.

#### array\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { array_ } from 'oftypes'

const variable = [ () => {console.log( 'I\'m a FUNCTION!' )} ]
const resolvers = undefined
const payback = undefined

console.log( await array_( variable, resolvers, payback ) )

// Yield true
```

```js
import { array_ } from 'oftypes'

const variable = () => {console.log( 'I\'m a FUNCTION!' )}
const resolvers = undefined
const payback = undefined

console.log( await array_( variable, resolvers, payback ) )

// yield false
```

___

- #### bigint_ type check.

#### bigint\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { bigint_ } from 'oftypes'

const variable = BigInt( 'oftypes' )

console.log( await bigint_( variable ) )
// yield true
```

```js
import { bigint_ } from 'oftypes'

const variable = function ( ){}

console.log( await bigint_( variable ) )
// yield false
```
___

- #### boolean_ type check.

#### boolean\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { boolean_ } from 'oftypes'

const variable = { object: () => {} }
const resolvers = { true: 'it is oftype boolean!', false: 'it is not oftype boolean' }
const payback = true

console.log( await boolean_( variable, resolvers, payback ) )

// yield ['it is not oftype boolean!', { object: ()=>{} }]
```

```js
import { boolean_ } from 'oftypes'

const variable = true
const resolvers = { true: 'it is oftype boolean!', false: 'it is not oftype boolean' }
const payback = true

console.log( await boolean_( variable, resolvers, payback ) )

// yield ['it is oftype boolean!', true]
```
___

- #### buffer_ type check.

#### buffer\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { buffer_ } from 'oftypes'

const variable = Buffer.from('hello folks')
const resolvers = { true: 'it is oftype buffer!', false: 'it is NOT oftype buffer' }
const payback = true

console.log( await buffer_( variable, resolvers, payback ) )

// yield ['it is oftype buffer!', <Buffer 68 65 6c 6c 6f 20 66 6f 6c 6b 73>]
```

```js
import { buffer_ } from 'oftypes'

const variable = 'hello folks'
const resolvers = { true: 'it is oftype buffer!', false: 'it is NOT oftype buffer' }
const payback = true

console.log( await buffer_( variable, resolvers, payback ) )

// yield ['it is NOT oftype buffer!', 'hello folks']
```
___

- #### function_ type check.

#### function\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { function_ } from 'oftypes'

const variable = 10
const resolvers = undefined
const payback = false

console.log( await function_( variable, resolvers, payback ) )

// yield false
```

```js
import { function_ } from 'oftypes'

const variable = () => {console.log( 'I\'m a FUNCTION!' )}
const resolvers = { true: true, false: false }
const payback = true

const resolved = await function_( variable, resolvers, payback )
resolved[ 1 ]()

// yield I'm a FUNCTION!
```

___

- #### nan_ type check.

#### nan\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { nan_ } from 'oftypes'

const variable = 10
const resolvers = { true: 'it is NaN!', false: 'it is not NaN' }
const payback = true

console.log( await nan_( variable, resolvers, payback ) )

// yield ['it is not NaN!', 10]
```

```js
import { nan_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is NaN!', false: 'it is not NaN' }
const payback = true

console.log( await nan_( variable.object, resolvers, payback ) )

// yield ['it is NaN!', { object: null }]
```

___

- #### null_ type check.

#### null\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { null_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is null!', false: 'it is not null' }
const payback = true

console.log( await null_( variable, resolvers, payback ) )

// yield ['it is not null!', { object: null }]
```

```js
import { null_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is null!', false: 'it is not null' }
const payback = true

console.log( await null_( variable.object, resolvers, payback ) )

// yield ['it is null!', null]
```

___

- #### number_ type check.

#### number\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { number_ } from 'oftypes'

const variable = 10
const resolvers = { true: 'it is a number!', false: 'it is not a number' }
const payback = true

console.log( await string_( variable, resolvers, payback ) )

// yield ['it is a number!', 10]
```

```js
import { number_ } from 'oftypes'

const variable = '10'
const resolvers = { true: 'it is a number!', false: 'it is not a number' }
const payback = true

console.log( await string_( variable, resolvers, payback ) )

// yield ['it is a number!', 10]
```

```js
import { number_ } from 'oftypes'

const variable = 'folks'
const resolvers = { true: 'it is a number!', false: 'it is not a number' }
const payback = true

console.log( await string_( variable, resolvers, payback ) )

// yield ['it is not a number!', 'folks']
```

___

- #### object_ type check.

#### object\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { object_ } from 'oftypes'

const variable = [ 'hello folks!' ]
const resolvers = { true: 'it is an object!', false: 'it is not an object!' }
const payback = true

console.log( await object_( variable, resolvers, payback ) )

// yield ['it is not an object!', ['hello folks!']]
```

```js
import { object_ } from 'oftypes'

const variable = { array1: [ 'hello folks!' ] }
const resolvers = { true: 'it is an object!', false: 'it is not an object!' }
const payback = true

console.log( await object_( variable, resolvers, payback ) )

// yield ['it is an object!', { array1: [ 'hello folks!' ] }]
```

___

- #### promise_ type check.

#### promise\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { promise_ } from 'oftypes'

const asyncFunction = async()=>{}
console.log( await promise_( asyncFunction ) )

// yield true

```

___

- #### string_ type check.

#### string\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { string_ } from 'oftypes'

const variable = 'hello folks!'
const resolvers = { true: 'it is a string!', false: 'it is not a string' }
const payback = true

console.log( await string_( variable, resolvers, payback ) )

// yield ['it is a string!', 'hello folks!']
```

#### this example show how the resolvers' parameter can return anything you like

```js
import { string_ } from 'oftypes'
import { stat } from 'fs/promises'

const variable = 'hello folks!'
const resolvers = {
    true: async () => {
        return stat( process.cwd() + '/index.js' ).then( stat => stat ).catch( error => error )
    }, false: 'it is not a string',
}
const payback = true

let fileStat = await string_( variable, resolvers, payback )
if ( typeof fileStat[ 0 ] === 'function' )
    console.log( await fileStat[ 0 ]() )
else
    console.log( fileStat )

// yield the stats object of the file
// change the variable to number = 10, it yields ['it is not a string!', 10]
// if the file passed to the stat function is not found, it yields the ENOENT exception
```

___

- #### symbol_ type check.

#### symbol\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { symbol_ } from 'oftypes'

const variable = Symbol( 'symbol_' )

console.log( await symbol_( variable ) )
// yield true
```

```js
import { symbol_ } from 'oftypes'

const variable = Array(26)

console.log( await symbol_( variable ) )
// yield false
```

___

- #### undefined_ type check.

#### undefined\_(variable, [resolvers], [payback]) ⇒ `Promise` \| `PromiseFulfilledResult<any>` \| `any`

**Kind**: global function

| Param       | Type      | Default                   | Description                                                   |
|-------------|-----------|---------------------------|---------------------------------------------------------------|
| variable    | `any`     |                           | Variable to check for.                                        |
| [resolvers] | `Object`  | `{true:true,false:false}` | Default is set to true and false, but can be set to anything. |
| [payback]   | `boolean` | `false`                   | If true it will send back the variable value.                 |

**Example**

```js
import { undefined_ } from 'oftypes'

console.log( await undefined_( undefined ) )

// yield true

```
___
