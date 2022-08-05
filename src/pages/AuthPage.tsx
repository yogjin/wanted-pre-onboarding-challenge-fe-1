import React, { ChangeEvent, useState } from 'react';
import { FC } from 'react';

interface AuthPageProps {}

const AuthPage: FC<AuthPageProps> = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};

  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <input
          name="passwordCheck"
          onChange={handleChange}
          placeholder="Password Check"
        />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default AuthPage;
