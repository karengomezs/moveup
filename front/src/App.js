import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { LoginProvider } from "./context/login-context";


//ACÁ IMPORTAS ROUTES

function App() {
	return (
		<LoginProvider>
			<Navbar />
			<Routes />
			<Footer />
		</LoginProvider>
	)

}

export default App;
