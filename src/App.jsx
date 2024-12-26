import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage";

function App(){
	
	return (
		<>
		
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/login' element={ <LoginPage /> } />
				<Route path='/signup' element={ <SignUpPage /> } />
				
			</Routes>
			
		</>
	
	);
}

export default App;



// import { Navigate, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/home/HomePage";
// import LoginPage from "./pages/LoginPage.jsx";
// import SignUpPage from "./pages/SignUpPage";
// import Footer from "./components/Footer";
// import { Toaster } from "react-hot-toast";
// import { useAuthStore } from "./store/authUser";
// function App(){
// 	const { user, isCheckingAuth, authCheck } = useAuthStore();
// 	console.log("auth user is here:",user);
// 	useEffect(() => {
// 		authCheck();
// 	}, [authCheck]);
// 	return (
// 		<>
		
// 			<Routes>
// 				<Route path='/' element={<HomePage />} />
// 				<Route path='/login' element={!user ? <LoginPage /> : <Navigate to={"/"} />} />
// 				<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to={"/"} />} />
				
// 			</Routes>
// 			<Footer />
// 			<Toaster /> 
// 		</>
	
// 	);
// }

// export default App;
