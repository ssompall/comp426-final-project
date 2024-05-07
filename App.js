import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/header.js";
import AllRecipeCards from "./components/recipe-cards/all-recipe-cards";
import Notification from "./components/notifications/notification.js";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  const notification = useSelector((state) => state.UI.notification);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header></Header>
      <AllRecipeCards />
    </Fragment>
  );
}

export default App;
