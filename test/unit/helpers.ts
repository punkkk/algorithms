import Constructable = jest.Constructable;
import {MaybeMockedDeep} from "ts-jest/dist/util/testing";

export const stubInstance = <T extends Constructable>(Class: T): MaybeMockedDeep<T> => {
  const mocked: any = {};

  // tslint:disable-next-line:forin
  for (const method of Object.getOwnPropertyNames(Class.prototype).filter((name) => name !== "constructor")) {
    // tslint:disable-next-line:no-console
    console.log(method);
    mocked[method] = jest.fn();
  }

  // tslint:disable-next-line:no-console
  console.log(mocked);

  return mocked as MaybeMockedDeep<T>;
};
