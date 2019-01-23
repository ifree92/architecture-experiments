import { Service1 } from "./services/Service1";
import { Service2 } from "./services/Service2";
import { Service3 } from "./services/Service3";

export async function app() {
  await Service1.create();
  await Service2.create();
  await Service3.create();

  Service1.getInstance().init();
}