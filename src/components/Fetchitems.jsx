import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemActions } from "../store/itemSlice";
import { fetchstatusActions } from "../store/fetchStatusSlice";

const Fetchitems = () =>{

   const fetchStatus = useSelector((store) => store.fetchStatus);
   const dispatch = useDispatch();
  //  console.log(fetchStatus);

   useEffect(()=>{
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchstatusActions.markFetchingStarted());

    fetch("https://fakestoreapi.com/products?limit=10",{ signal })
    .then((res) => res.json())
    .then(({ items }) => {
      dispatch(fetchstatusActions.markFetchDone());
      dispatch(fetchstatusActions. markFetchingEndeded());
      dispatch(itemActions.addInitialItems(items));
      //above both are from slice store
       console.log("items fetched", items);

    } );

    return () => {
    controller.abort();
    };
   }, [fetchStatus]);


    return<></>
// no ui so called ad headless component
    
};

export default Fetchitems;