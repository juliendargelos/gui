export function upCaseFirst(string: string): string {
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

export function joinCamelCased(
  string: string,
  separator: string
): string {
  return string
    .replace(/([^A-Z\d])([A-Z\d]+)/g, `$1${separator}$2`)
    .toLowerCase()
}

export function humanize(string: string): string {
  return upCaseFirst(joinCamelCased(`${string}`, ' ')).replace(/[-_\s]+/g, ' ')
}

export function optionalString(value: unknown): string {
  return value === undefined ? '' : `${value}`
}
