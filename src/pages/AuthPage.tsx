import React, { ChangeEvent, useState } from 'react';
import { FC } from 'react';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordCheck, setPasswordCheck] = useState<string>('');
  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.currentTarget;

    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      case 'passwordCheck':
        return setPasswordCheck(value);
      case 'signup':
        return setIsSignUp(checked);
      default:
        return;
    }
  };

  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        {isSignUp && (
          <input
            name="passwordCheck"
            type="password"
            value={passwordCheck}
            onChange={handleChange}
            placeholder="Password Check"
          />
        )}
        {isSignUp ? (
          <button type="submit">Sign Up</button>
        ) : (
          <button type="submit">Sign In</button>
        )}
        <label htmlFor="signup">Sign Up</label>
        <input
          name="signup"
          type="checkbox"
          onChange={handleChange}
          checked={isSignUp}
        />
      </form>
    </>
  );
};

export default AuthPage;
