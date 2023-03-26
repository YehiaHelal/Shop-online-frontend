import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/about/About";
import Faq from "./pages/help/Faq";

import NotFound from "./pages/errorhandling/NotFound";

// layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";

import ItemSearch, { itemSearchLoader } from "./pages/searchBar/ItemSearch";
import Signup, { SignupAction } from "./pages/login/Signup";
import Login, { LoginAction } from "./pages/login/Login";
import Footer from "./pages/footer/Footer";
import Contact, { contactAction } from "./pages/help/Contact";

import Profile, { ProfileAction, ProfileLoader } from "./pages/profile/Profile";

import ReviewForum, {
  ReviewForumAction,
  ReviewForumPageLoader,
} from "./pages/categories/Forums";

import Cart from "./pages/cart/Cart";
import Jackets from "./pages/categories/Jackets";
import Tshirts from "./pages/categories/Tshirts";
import Pants from "./pages/categories/Pants";
import Sneakers from "./pages/categories/Sneakers";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />

      <Route path="signup" element={<Signup />} action={SignupAction} />
      <Route path="login" element={<Login />} action={LoginAction} />
      <Route
        path="profile"
        element={<Profile />}
        loader={ProfileLoader}
        action={ProfileAction}
        errorElement={<NotFound />}
      />

      <Route path="contact" element={<Contact />} action={contactAction} />

      <Route path="jackets" element={<Jackets />} />
      <Route path="tshirts" element={<Tshirts />} />
      <Route path="pants" element={<Pants />} />
      <Route path="sneakers" element={<Sneakers />} />
      <Route
        path="reviewpage"
        element={<ReviewForum />}
        loader={ReviewForumPageLoader}
        action={ReviewForumAction}
        errorElement={<NotFound />}
      />
      <Route
        path=":id"
        element={<ItemSearch />}
        loader={itemSearchLoader}
        errorElement={<NotFound />}
      />

      <Route path="cart" element={<Cart />} />

      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="footer" element={<Footer />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
