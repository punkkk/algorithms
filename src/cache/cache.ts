import NodeCache from "node-cache";

import {ICache, ISeconds} from "./types";

export class Cache <T> implements ICache <T> {
  private cache: NodeCache;
  private cacheTime: ISeconds;

  constructor ({cacheTime = 0}) {
    this.cache = new NodeCache();
    this.cacheTime = cacheTime;
  }

  get(key: string)  {
    return this.cache.get<T>(key);
  }

  set(key: string, value: T) {
    return this.cache.set<T>(key, value, this.cacheTime);
  }
}
