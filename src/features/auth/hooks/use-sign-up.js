import { postSignUp } from "../services/post-sign-up";

export function useSignUp() {

    async function signUp(data) {

        await postSignUp(data);

    }

    return {
        signUp
    };

}