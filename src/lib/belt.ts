import SHA256 from "./bcrypto/sha256";

export function sha256(data: Uint8Array) {
  return new SHA256().init().update(data).final();
}
export function sha256hmac(key: Uint8Array, message: Uint8Array) {
  return SHA256.hmac().init(key).update(message).final();
}
