/*! wp-common. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

const hash = crypto.subtle.digest.bind(crypto.subtle, "sha-1")

const textEncoder = new TextEncoder()
const alphabet = "0123456789abcdef"
const encodeLookup: string[] = []
const decodeLookup: number[] = []

for (let i = 0; i < 256; i++) {
  encodeLookup[i] = alphabet[(i >> 4) & 0xf] + alphabet[i & 0xf]
  if (i < 16) {
    if (i < 10) {
      decodeLookup[0x30 + i] = i
    } else {
      decodeLookup[0x61 - 10 + i] = i
    }
  }
}

export const sha1 = (buffer: ArrayBuffer | ArrayBufferView) => hash(buffer).then(toUint8)

const text2arr = (input: string) => textEncoder.encode(input)

/** Convert anything to Uint8Array without a copy */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toUint8 = (x: any) =>
  x instanceof ArrayBuffer
    ? new Uint8Array(x)
    : ArrayBuffer.isView(x)
    ? x instanceof Uint8Array && x.constructor.name === Uint8Array.name
      ? x
      : new Uint8Array(x.buffer, x.byteOffset, x.byteLength)
    : text2arr(x)

export const arr2hex = (array: Uint8Array) => {
  const { length } = array
  let string = ""
  let i = 0
  while (i < length) {
    string += encodeLookup[array[i++]]
  }
  return string
}
