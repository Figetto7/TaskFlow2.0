import {  useState, useEffect} from "react";

export default function useDebouncedSearch({  value, delay}: { value: string; delay: number; }) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(()=>{
    const timer = setTimeout(() =>{ setDebouncedValue(value) }, delay);
    return () => clearTimeout(timer);
  },[ value, delay ]);

  return debouncedValue;
}