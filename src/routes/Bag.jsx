import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSumarry from "../components/BagSumarry";


const Bag = () =>{

const bagItems= useSelector(state => state.bag);
const items= useSelector(state => state.items);
const finalitems = items.filter(item => {
  const itemIndex = bagItems.indexOf(item.id);
  return itemIndex >= 0;
})

    return (
     
    <main>
      <div className="bag-page">

        <div className="bag-items-container">
        {finalitems.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <BagSumarry></BagSumarry>
      
      </div>
    </main>
   
    );
};

export default Bag;