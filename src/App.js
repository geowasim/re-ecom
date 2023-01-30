import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/Navigation/Navigation.component";
import SignIn from "./sign-in/sign-in.component";

function Shop() {
  return <h1>Shop page</h1>;
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

//lesson 4 download sass
