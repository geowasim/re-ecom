import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.component.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email in use");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          id="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          id="password"
          type="password"
          value={password}
          required
          onChange={handleChange}
        />
        <FormInput
          label="Confirm Password"
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          required
          onChange={handleChange}
        />

        <Button buttonType={""} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
