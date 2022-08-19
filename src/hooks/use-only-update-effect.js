import { useEffect, useRef } from "react";

const useOnlyOnUpdateEffect = (func, deps) => {
  const initial = useRef(false);

  useEffect(() => {
    if (initial.current) func();
    else initial.current = true;
  }, deps);
};

export default useOnlyOnUpdateEffect;