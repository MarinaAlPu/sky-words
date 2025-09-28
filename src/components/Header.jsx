import { Button } from "./Button";


export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">SkyWords</div>
      <div className="header__actions">
        {/* <button style={{ width: 100 }} className="header__button"> */}
        {/* Сменить тему
      </button> */}
      {/* <Button text="Сменить тему"/> */}
      <Button>Сменить тему</Button>
      {/* <button className="header__button">Закрыть</button> */}
      {/* используем props */}
      {/* <Button text="Закрыть"/> */}
      {/* используем children */}
      <Button>Выйти</Button>
    </div>
    </header >
  );
};
