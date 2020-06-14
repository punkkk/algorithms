/* tslint:disable:no-console */
import _ from "lodash";

const SEPARATOR_LENGTH = 80;
const ASSIGNMENT_SEPARATOR = _.pad("", SEPARATOR_LENGTH, "-");
const PADDING_CHAR = "_";

export class AssignmentLogger {
  private name: string;
  private timerName: string;

  constructor(name: string) {
    this.name = `ASSIGNMENT [${name}]`;
    this.timerName = `${this.name} DONE WITHIN`;
  }

  start() {
    console.log(ASSIGNMENT_SEPARATOR);
    console.log(_.padEnd(this.name, SEPARATOR_LENGTH, PADDING_CHAR));
    console.time(this.timerName);
  }

  result(result: any) {
    console.log(_.padEnd(`${this.name} RESULT:`, SEPARATOR_LENGTH, PADDING_CHAR));
    console.table(result);
  }

  end() {
    console.timeEnd(this.timerName);
  }
}
