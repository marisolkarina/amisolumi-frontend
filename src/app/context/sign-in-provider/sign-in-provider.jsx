import { useState } from "react";
import { SignInContext } from "./sign-in-context";
import { postSignIn } from "../../../features/auth/services/post-sign-in";

export function SignInProvider({ children }) {

    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });
    const isAuthenticated = !!user?.token;

    const login = async ({ username, password }) => {

        const response = await postSignIn({
            username,
            password
        });

        setUser(response.data);

        localStorage.setItem("user", JSON.stringify(response.data));

        return user;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return (
        <SignInContext.Provider
            value={{
                user,
                login,
                logout,
                isAuthenticated
            }}
        >
            {children}
        </SignInContext.Provider>
    );
}