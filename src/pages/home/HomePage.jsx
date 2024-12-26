import { useAuthStore } from "../../store/authUser";
import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import React from 'react'

const HomePage = () => {
  return (
	<div className='hero-bg h-screen'>HomePage</div>
  )
}

export default HomePage


// const HomePage = () => {
// 	const { user } = useAuthStore();

// 	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
// };
// export default HomePage;
