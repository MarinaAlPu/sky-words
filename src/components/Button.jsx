// export const Button = ({text}) => {
//   // const text = "Начать";
//   return <button className="button">{text}</button>
// };

export const Button = ({children}) => {
  // const text = "Начать";
  return <button className="button">{children}</button>
};
