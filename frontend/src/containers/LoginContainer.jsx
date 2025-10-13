import { useState} from "react";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/auth/AuthState";
import { Navigate } from "react-router-dom";
import RegistryBox from "../componants/RegistryBox"; 



import {
    PageWrapper,
} from "../constants/style";
const LoginContainer = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithEmailAndPassword(email, password).catch((error) => {
                setErrorMessage("Invalid email or password")
                setIsSigningIn(false)
                });
        }
    }

    const onGoogleSignIn = async () => {
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInWithGoogle().catch((error) => {
                setErrorMessage(error.message)
                setIsSigningIn(false)
                });
        }
    }

    return (
        <PageWrapper sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            {userLoggedIn && (<Navigate to="/flipping" replace={true} />)}
            <RegistryBox
                onSubmit={onSubmit}
                onGoogleSignIn={onGoogleSignIn}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isDoingAction={isSigningIn}
                errorMessage={errorMessage}
                isRegistering={false}
            />
        </PageWrapper>
    );
};

export default LoginContainer;
