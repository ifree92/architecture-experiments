import { getLogger } from "./logger";
import { Service2 } from "./Service2";
import { Service3 } from "./Service3";

export class Service1 {
  private static instance: Service1;
  private log = getLogger(Service1.name);

  private constructor() {
    this.log('constructor');
  }

  public init() {
    this.log('init');
    Service2.getInstance().doOneMoreThing();
    Service3.getInstance().method1();
  }

  public doMore() {
    this.log('doMore');
    Service2.getInstance().doOneMoreThing();
  }

  public static async create(): Promise<void> {
    if (this.instance) return;
    this.instance = new Service1();
  }

  public static getInstance(): Service1 {
    if (!this.instance) throw new Error('No instance');
    return this.instance;
  }
}