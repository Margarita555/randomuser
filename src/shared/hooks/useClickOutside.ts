import { useEffect, RefObject } from 'react';

type Handler = (event: MouseEvent) => void;

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
): void {
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (!ref?.current || ref?.current.contains(e.target as Node)) {
        return;
      }
      handler(e);
    }
    document.addEventListener('mousedown', e => onClickOutside(e));
    return () =>
      document.removeEventListener('mousedown', e => onClickOutside(e));
  });
}

export default useOnClickOutside;
