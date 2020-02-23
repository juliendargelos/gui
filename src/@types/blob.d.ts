interface Blob {
  arrayBuffer(): Promise<ArrayBuffer>
  text(): Promise<string>
  stream(): Promise<ReadableStream>
}
