export class Greeter {
  private subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }

  public greet() {
    // tslint:disable-next-line: no-console
    console.log(`Hello ${this.subject}!`);
  }
}
