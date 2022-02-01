# oftypes

___

###### Configurable typeof responses. All the primitives are covered [bigint, boolean, buffer, string, number, promise, undefined, symbol, null]. Function, Array, Promise ( STD built-in objects ) and Buffer ( Node.js )  are differentiated from Object. Javascript ESM module.

[Standard built-in object on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

###### Javascript ESM module.

___

#### [Functions & Examples](#functions-&-examples)

- [The array_ checking function.](#the-array_-checking-function)
- [The bigint_ checking function.](#the-bigint_-checking-function)
- [The boolean_ checking function.](#the-boolean_-checking-function)
- [The buffer_ checking function.](#the-buffer_-checking-function)
- [The function_ checking function.](#the-function_-checking-function)
- [The null_ checking function.](#the-null_-checking-function)
- [The number_ checking function.](#the-number_-checking-function)
- [The object_ checking function.](#the-object_-checking-function)
- [The promise_ checking function.](#the-promise_-checking-function)
- [The string_ checking function.](#the-string_-checking-function)
- [The symbol_ checking function.](#the-symbol_-checking-function)
- [The undefined_ checking function.](#the-undefined_-checking-function)
___

### Installation

```shell
npm i oftypes
```

___

### Functions & Examples

___

- #### The array_ checking function.

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

- #### The bigint_ checking function.

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

- #### The boolean_ checking function.

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

- #### The buffer_ checking function.

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

- #### The function_ checking function.

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

- #### The null_ checking function.

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

- #### The number_ checking function.

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

- #### The object_ checking function.

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

- #### The promise_ checking function.

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

- #### The string_ checking function.

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

- #### The symbol_ checking function.

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

- #### The undefined_ checking function.

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
