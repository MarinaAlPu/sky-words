import { words } from "../mock/data"
import { Card } from "./Card"
import { CardLoader } from "./CardLoader"


export const Column = ({ title, loading }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {words
          .filter((item) => item.status === title)
          .map((item, i) => loading ? <CardLoader key={i} /> : <Card item={item} key={i}/>)
        }
      </div>
    </div>
  );
};
