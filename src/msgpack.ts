/* eslint-disable import/no-duplicates */
import { pack } from "msgpackr/pack"
import { unpack } from "msgpackr/unpack"

export const encode = <T = unknown>(data: T) => pack(data) as ArrayBuffer

export const decode = async <T>(data: Response | R2ObjectBody | Uint8Array) => {
  if (typeof (data as Response).arrayBuffer === "function") {
    data = new Uint8Array(await (data as Response).arrayBuffer())
  }

  return unpack(data as Uint8Array) as T
}
