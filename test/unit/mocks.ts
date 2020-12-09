import NodeCache from "node-cache";
import Mock = jest.Mock;
import Mocked = jest.Mocked;

export const mockNodeCache = () => {
  jest.mock("node-cache");

  const mockedImplementation = {
    get: jest.fn(),
    set: jest.fn(),
  };

  (<Mocked<any>>NodeCache).mockImplementation(() => mockedImplementation);

  return mockedImplementation;
};

export const mockCache = (): Mock => {
  const mockedImplementation = {
    get: jest.fn(),
    set: jest.fn(),
  };

  return jest.fn().mockImplementation(() => mockedImplementation);
};
