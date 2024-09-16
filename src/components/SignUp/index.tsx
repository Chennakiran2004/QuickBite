import { ChangeEvent, useState } from "react"
import { BackImage, HorizontalLine, InputElement, InputLabel, SignAndLoginHeading, SignAndLoginInHeadingContainer } from "../SignIn/styledComponents"
import { AlreadyHaveAccountTextSpan, CreateAccountDescription, CreateAccountFormContainer, CreateAccountHeading, CreateAccountTextContainer, SignUpMainContainer, TermsAndConditionsText } from "./styledComponents"
import { GlobalButton } from "../AllYourFavorites/styledComponents"

const SignUp = () => {

    const [fullName, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [maskedPassword, setMaskedPassword] = useState("")

    const onChangeFullName = (event: ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value)
    }

    const onChangeEmailAddress = (event: ChangeEvent<HTMLInputElement>) => {
        setEmailAddress(event.target.value)
    }

    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
        const inputPassword = event.target.value
        setPassword(inputPassword)

        setMaskedPassword("*".repeat(inputPassword.length))
    }

    return (
        <SignUpMainContainer>
            <SignAndLoginInHeadingContainer>
                <BackImage src="/Images/back.svg"/>
                <SignAndLoginHeading>Create Account</SignAndLoginHeading>
            </SignAndLoginInHeadingContainer>

            <CreateAccountTextContainer>
                <CreateAccountHeading>Create Account</CreateAccountHeading>
                <CreateAccountDescription>Enter your Name, Email and Password <br/> for sign up.<AlreadyHaveAccountTextSpan>Already have account?</AlreadyHaveAccountTextSpan></CreateAccountDescription>
            </CreateAccountTextContainer>
            <CreateAccountFormContainer>
                <>
                    <InputLabel>FULL NAME</InputLabel>
                    <InputElement type="text" value={fullName} onChange={onChangeFullName}/>
                    <HorizontalLine/>
                </>

                <>
                    <InputLabel>EMAIL ADDRESS</InputLabel>
                    <InputElement type="text" value={emailAddress} onChange={onChangeEmailAddress}/>
                    <HorizontalLine/>
                </>

                <>
                    <InputLabel>PASSWORD</InputLabel>
                    <InputElement type="text" value={maskedPassword} onChange={onChangePassword}/>
                    <input type="hidden" value={password}/>
                    <HorizontalLine/>
                </>
                <GlobalButton>SIGN UP</GlobalButton>

            </CreateAccountFormContainer>
            <TermsAndConditionsText>By Signing up you agree to our Terms Conditions & Privacy Policy.</TermsAndConditionsText>
        </SignUpMainContainer>
    )
}

export default SignUp