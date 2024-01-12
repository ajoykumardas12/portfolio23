// exceptionRef ensures ignoring events on exception element outside of ref
import { RefObject, useEffect } from "react";

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  exceptionElementRef: RefObject<HTMLElement>,
  handler: () => void
) => {
  useEffect(() => {
    const listener: EventListener = (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        !exceptionElementRef.current ||
        exceptionElementRef.current.contains(event.target as Node)
      ) {
        return;
      }

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, exceptionElementRef, handler]);
};

export default useOnClickOutside;
