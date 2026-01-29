export {}

declare global {
  interface Response {
    json(): Promise<unknown>
  }

  interface JSON {
    parse(
      text: string,
      reviver?: (this: unknown, key: string, value: unknown) => unknown,
    ): unknown
  }
}
