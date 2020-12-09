import { AssignmentLogger } from "./assignment-logger";

export type IAssignment = (...args: any[]) => any;

export class Assignment {
  private assignment: IAssignment;
  private logger: AssignmentLogger;

  constructor(name: string, assignment: IAssignment) {
    this.assignment = assignment;
    this.logger = new AssignmentLogger(name);
  }

  async do(...args: any[]) {
    this.logger.start();

    const result = await this.assignment(args);
    this.logger.result(result);

    this.logger.end();

    return result;
  }
}
