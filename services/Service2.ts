import { getLogger } from "./logger";
import { Service3 } from "./Service3";

export class Service2 {
  private static instance: Service2;
  private log = getLogger(Service2.name);

  private constructor() {
    this.log('constructor');
  }

  public doOneMoreThing() {
    this.log('doOneMoreThing');
    Service3.getInstance().method2();
    return 'something';
  }

  public static async create(): Promise<void> {
    if (this.instance) return;
    this.instance = new Service2();
  }

  public static getInstance(): Service2 {
    if (!this.instance) throw new Error("No instance");
    return this.instance;
  }
}
