import { useSnapshot } from "valtio";
import state from "../store";
import { getContrastingColor } from "../config/helpers";

function CustomButton({ type, title, handleClick, customStyles }) {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled")
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    else if (type === "outline")
      return {
        borderWidth: "1px",
        borderColor: snap.color,
        color: getContrastingColor(snap.color),
      };
  };
  return (
    <button
      className={`py-1.2 flex-1 rounded-md px-2 ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
}

export default CustomButton;
