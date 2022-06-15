import { validateName } from '../utils/ValidateForm';
import { validateEmail } from '../utils/ValidateForm';
import { validatePassword } from '../utils/ValidateForm';

export const LoginForm = ({ userData, setUserData }) => {
  const handleValidateName = (e) => {
    setUserData({ name: e.target.value });
    validateName(e.target.value);
  };

  const handleValidateEmail = (e) => {
    setUserData({ email: e.target.value });
    validateEmail(e.target.value);
  };

  const handleValidatePassword = (e) => {
    setUserData({ password: e.target.value });
    validatePassword(e.target.value);
  };

  return (
    <form className="signUpForm">
      <label htmlFor="name" className="signUpInput">
        Your name
      </label>
      <input
        id="name"
        className="signUpInput"
        value={userData.name}
        required
        onChange={handleValidateName}
      />
      <label htmlFor="email" className="signUpInput">
        Your email
      </label>
      <input
        id="email"
        type="email"
        className="signUpInput"
        value={userData.email}
        required
        onChange={handleValidateEmail}
      />
      <label htmlFor="password" type="password" className="signUpInput">
        Password
      </label>
      <input
        id="password"
        className="signUpInput"
        value={userData.password}
        required
        onChange={handleValidatePassword}
      />
      <button className="signUpInput">Submit</button>
    </form>
  );
};
