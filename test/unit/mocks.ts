import NodeCache from "node-cache";
import Mock = jest.Mock;

export const mockNodeCache = () => {
  jest.mock("node-cache");

  const mockedImplementation = {
    get: jest.fn(),
    set: jest.fn(),
  };

  // @ts-ignore
  NodeCache.mockImplementation(() => mockedImplementation);

  return mockedImplementation;
};

export const mockCache = (): Mock => {
  const mockedImplementation = {
    get: jest.fn(),
    set: jest.fn(),
  };

  return jest.fn().mockImplementation(() => mockedImplementation);
};
