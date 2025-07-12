import { Outlet } from "react-router";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
    <div className="text-2xl font-bold">
      <Header/>
      <Outlet />
      <Footer/>
    </div>
  );
}
