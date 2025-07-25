import drizzle from "../assets/img/drizzle.png";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<h1>American Drizzle</h1>
			<p>
				<img src={drizzle} />
			</p>
		</div>
	);
};
