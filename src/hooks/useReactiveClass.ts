import { useEffect, useState } from "react";
import { ReactiveClass } from "../entity/TodoList";
import { Observer } from "../entity/Observer";

interface ReactiveClassConstructor<K, T> {
  new (data: K): T;
}

export function useReactiveClass<K, T extends ReactiveClass<K>>(
  t: ReactiveClassConstructor<K, T>
) {
  const [state, setState] = useState<T>(new t({} as K));

  useEffect(() => {
    state.attach(
      new Observer("change", (data: K) => {
        console.log(data);
        // setState(new t(data));
      })
    );
  }, [state, t]);

  return { state };
}
