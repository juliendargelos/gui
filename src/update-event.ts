export class UpdateEvent<Value = unknown> extends Event {
  public readonly value: Value
  public readonly previous: Value

  constructor(value: Value, previous: Value) {
    super('update', { composed: true })
    this.value = value
    this.previous = previous
  }
}
