import { Link, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./views/Signup";
import Login from "./views/Login";
import Dashbourd from "./views/Dashbourd";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Users from "./views/Users";
import UserForm from "./views/UserForm";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/dashbourd" element={<Dashbourd />} />
                    <Route path="/" element={<Users />} />
                    <Route path="/users" element={<Users />}>
                        <Route
                            path="/users/new"
                            element={<UserForm key="userCreate" />}
                        />
                        <Route
                            path="/users/:id"
                            element={<UserForm key="userUpdate" />}
                        />
                    </Route>
                </Route>
                <Route path="/" element={<GuestLayout />}>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
