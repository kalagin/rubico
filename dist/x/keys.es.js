/**
 * rubico v2.3.0
 * https://github.com/a-synchronous/rubico
 * (c) 2019-2023 Richard Tong
 * rubico may be freely distributed under the MIT license.
 */

const objectKeys = Object.keys

const keys = object => object == null ? []
  : typeof object.keys == 'function' ? [...object.keys()]
  : objectKeys(object)

export default keys
