/* tslint:disable:no-console */
import {Greeter} from "./Greeter";
import {Cache} from "./cache";
import {SimpleSum} from "./multiplication/simple-sum";
import {SimpleMultiplier} from "./multiplication/simple-multiplier";
import {MergeSort} from "./sort";
import {Inversions} from "./inversions-count";

const greeter = new Greeter("world");

greeter.greet();

const sumCache = new Cache<string>({cacheTime: 10});
const productCache = new Cache<string>({cacheTime: 10});
const adder = new SimpleSum({cache: sumCache});
const multiplier = new SimpleMultiplier({cache: productCache, adder});

const f = "3141592653589793238462643383279502884197169399375105820974944592";
const s = "2718281828459045235360287471352662497757247093699959574966967627";

console.log(multiplier.product(f, s));

const mergeSort = new MergeSort<number>();
console.log(mergeSort.sort([1, 5, 1, 3, 2, 9, 10, -1], 8));
console.log(mergeSort.sort([10, 9, 8, 7, 6, 5, 4, 3, 2], 9));

const inversion = new Inversions<number>();

console.log(inversion.count([1, 3, 5, 2, 4, 6], 6));
console.log(inversion.count([6, 5, 4, 3, 2, 1], 6)); // (n * ( n - 1 )) / 2
