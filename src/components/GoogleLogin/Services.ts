import {signInWithPopup, signOut} from "firebase/auth"
import {auth, provider} from "../../firebaseConfig"

export const LoginGoogle = async () => {
    try{
        const usuario = await signInWithPopup(auth,provider);
        return usuario.user;
    }catch(error){
        console.error("[404] Erro fudido, desligue seu pc imediatamente", error);
        throw error;
    }
}

export const LogoutGoogle = async () => {
    try{
        await signOut(auth);
    }catch(error){
        console.error("[404] Erro fudido, desligue seu pc imediatamente", error);
        throw error;
    }
}