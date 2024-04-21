import Items from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <div className="items-container">
      {items.map((item) => (
        <Items key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Home;
