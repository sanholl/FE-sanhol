"use client"

import React from 'react';
import { signInWithGoogle } from '@/supabase/lib/googleAuth';
import { SideContainer } from '@/src/shared/ui/styles/SideContainer';
import styled from "styled-components";

const SignIn = () => {
  return (
    <SideContainer>
      <LoginButton onClick={signInWithGoogle}>Sign in with Google</LoginButton>
    </SideContainer>
  );
};

export default SignIn;

const LoginButton = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  background: #0385ff;
  color: white;
  border: none;
  min-width: 70%;
  cursor: pointer;
  justify-content: center;
  display: flex;

  &:hover {
    background: #a0c080;
  }
`;