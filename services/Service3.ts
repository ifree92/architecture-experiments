import { getLogger } from "./logger";

export class Service3 {
  private static instance: Service3;
  private log = getLogger(Service3.name);

  private constructor() {
    this.log('constructor');
  }

  public method1() {
    this.log('method1');
  }

  public method2() {
    this.log('method2');
    this.method1();
  }

  public static async create(): Promise<void> {
    if (this.instance) return;
    this.instance = new Service3();
  }

  public static getInstance(): Service3 {
    if (!this.instance) throw new Error("No instance");
    return this.instance;
  }
}
