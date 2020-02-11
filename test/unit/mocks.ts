import NodeCache from "node-cache";

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
