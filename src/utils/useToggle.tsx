import { useState } from "react";

// class useToggle {

//   USETOGGLE(initialState = false) {
//     const [state, setState] = useState<boolean>(initialState);

//     const toggle = (event: React.MouseEvent) => {
//       event.preventDefault();
//       setState((state) => !state)
//     };

//     return [state, toggle];
//   }

//   SHADOW() {
//     return (
//       <>
//         <div>hello world</div>
//       </>
//     )
//   }
// }

const USETOGGLE = (initialState = false): [boolean, () => void, () => void] => {
  const [value, setValue] = useState<boolean>(initialState);

  const toggle = () => {
    setValue(!value);
  };

  const onClose = () => {
    setValue(false);
  }

  return [value, toggle, onClose];
};

export default USETOGGLE;