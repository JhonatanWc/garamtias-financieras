import { useState } from "react";

function useModal() {
  const [visible, setVisible] = useState(false);
  function toggle() {
    setVisible(!visible);
  }
  return [ toggle, visible];
}

export default useModal;
