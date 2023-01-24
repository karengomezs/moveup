import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Routes from "./routes/routes";
import Searcher from "./components/searcher";
import { UserProvider } from "./context/user-context";




//ACÁ IMPORTAS ROUTES

function App() {
	return (
		<UserProvider>
			<Navbar />
			<Searcher/>
			<Routes />
			<Footer />
		</UserProvider>
	)

}

export default App;
