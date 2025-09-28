export const Button = ({ text, width = 240, height = 40 }) => {
  // const text = "Начать";
  return <button
    className="button"
    style={{ width: width + "px", height: height + "px" }}
  >
    {text}
  </button>
};

// export const Button = ({children}) => {
//   // const text = "Начать";
//   return <button className="button">{children}</button>
// };
