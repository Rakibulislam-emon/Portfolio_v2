import { Outlet } from "react-router";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/Footer";

export default function App() {
  return (
     <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
