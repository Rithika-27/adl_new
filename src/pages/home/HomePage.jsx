import AuthScreen from "./AuthScreen";
import HomeScreen from "./HomeScreen";
import React from 'react'


const HomePage = () => {
	const user= false;

	return <>{user ? <HomeScreen /> : <AuthScreen />}</>;
};
export default HomePage;
