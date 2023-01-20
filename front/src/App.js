import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import { UserProvider as UserProvider } from "./context/user-context";


//ACÁ IMPORTAS ROUTES

function App() {
	return (
		<UserProvider>
			<Navbar />
			<Routes />
			<Footer />
		</UserProvider>
	)

}

export default App;
