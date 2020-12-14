import React from "react";
import {
  FormContainer,
  FormWrap,
  Icon,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  Text,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <FormContainer>
        <FormWrap>
          <Icon to="/">dolla</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </FormContainer>
    </>
  );
};

export default SignIn;
