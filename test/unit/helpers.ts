import Constructable = jest.Constructable;
import MockedFunction = jest.MockedFunction;

export type IMocked<T extends {prototype: any}> = {
  [P in keyof T["prototype"]]: T[P] extends (...args: any) => any ? MockedFunction<T[P]> : T[P];
};

export const stubInstance = <T extends Constructable>(Class: T): IMocked<T> => {
  const mocked: any = {};

  // tslint:disable-next-line:forin
  for (const method of Object.getOwnPropertyNames(Class.prototype).filter((name) => name !== "constructor")) {
    mocked[method] = jest.fn();
  }

  return mocked as IMocked<T>;
};
