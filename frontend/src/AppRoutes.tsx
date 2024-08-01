import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./leyouts/leyout";
import HomePage from "./pages/HomePage";

const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Layout>
                        <HomePage />
                    </Layout>
                }
            />
            <Route
                path="/user-profile"
                element={<span>HOME PAGE-PROFIL</span>}
            />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRoutes;
