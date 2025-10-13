import { useState} from "react";
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/auth/AuthState";
import { Navigate } from "react-router-dom";
import RegistryBox from "../componants/RegistryBox"; 



import {
    PageWrapper,
} from "../constants/style";
const RegisterContainer = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        if (!isRegistering && password === confirmPassword) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password).catch((error) => {
                setErrorMessage(error.message)
                setIsRegistering(false)
                });
        }
    }

    const onGoogleSignIn = async () => {
        if (!isRegistering) {
            setIsRegistering(true);
            await doSignInWithGoogle().catch((error) => {
                setErrorMessage(error.message)
                setIsRegistering(false)
                });
        }
    }

    return (
        <PageWrapper sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
            }}>
            {userLoggedIn && (<Navigate to="/login" replace={true} />)}
            <RegistryBox
                onSubmit={onSubmit}
                onGoogleSignIn={onGoogleSignIn}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                isDoingAction={isRegistering}
                errorMessage={errorMessage}
                isRegistering={true}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
            />
        </PageWrapper>
    );
};

export default RegisterContainer;