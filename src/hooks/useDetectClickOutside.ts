import { RefObject, useEffect } from 'react';

export default function useDetectClickOutside(
  ref: RefObject<Element>,
  action: Function
) {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref && ref.current && !ref.current.contains(event.target as Node)) {
      action();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
}
