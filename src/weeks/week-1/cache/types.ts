export interface ICache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => boolean;
}

export type ISeconds = number;
