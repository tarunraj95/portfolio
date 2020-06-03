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


export const usePrevious = (value) => {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}