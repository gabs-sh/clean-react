import { useEffect, useState } from "react";
import { Observer } from "../entity/Observer";
import { Observable } from "../entity/Observable";

interface ReactiveClassConstructor<T> {
  new (): T;
}

export function useReactiveClass<T extends Observable>(
  t: ReactiveClassConstructor<T>
) {
  const [state, setState] = useState<T>(new t());

  useEffect(() => {
    state.attach(
      new Observer("change", (data: T) => {
        // console.log(data);

        // @ts-ignore
        setState(new t(data.getProps()));
      })
    );
  }, [state, t]);

  return { state };
}
