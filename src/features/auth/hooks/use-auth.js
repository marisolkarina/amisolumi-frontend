import { useContext } from "react";
import { SignInContext } from "../../../app/context/sign-in-provider/sign-in-context";

export function useAuth() {
    return useContext(SignInContext);
}