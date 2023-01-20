import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Searcher from "./components/Searcher";
import { Route, Routes } from "react-router-dom";
import Detalle from "./routes/detalle";
import Main from "./routes/main"




//ACÁ IMPORTAS ROUTES

function App() {
	return (
		<>
			<Navbar />
			<Searcher/>
			<Routes>
				<Route path="/" element={<Main/>}></Route>
				<Route path="detalle" element={<Detalle />}></Route>
				
			</Routes>
			
			<Footer />
		</>
	);
}

export default App;
