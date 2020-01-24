import {Greeter} from "./Greeter";
import {Cache} from "./cache";
import {SimpleSum} from "./multiplication/simple-sum";
import {SimpleMultiplier} from "./multiplication/simple-multiplier";

const greeter = new Greeter("world");

greeter.greet();

const sumCache = new Cache<string>({cacheTime: 10});
const productCache = new Cache<string>({cacheTime: 10});
const adder = new SimpleSum({cache: sumCache});
const multiplier = new SimpleMultiplier({cache: productCache, adder});

const f = '3141592653589793238462643383279502884197169399375105820974944592';
const s = '2718281828459045235360287471352662497757247093699959574966967627';

console.log(multiplier.product(f, s));
