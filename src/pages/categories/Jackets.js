import { useEffect } from "react";
import AllItemsOnMainPage from "../../components/AllItemsOnMainPage";
import LeftSideBar from "../../components/LeftSideBar";
import { useFetchItemsContext } from "../../hooks/useFetchItemsContext";
import Footer from "../footer/Footer";
import AllItemsComponent from "./AllItems";

const Jackets = () => {
  const { allItems, dispatcho } = useFetchItemsContext();

  const categoryItemToShow = allItems.slice(21, 30);

  // console.log(categoryItemToShow);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(
        "https://shopapi-e2ti.onrender.com/api/items/"
      );
      const json = await response.json();

      if (response.ok) {
        dispatcho({ type: "FETCHED-ALL", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatcho]);

  // const Itemss = allItems.slice(5, 25);

  return (
    <>
      <div className="home-main-component">
        <AllItemsOnMainPage props={categoryItemToShow} />
      </div>
      <Footer />
    </>
  );
};

export default Jackets;
