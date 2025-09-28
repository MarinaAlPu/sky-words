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
        {/* <Button className="header__actions_change-theme">Сменить тему</Button> */}
        <Button width={51} height={24} text="тема" />
        {/* <button className="header__button">Закрыть</button> */}
        {/* используем props */}
        {/* <Button text="Закрыть"/> */}
        {/* используем children */}
        {/* <Button className="header__actions_exit">Выйти</Button> */}
        <Button width={89} style="background-color: #C5C5C5;" text="Выйти" />
      </div>
    </header >
  );
};
