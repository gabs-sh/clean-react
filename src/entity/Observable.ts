import { Observer } from "./Observer";

export abstract class Observable {
  protected observers: Observer[];

  constructor() {
    this.observers = [];
  }

  attach(observer: Observer) {
    if (this.observers.some((o) => o.eventName === observer.eventName)) {
      console.log("Observer already attached");
      return;
    }
    this.observers.push(observer);
  }

  notify(eventName: string) {
    for (const observer of this.observers) {
      if (eventName === observer.eventName) {
        observer.cb(this);
      }
    }
  }
}
