import { ChangeEvent, useState } from "react"
import { BackImage, CreateNewAccountButton, DontHaveAccountText, InputLabel, InputElement, ForgotPassword, FormContainer, HorizontalLine, SignAndLoginHeading, SignAndLoginInHeadingContainer, SignInCreateAccountContainer, SignInDescription, SignInHeading, SignInMainContainer, SignInTextContainer } from "./styledComponents"
import { GlobalButton } from "../AllYourFavorites/styledComponents"

const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [maskedPassword, setMaskedPassword] = useState(""); 

    const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const inputPassword = event.target.value
        setPassword(inputPassword)

        setMaskedPassword("*".repeat(inputPassword.length))
    }

    return (
        <SignInMainContainer>
            <SignAndLoginInHeadingContainer>
                <BackImage src="/Images/back.svg"/>
                <SignAndLoginHeading>Sign In</SignAndLoginHeading>
            </SignAndLoginInHeadingContainer>
            <SignInTextContainer>
                <SignInHeading>Welcome to QuickBite Food Services</SignInHeading>
                <SignInDescription>Enter your Phone number or Email <br/> address for sign in. Enjoy your food :)</SignInDescription>
            </SignInTextContainer>
            <FormContainer>
                <InputLabel>EMAIL ADDRESS</InputLabel>
                <InputElement value={email} onChange={onChangeEmail} type="text" />
                <HorizontalLine/>

                <InputLabel>PASSWORD</InputLabel>
                <InputElement type="text" onChange={onChangePassword} value={maskedPassword}/>
                <input type="hidden" value={password}/>
                <HorizontalLine/>

                <ForgotPassword>Forget Password?</ForgotPassword>

                <GlobalButton>SIGN IN</GlobalButton>
            </FormContainer>
            <SignInCreateAccountContainer>
                <DontHaveAccountText>Don't have account?</DontHaveAccountText>
                <CreateNewAccountButton>Create new account</CreateNewAccountButton>
            </SignInCreateAccountContainer>
        </SignInMainContainer>
    )
}

export default SignIn