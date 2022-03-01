import oftypes from './oftypes.js'
import { array_, array_Symbol } from './oftypes/array_.js'
import { bigint_, bigint_Symbol } from './oftypes/bigint_.js'
import { boolean_, boolean_Symbol } from './oftypes/boolean_.js'
import { buffer_, buffer_Symbol } from './oftypes/buffer_.js'
import { function_, function_Symbol } from './oftypes/function_.js'
import { nan_, nan_Symbol } from './oftypes/nan_.js'
import { null_, null_Symbol } from './oftypes/null_.js'
import { number_, number_Symbol } from './oftypes/number_.js'
import { object_, object_Symbol } from './oftypes/object_.js'
import { oftype_, oftype_Symbol } from './oftypes/oftype_.js'
import { promise_, promise_Symbol } from './oftypes/promise_.js'
import { string_, string_Symbol } from './oftypes/string_.js'
import { symbol_, symbol_Symbol } from './oftypes/symbol_.js'
import { undefined_, undefined_Symbol } from './oftypes/undefined_.js'

// - extends
await import( './extends/String/conversion/toBuffer.js' )
await import( './extends/String/conversion/toNumber.js' )
// - stdout text decoration
await import( './extends/String/decoration/strong.js' )
await import( './extends/String/decoration/underline.js' )
// - stdout text colors
await import( './extends/String/color/fg/color.js' )
await import( './extends/String/color/fg/black.js' )
await import( './extends/String/color/fg/cyan.js' )
await import( './extends/String/color/fg/green.js' )
await import( './extends/String/color/fg/magenta.js' )
await import( './extends/String/color/fg/red.js' )
await import( './extends/String/color/fg/white.js' )
await import( './extends/String/color/fg/yellow.js' )
// - stdout background colors
await import( './extends/String/color/bg/color.js' )
await import( './extends/String/color/bg/black.js' )
await import( './extends/String/color/bg/cyan.js' )
await import( './extends/String/color/bg/green.js' )
await import( './extends/String/color/bg/magenta.js' )
await import( './extends/String/color/bg/red.js' )
await import( './extends/String/color/bg/white.js' )
await import( './extends/String/color/bg/yellow.js' )

export const oftypes__ = oftypes
export const array__ = array_[ array_Symbol ]
export const boolean__ = boolean_[ boolean_Symbol ]
export const bigint__ = bigint_[ bigint_Symbol ]
export const buffer__ = buffer_[ buffer_Symbol ]
export const function__ = function_[ function_Symbol ]
export const nan__ = nan_[ nan_Symbol ]
export const null__ = null_[ null_Symbol ]
export const number__ = number_[ number_Symbol ]
export const object__ = object_[ object_Symbol ]
export const oftype__ = oftype_[ oftype_Symbol ]
export const promise__ = promise_[ promise_Symbol ]
export const string__ = string_[ string_Symbol ]
export const symbol__ = symbol_[ symbol_Symbol ]
export const undefined__ = undefined_[ undefined_Symbol ]
