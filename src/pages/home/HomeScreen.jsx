import { useAuthStore } from "../../store/authUser";
const HomeScreen=()=>{
	const{ logout } =useAuthStore();
	return (
	<div>Home screen
	<button onClick={logout}>logout</button>	
	</div>
	);
}
export default HomeScreen