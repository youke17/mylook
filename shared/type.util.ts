export type OmitNever<T> = { [K in keyof T as T[K] extends never ? never : K]: T[K] }
export type UnionToIntersection<U> =
  (U extends any ? (x: U) => void : never) extends ((x: infer I) => void) ? I : never

export type MaybePromise<T> = Promise<T> | T

export function typeSafeObjectFromEntries<
  const T extends ReadonlyArray<readonly [PropertyKey, unknown]>,
>(entries: T): { [K in T[number]as K[0]]: K[1] } {
  return Object.fromEntries(entries) as { [K in T[number]as K[0]]: K[1] }
}

export function typeSafeObjectEntries<T extends Record<PropertyKey, unknown>>(obj: T): { [K in keyof T]: [K, T[K]] }[keyof T][] {
  return Object.entries(obj) as { [K in keyof T]: [K, T[K]] }[keyof T][]
}

export function typeSafeObjectKeys<T extends Record<PropertyKey, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[]
}

export function typeSafeObjectValues<T extends Record<PropertyKey, unknown>>(obj: T): T[keyof T][] {
  return Object.values(obj) as T[keyof T][]
}
