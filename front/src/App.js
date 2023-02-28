import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { UserProvider } from "./context/user-context";
import ThemeContext from "./context/context-theme";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const themeState = useContext(ThemeContext);

  return (
    <UserProvider>
      <main
        className={`min-vh-100 d-flex flex-column ${
          themeState.theme ? "bg-dark" : "bg-white"
        }`}
      >
        <Navbar />
        <Routes />
        <Footer />
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </UserProvider>
  );
}

export default App;
