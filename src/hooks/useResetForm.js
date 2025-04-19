import { useEffect } from "react";

export default function useResetForm(stateToReset, reset) {
  useEffect(() => {
    if (stateToReset) {
      reset();
    }
  }, [stateToReset, reset]);
}
