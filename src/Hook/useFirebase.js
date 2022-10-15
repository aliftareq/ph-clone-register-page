import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app)


const googleProvider = new GoogleAuthProvider()
const GitHubProvider = new GithubAuthProvider()
const facebookProvider = new FacebookAuthProvider()


const useFirbase = () => {


    const handleEmailLogin = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handlegoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handlegithubLogin = () => {
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleFacebookLogin = () => {
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return { handlegoogleLogin, handlegithubLogin, handleFacebookLogin, handleEmailLogin }

}

export default useFirbase;