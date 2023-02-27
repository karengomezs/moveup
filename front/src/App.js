import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { UserProvider } from "./context/user-context";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserProvider>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <Routes />
        <Footer />
      </div>
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
