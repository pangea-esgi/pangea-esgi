import { Header, Footer } from "@pangea-esgi/design_system/src";
import { Route, Routes } from "react-router-dom";
import MenuPage from "./pages/Menu";
import ContactPage from "./pages/Contact";
import FormInput from '@pangea-esgi/design_system/src/_components/molecules/formInput';
import UploadInput from '@pangea-esgi/design_system/src/_components/molecules/uploadInput';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Header href="/" />
      <Footer />
    </>
  );
}
