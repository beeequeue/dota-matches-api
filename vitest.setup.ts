import { Crypto } from "@peculiar/webcrypto"

// @ts-ignore: missing type
globalThis.crypto = new Crypto()
