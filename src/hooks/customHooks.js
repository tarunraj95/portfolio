import { useCallback, useEffect, useRef } from 'react';

export const useDidUpdateEffect = (fn, inputs) => {
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
};


export const useCallbackForEvents = (fn, inputs) => {
  const callBackRef = useRef(fn);
  useDidUpdateEffect(() => {
    callBackRef.current = fn;
  }, inputs);
  const callback = useCallback((...arg) => {
    callBackRef.current(...arg);
  }, []);
  return callback;
};
