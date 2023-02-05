import { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.component.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormField = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const { user } = await signInAuthUserWithEmailAndPassword(
      //   email,
      //   password
      // );
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("email is not exist");
          break;

        default:
          console.log(error);
      }
      console.log("not able to sign in", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          id="email-signin"
          type="email"
          value={email}
          required
          name="email"
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          id="password-signin"
          type="password"
          value={password}
          required
          name="password"
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button buttonType={""} type="submit">
            Sign In
          </Button>
          <Button
            buttonType={"google"}
            type="button"
            onClick={() => signInWithGoogle()}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
