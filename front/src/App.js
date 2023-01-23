import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { UserProvider } from "./context/user-context";


//ACÁ IMPORTAS ROUTES

function App() {
	return (
		<UserProvider>
			<div className="min-vh-100 d-flex flex-column">
				<Navbar />
				<Routes />
				<Footer />
			</div>
		</UserProvider>
	)

}

export default App;
