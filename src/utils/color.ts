type ColorNumber = number
type ColorHex = string
type ColorRGB<Alpha extends boolean = boolean> = string

type ColorArray<Alpha extends boolean = boolean> = Alpha extends true
  ? [number, number, number, number]
  : [number, number, number]

type ColorObject<Alpha extends boolean = boolean> = Alpha extends true
  ? { r: number, g: number, b: number, a: number }
  : { r: number, g: number, b: number }

type UnknownObject = { [key: string]: unknown }
type UnknownArray = unknown[]

export type ColorFormat = 'number' | 'hex' | 'rgb' | 'array' | 'object'

export type Color<
  Format extends ColorFormat | unknown = unknown,
  Alpha extends boolean = boolean
> =
  Format extends 'number' ? ColorNumber :
    Format extends 'hex' ? ColorHex :
      Format extends 'rgb' ? ColorRGB<Alpha> :
        Format extends 'object' ? ColorObject<Alpha> :
          Format extends 'array' ? ColorArray<Alpha> :
            string | number | ColorObject<Alpha> | ColorArray<Alpha>

const formats = ['number', 'hex', 'rgb', 'array', 'object']
const hexPattern = /^\s*#?([a-f\d]{6}|[a-f\d]{3})\s*$/i
const rgbPattern = /^\s*rgb(?:a)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d\.]+)\s*)?\)\s*$/i

function f(value: unknown): number {
  return typeof value === 'number' ? value : parseFloat(value as string)
}

export function isColorFormat(value: unknown): value is ColorFormat {
  return formats.includes(value as string)
}

export function isColorAlpha<
  Format extends ColorFormat | unknown = unknown
>(value: Color<Format> | unknown): value is Color<Format, true> {
  if (value) {
    switch (typeof value) {
      case 'string':
        const match = value.match(rgbPattern)
        return !!(match && match[4])

      case 'object':
        return (
          typeof (value as UnknownArray)[3] === 'number' ||
          typeof (value as UnknownObject).a === 'number'
        )
    }
  }

  return false
}

export function colorAlpha(value: unknown): number {
  if (value) {
    switch (typeof value) {
      case 'string':
        const match = value.match(rgbPattern)
        if (match && match[4]) return parseFloat(match[4])
        break

      case 'object':
        let alpha: number = NaN

        if (typeof (value as UnknownArray)[3] === 'number') {
          alpha = f((value as UnknownArray)[3])
        }

        if (typeof (value as UnknownObject).a === 'number') {
          alpha = f((value as UnknownObject).a)
        }

        if (!isNaN(alpha)) return alpha

        break
    }
  }

  return 1
}

export function colorFormat<
  Fallback extends ColorFormat | undefined = undefined
>(
  value: unknown,
  fallback: Fallback = undefined as Fallback
): ColorFormat | Fallback {
  switch (typeof value) {
    case 'number':
      if (~~value === value && value >= 0 && value <= 16777215) return 'number'
      break

    case 'string':
      if (hexPattern.test(value)) return 'hex'
      if (rgbPattern.test(value)) return 'rgb'
      break

    case 'object':
      if (value) {
        if (
          typeof (value as UnknownObject).r === 'number' &&
          typeof (value as UnknownObject).g === 'number' &&
          typeof (value as UnknownObject).b === 'number'
        ) return 'object'

        if (
          typeof (value as UnknownArray)[0] === 'number' &&
          typeof (value as UnknownArray)[1] === 'number' &&
          typeof (value as UnknownArray)[2] === 'number'
        ) return 'array'
      }
  }

  return fallback
}

export function color<
  Format extends ColorFormat,
  Alpha extends boolean = false
>(
  value: unknown,
  format: Format,
  alpha: Alpha = false as Alpha
): Color<Format, Alpha> {
  let r: number = 0
  let g: number = 0
  let b: number = 0
  let a: number = 1

  switch (typeof value) {
    case 'string':
      let hex = value.match(hexPattern)

      if (hex) {
        let v = hex[1]
        value = parseInt(
          v.length === 6 ? v : `${v[0]}${v[0]}${v[1]}${v[1]}${v[2]}${v[2]}`,
          16
        )
      } else {
        let rgb = value.match(rgbPattern)

        if (rgb) {
          r = parseInt(rgb[1], 10)
          g = parseInt(rgb[2], 10)
          b = parseInt(rgb[3], 10)
          if (rgb[4]) a = parseFloat(rgb[4])
        }

        break
      }

    case 'number':
      r = (value as number) >> 16 & 0xff
      g = (value as number) >> 8 & 0xff
      b = (value as number) & 0xff
      break

    case 'object':
      if (value) {
        if ('r' in value || 'g' in value || 'b' in value || 'a' in value) {
          r = f((value as UnknownObject).r) || 0
          g = f((value as UnknownObject).g) || 0
          b = f((value as UnknownObject).b) || 0
          a = f((value as UnknownObject).a)
        } else {
          r = f((value as UnknownArray)[0]) || 0
          g = f((value as UnknownArray)[1]) || 0
          b = f((value as UnknownArray)[2]) || 0
          a = f((value as UnknownArray)[3])
        }

        if (isNaN(a)) a = 1
      }

      break
  }

  switch (format) {
    case 'number':
      return (r << 16 | g << 8 | b) as Color<Format, Alpha>

    case 'hex':
      return `#${
        (r << 16 | g << 8 | b).toString(16).padStart(6, '0')
      }` as Color<Format, Alpha>

    case 'rgb':
      return (
        alpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`
      ) as Color<Format, Alpha>

    case 'array':
      return (alpha ? [r, g, b, a] : [r, g, b]) as Color<Format, Alpha>

    case 'object':
    default:
      return (alpha ? { r, g, b, a } : { r, g, b }) as Color<Format, Alpha>
  }
}
