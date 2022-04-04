# oftypes

___

###### Configurable 'typeof' analysis and responses. Javascript ESModule.

___

### Index of Contents

- [Installation](#installation)
- [Description](#description)
  - [variable argument](#variable-argument)
  - [resolvers argument](#resolvers-argument)
  - [payback argument](#payback-argument)
- [Functions & Examples](#functions-&-examples)
  - [oftype_ enhanced typeof](#oftype_-enhanced-typeof)
  - [array_ type check.](#array_-type-check)
  - [async_ type check.](#async_-type-check)
  - [bigint_type check.](#bigint_-type-check)
  - [boolean_type check.](#boolean_-type-check)
  - [compare function.](#compare-function)
  - [error_ type check.](#error_-type-check)
  - [buffer_type check.](#buffer_-type-check)
  - [function_type check.](#function_-type-check)
  - [nan_type check.](#nan_-type-check)
  - [null_type check.](#null_-type-check)
  - [number_type check.](#number_-type-check)
  - [object_type check.](#object_-type-check)
  - [promise_type check.](#promise_-type-check)
  - [resolvers function.](#resolvers-function)
  - [string_type check.](#string_-type-check)
  - [symbol_type check.](#symbol_-type-check)
  - [undefined_type check.](#undefined_-type-check)
- [JetBrains OSS Licence](#jetbrains-oss-license)

___

### Installation

```shell
npm install oftypes
```

____

### Description

Simple and useful module to check types of variables.  
Almost every function of the module accepts the same arguments.  
`variable` `resolvers` and `payback`

type checks function exception is:

**function number_**  

`oftypes.number_( variable, resolvers, payback, string )`

- extra `{boolean}string` argument default set to `true` and, `variable = "10"` will be considered {number}  
- Set it to `false` and, `variable = "10"` will **NOT** be considered {number}. **_strict type check_**.

#### variable argument
  
  Variable to check the type for.  
  
#### resolvers argument

  It is a "kind of replacement" for conditional `if` that we are used doing when using `typeof`.  

  follow a classic code example
  
  ```javascript
  // classic way to type check
  const variable = '10' // type {number}
  
  // this if/else statement is silly.
  // but consider for a moment that the variable may be of unknown type.
  if( typeof variable === 'number' ) console.log('the variable is of type Number')
  
  else console.log('the variable is NOT of type Number')
  
  // prints -> 'the variable is NOT of type Number'
  ```
  
  using oftypes for the same struct
  
  ```javascript
  // oftypes way to type check
  const variable = '10' // type {number}
  
  // here you can see the "kind of replacement" for conditional if
  // this resolvers will return a string in both cases true or false
  const resolvers = {
    true: 'the variable is of type Number',
    false: 'the variable is NOT of type Number' 
  }
  
  // oftypes.number_ will recongnize string literal number by default
  console.log( await number_( variable, resolvers ) )
  
  // printss -> 'the variable is of type Number'

  // oftypes.number_ strictly detecting type of number.
  // the payback (3rd argument) set to 'undefined' to use the default value 'false'
  // the string (4th argument) set to 'false' to strictly detecting type of number
  console.log( await number_( variable, resolvers, undefined, false ) )

  // prints -> 'the variable is NOT of type Number'
  ```
  
  `resolvers` Object must always have two properties `true` & `false`.  
  The value of the properties by default are  
  ```javascript
  { true: true, false: false }
  ```
  `resolvers` can be set to anything, a function, a Promise or a call to a somewhere else module or even an event handler.  
  
#### payback argument

This argument when set to `true` returns an **_array_** ⇩  

```javascript
// array[0] the resolver result {any|boolean}
// array[1] the variable itself
// array[2] the actual variable's type
[ true, 10, { type: 'Number' } ]
````

  same as above

  ```javascript
  
  // oftypes way to type check
  const variable = '10' // type {number}

  // here you can see the "kind of replacement" for conditional if
  // this resolvers will return a string in both cases true or false
  const resolvers = {
    true: 'the variable is of type Number',
    false: 'the variable is NOT of type Number' 
  }
  
  const payback = true

  // oftypes.number_ will recongnize string literal number by default
  console.log(await number_(variable, resolvers, payback))
  
  // prints -> ['the variable is of type Number', 10, {type: 'Number'}]
  ```
  > ℹ the payback is particularly useful when running UNIT tests 

____

### Functions & Examples

___

- #### oftype_ enhanced typeof

**oftype_(variable, [resolver], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument   | type                             | Default     | Description              |
|------------|----------------------------------|-------------|--------------------------|
| variable   | `any`                            |             | to check for             |
| [resolver] | `Object<{[unknown:string]:any}>` | `undefined` | resolver                 |
| [payback]  | `boolean`                        | `false`     | `true` to get back infos |

> ℹ returned values:

- `constructor.name` of the `variable`
- Array
- BigInt
- Boolean
- Buffer
- Function
- Number
- Object
- Promise
- AsyncFunction
- String
- Symbol
- ...
- **_exception done for "undefined" & "null" due to their nature they haven't the constructor.name_**  
    oftype function will then return as string:
  - undefined
  - null

The returned values can be set as property name of the `resolver` argument Object
The value of the property of the `resolver` object can be any type.

**Example**

We are expecting a variable to be type of {number}

```javascript
import { oftype_ } from 'oftypes'

// the variable is well-known type of {number}
const variable = 10 

/**
 * the resolver Object
 *
 * oftype_ returns a Promise<string> of the type, in this case Number.
 * so, we set the property name of the resolvers to Number
 * and we set the value of the property to 'allright'
 * doing so the Promise<string> will be 'allright' and not Number
 * 
 * ℹ notice that the value of the property, in this case Number, could be anything, also a function.
 * ℹ notice that the property name can be wrapped into sigle quotes or not
 */
const resolver = {
    Number: 'allright'
}

// this will return the value from the resolver object and the variable itself into an array
const payback = true

console.log( await oftype_(variable, resolver, payback))

// prints -> [ 'allright', 10, { type: 'Number'} ]
```


**Example**

```js
import { oftype_ } from 'oftypes'

const variable = [ 'array', 'of', 'string' ]
const resolver = { 'Array': 'it is an Array' }

console.log( await oftype_( variable, resolver ) )

// prints -> it is an Array
```

```js
import { oftype_ } from 'oftypes'

const variable = async ()=>{}

console.log( await oftype_( variable ) )

// prints -> AsyncFunction
```

```js
import { oftype_ } from 'oftypes'

const variable = async ()=>{}
const resolver = { Symbol: 'it is a Symbol' }

console.log( await oftype_( variable, resolver ) )

// prints -> undefined
```

___

- #### array_ type check.

**array_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { array_ } from 'oftypes'

const variable = [ () => {console.log( 'I\'m a FUNCTION!' )} ]
const resolvers = undefined
const payback = undefined

console.log( await array_( variable, resolvers, payback ) )

// prints true
```

```js
import { array_ } from 'oftypes'

const variable = () => {console.log( 'I\'m a FUNCTION!' )}
const resolvers = undefined
const payback = undefined

console.log( await array_( variable, resolvers, payback ) )

// prints false
```

___

- #### async_ type check.

**async_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { async_ } from 'oftypes'

const variable = [ async() => {} ]
const resolvers = undefined

console.log( await async_( variable[ 0 ] ) )

// prints true
```

```js
import { async_ } from 'oftypes'

const variable = new Promise( resolve => resolve( 'promise' ) )

console.log( await async_( variable ) )

// prints false
```

___

- #### bigint_ type check.

**bigint_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { bigint_ } from 'oftypes'

const variable = BigInt( 'oftypes' )

console.log( await bigint_( variable ) )
// prints true
```

```js
import { bigint_ } from 'oftypes'

const variable = function ( ){}

console.log( await bigint_( variable ) )
// prints false
```
___

- #### boolean_ type check.

**boolean_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { boolean_ } from 'oftypes'

const variable = { object: () => {} }
const resolvers = { true: 'it is oftype boolean!', false: 'it is not oftype boolean' }
const payback = true

console.log( await boolean_( variable, resolvers, payback ) )

// prints ['it is not oftype boolean!', { object: ()=>{} }, { type: 'Object' } ]
```

```js
import { boolean_ } from 'oftypes'

const variable = true
const resolvers = { true: 'it is oftype boolean!', false: 'it is not oftype boolean' }
const payback = true

console.log( await boolean_( variable, resolvers, payback ) )

// prints ['it is oftype boolean!', true, { type: 'Boolean' }]
```
___

- #### buffer_ type check.

**buffer_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { buffer_ } from 'oftypes'

const variable = Buffer.from('hello folks')
const resolvers = { true: 'it is oftype buffer!', false: 'it is NOT oftype buffer' }
const payback = true

console.log( await buffer_( variable, resolvers, payback ) )

// prints ['it is oftype buffer!', <Buffer 68 65 6c 6c 6f 20 66 6f 6c 6b 73>, { type: 'Buffer' } ]
```

```js
import { buffer_ } from 'oftypes'

const variable = 'hello folks'
const resolvers = { true: 'it is oftype buffer!', false: 'it is NOT oftype buffer' }
const payback = true

console.log( await buffer_( variable, resolvers, payback ) )

// prints ['it is NOT oftype buffer!', 'hello folks', { type: 'String'} ]
```
___

- #### compare function.

Compare two variable by the types.  
Set the argument strict to `true` to compare also the content **( _under the hood node:assert.deepStrictEqual_ )**

**compare(v_1:any, v_2:any, [strict], [resolvers], [payback]) ⇒ `Promise<boolean|any|[any,any,any,{left_type:string,right_type:string}]` | `boolean` | `any` | `[any,any,any,{left_type:string,right_type:string}]`**



**Kind**: global function

| Param       | Type                           | Default                   | Description               |
|-------------|--------------------------------|---------------------------|---------------------------|
| v_1         | `any`                          |                           | left compare              |
| v_2         | `any`                          |                           | right compare             |
| [strict]    | `boolean`                      | `false`                   | `true` deepStrictEqual    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                 |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos  |

**Example**

```js
// import the compare function.
import { compare } from 'oftypes'

// compare two variable by the type.

console.log( await compare( [ 5 ], [ 5 ] ) )

// yield 'true'

// compare two variable by the type and deepStrictEqual

console.log( await compare( [ 5 ], [ 1685 ], true ) )

// yield 'false'

```

___

- #### error_ type check.

**error_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { error_ } from 'oftypes'

const variable = new ReferenceError('reference not found')

console.log( await error_( variable ) )

// prints true
```

```js
import { error_ } from 'oftypes'

const variable = 'reference not found'

console.log( await error_( variable ) )

// prints false
```

___

- #### function_ type check.

**function_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { function_ } from 'oftypes'

const variable = 10

console.log( await function_( variable ) )

// prints false
```

```js
import { function_ } from 'oftypes'

const variable = () => { console.log( 'I\'m a FUNCTION!' ) }
const resolvers = { true: true, false: false }
const payback = true

const resolved = await function_( variable, resolvers, payback )
resolved[ 1 ]()

// prints I'm a FUNCTION!
```

___

- #### nan_ type check.

**nan_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { nan_ } from 'oftypes'

const variable = 10
const resolvers = { true: 'it is NaN!', false: 'it is not NaN' }

console.log( await nan_( variable, resolvers ) )

// prints it is not NaN!
```

```js
import { nan_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is NaN!', false: 'it is not NaN' }

console.log( await nan_( variable.object, resolvers ) )

// prints it is NaN!
```

___

- #### null_ type check.

**null_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { null_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is null!', false: 'it is not null' }

console.log( await null_( variable, resolvers ) )

// prints it is not null!
```

```js
import { null_ } from 'oftypes'

const variable = { object: null }
const resolvers = { true: 'it is null!', false: 'it is not null' }

console.log( await null_( variable.object, resolvers, payback ) )

// prints it is null!
```

___

- #### number_ type check.

**number_(variable, [resolvers], [payback], [string]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description                             |
|-------------|--------------------------------|---------------------------|-----------------------------------------|
| variable    | `any`                          |                           | Variable to check for                   |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                               |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos                |
| [string]    | `boolean`                      | `true`                    | literal string number are typeof number |

**Example**

```js
import { number_ } from 'oftypes'

const variable = 10
const resolvers = { true: 'it is a number!', false: 'it is not a number' }

console.log( await number_( variable, resolvers ) )

// prints it is a number!
```

```js
import { number_ } from 'oftypes'

const variable = '10'
const resolvers = { true: 'it is a number!', false: 'it is not a number' }

console.log( await string_( variable, resolvers ) )

// prints it is a number!
```

```js
import { number_ } from 'oftypes'

const variable = 'folks'
const resolvers = { true: 'it is a number!', false: 'it is not a number' }

console.log( await number_( variable, resolvers, undefined, false ) )

// prints it is not a number!
```

```js
import { number_ } from 'oftypes'

const variable = 'folks'
const resolvers = { true: 'it is a number!', false: 'it is not a number' }

console.log( await number_( variable, resolvers ) )

// prints it is not a number!
```

___

- #### object_ type check.

**object_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { object_ } from 'oftypes'

const variable = [ 'hello folks!' ]
const resolvers = { true: 'it is an object!', false: 'it is not an object!' }

console.log( await object_( variable, resolvers ) )

// prints it is not an object!
```

```js
import { object_ } from 'oftypes'

const variable = { array1: [ 'hello folks!' ] }
const resolvers = { true: 'it is an object!', false: 'it is not an object!' }

console.log( await object_( variable, resolvers ) )

// prints it is an object!
```

___

- #### promise_ type check.

**promise_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { promise_ } from 'oftypes'

const variable = new Promise( resolve => resolve( 'promise' ) )
console.log( await promise_( variable ) )

// yield true

```

___

- #### resolvers function.

**resolvers(truthy: any, falsy: any) ⇒ `Promise<{true:any, false:any}>` | `{true:any, false:any}`**

It sets the resolvers in the form of an Object -> `{true: any, false: any}`.  
This function is made to simplify the way to pass the resolvers to **oftypes.[type_functions]**.

| Param  | Type  | Default      | Description                                  |
|--------|-------|--------------|----------------------------------------------|
| truthy | `any` | (❗️required) | It sets the true resolver.                   |
| falsy  | `any` | (❗️required) | It sets the false resolver.                  |

**Example**

```js
// import the resolvers function.
import { boolean_, resolvers } from 'oftypes'

// usually the resolvers are set like this, and in case we are resolving many oftypes.[functions]
// we will need to declare many different unique const/let variables with unique name.

const resolvers_as_object = { true: 'true', false: 'false' }
const boolean = 'string'

// instead of passing the argument as an object -> resolvers_as_object
// we directly pass the resolvers function with the two arguments set to 'true' and 'false' respectively
// the resolvers function will return the same things as the resolvers_as_object would do.

console.log( await boolean_( boolean, await resolvers( 'true', 'false' ) ) )

// prints 'false'

```

___

- #### string_ type check.

**string_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { string_ } from 'oftypes'

const variable = 'hello folks!'
const resolvers = { true: 'it is a string!', false: 'it is not a string' }

console.log( await string_( variable, resolvers ) )

// prints it is a string!
```

#### the example ⇩ show how the resolvers' argument can return anything you like

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
if ( fileStat[ 0 ].constructor.name === 'Function' )
    console.log( await fileStat[ 0 ]() )
else
    console.log( fileStat )

// prints the stats object of the file
// change the variable to number = 10, it prints [ 'it is not a string!', 10, { type: 'Number' } ]
// if the file passed to the stat function is not found, it yields the ENOENT exception
```

___

- #### symbol_ type check.

**symbol_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { symbol_ } from 'oftypes'

const variable = Symbol( 'symbol_' )

console.log( await symbol_( variable ) )
// prints true
```

```js
import { symbol_ } from 'oftypes'

const variable = Array(26)

console.log( await symbol_( variable ) )
// prints false
```

___

- #### undefined_ type check.

**undefined_(variable, [resolvers], [payback]) ⇒ `{Promise<boolean|any|[any,any,{type:string}]>` | `boolean` | `any` | `[any,any,{type:string}]}`**

| argument    | type                           | Default                   | Description              |
|-------------|--------------------------------|---------------------------|--------------------------|
| variable    | `any`                          |                           | Variable to check for    |
| [resolvers] | `Object<{true:any,false:any}>` | `{true:true,false:false}` | resolvers                |
| [payback]   | `boolean`                      | `false`                   | `true` to get back infos |

**Example**

```js
import { undefined_ } from 'oftypes'

console.log( await undefined_( undefined ) )

// prints true

```
___

### JetBrains OSS License

___

I want to thank JetBrains to grant me the Open Source Software license for all their products. This opportunity gives me strength to keep on going with my studies and personal project.  
To learn more about this opportunity have a look at [Licenses for Open Source Development - Community Support](https://www.jetbrains.com/community/opensource/).

_Thank you_
