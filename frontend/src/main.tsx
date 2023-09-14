import React from "react";
import ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./assets/index.css";
import HomeScreen from "./screens/HomeScreen.tsx";
import FactScreen from "./screens/FactScreen.tsx";
import LoginScreen from "./screens/LoginScreen.tsx";
import RegisterScreen from "./screens/RegisterScreen.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
import AdminRoute from "./components/AdminRoute.tsx";
import FactListScreen from "./screens/FactListScreen.tsx";
import UserListScreen from "./screens/UserListScreen.tsx";
import CreateFactScreen from "./screens/CreateFactScreen.tsx";
import EditFactScreen from "./screens/EditFactScreen.tsx";
import UserEditScreen from "./screens/UserEditScreen.tsx";
import {HelmetProvider} from "react-helmet-async"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}>
			<Route
				index={true}
				path="/"
				element={<HomeScreen />}
			/>
			<Route
				path="/search/:keyword"
				element={<HomeScreen />}
			/>
			<Route
				path="/search/:keyword/page/:pageNumber"
				element={<HomeScreen />}
			/>
			<Route
				path="/page/:pageNumber"
				element={<HomeScreen />}
			/>
			<Route
				path="/fact/:id"
				element={<FactScreen />}
			/>
			<Route
				path="/login"
				element={<LoginScreen />}
			/>
			<Route
				path="/register"
				element={<RegisterScreen />}
			/>

			<Route
				path=""
				element={<PrivateRoute />}>
				// put whatever paths you want to be private here
				<Route
					path="/profile"
					element={<ProfileScreen />}
				/>
				<Route
					path="/fact/create"
					element={<CreateFactScreen />}
				/>
				<Route
					path="/fact/:id/edit"
					element={<EditFactScreen />}
				/>
			</Route>
			<Route
				path=""
				element={<AdminRoute />}>
				// put whatever paths you want to be admin only here
				<Route
					path="/admin/factlist"
					element={<FactListScreen />}
				/>
				<Route
					path="/admin/userlist"
					element={<UserListScreen />}
				/>
				<Route
					path="/admin/factlist/page/:pageNumber"
					element={<FactListScreen />}
				/>
				<Route
					path="/admin/userlist/page/:pageNumber"
					element={<UserListScreen />}
				/>
				<Route
					path="/admin/user/:id/edit"
					element={<UserEditScreen />}
				/>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HelmetProvider>
			<Provider store={store}>
				<RouterProvider router={router} />
			</Provider>
		</HelmetProvider>
	</React.StrictMode>
);
