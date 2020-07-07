export class Job {
  static createFromString(str: string) {
    const [weight, length] = str.split(" ").map((s) => parseInt(s, 10));

    return new Job(weight, length);
  }
  constructor(public weight: number, public length: number) {}
}
