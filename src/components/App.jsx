import "../App.css";
import Footer from "./footer";
import Navbar from "./navbar";

import { Route, Routes } from "react-router-dom";

// import { ToastContainer } from "react-toastify";

import MyContacts from "./myContacts";
import EditContact from "./editContact";
import CreateContact from "./createContact";
import About from "./about";
import Home from "./home";
import DeleteContact from "./deleteContact";
function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* <ToastContainer /> */}
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/my-contacts" element={<MyContacts />}></Route>
          <Route path="/create-contact" element={<CreateContact />}></Route>
          <Route path="/my-contacts/edit/:id" element={<EditContact />} />{" "}
          <Route path="/my-contacts/delete/:id" element={<DeleteContact />} />{" "}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
