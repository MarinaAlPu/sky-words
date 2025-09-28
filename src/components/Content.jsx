import { Button } from "./Button"
import { Column } from "./Column"
import { Loader } from "./Loader";


export const Content = ({ loading }) => {
  return (
    <div className="container">
      <div>
        {["Новое", "Впроцессе", "Выучено"].map((title, i) => {
          <Column loading={loading} title={title} key={i} />
        })}
      </div>
      <div>
        <div>
          {loading ? <Loader /> : <Button type="secondary" text="Добавить слово" />}
          {loading ? <Loader /> : <Button type="secondary" text="Добавить тему" />}
        </div>
        {loading ? <Loader /> : <Button type="secondary" text="Начать тренировку" />}
      </div>
    </div>
  );
};