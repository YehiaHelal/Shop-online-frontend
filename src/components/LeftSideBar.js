import { Link } from "react-router-dom";

const LeftSideBar = () => {
  return (
    <div className="left-side-bar">
      <div className="left-side-bar-categories">
        <p>Items Categories: </p>
        <p>
          <Link to={"https://shop-online-frontend-ten.vercel.app/"}>
            All Items
          </Link>
        </p>
        <p>
          <Link to={"https://shop-online-frontend-ten.vercel.app/pizza"}>
            Pizza
          </Link>
        </p>
        <p>
          <Link to={"https://shop-online-frontend-ten.vercel.app/pasta"}>
            Pasta
          </Link>
        </p>
        <p>
          <Link to={"https://shop-online-frontend-ten.vercel.app/hamburger"}>
            Hamburger
          </Link>
        </p>
        <p>
          <Link to={"https://shop-online-frontend-ten.vercel.app/chicken"}>
            Chicken
          </Link>
        </p>
      </div>

      <p></p>
      <div className="left-side-bar-branches">
        <div>Availability in our Branch:</div>
        <p>Our Branches</p>
        <p>Branche one</p>
        <p>Branche two</p>
        <p>Branche three</p>
        <p>Branche four</p>
        <p>Branche five</p>
        <p>Branche six</p>
        <p>Branche seven</p>
        <p>Branche eight</p>
      </div>
    </div>
  );
};

export default LeftSideBar;
