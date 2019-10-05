import { useEffect, useRef } from "react";

/*
USAGE:
const { prop1, prop2 } = props
const prevAmount = usePrevious({rprop1, prop2});
useEffect(() => {
  if(prevAmount.prop1 !== prop1) {
*/
export const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
