import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const itemsId = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const bagItems = items.filter((item) => {
    const itemIndex = itemsId.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <div className="bag-page">
      <div className="bag-items-container">
       {bagItems.map((item) => <BagItem item={item}/>)}
      </div>
      <div className="bag-summary">
        <BagSummary />
      </div>
    </div>
  )
};
export default Bag;
