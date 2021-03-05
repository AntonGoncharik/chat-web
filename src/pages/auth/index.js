import React, { useState } from 'react';

import View from './view';

const Container = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isOpenModalForgetPassword, setIsOpenModalForgetPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const changeCurrentPage = (value) => {
    setCurrentPage(value);
  };

  const changeEmail = (value) => {
    setEmail(value);
  };

  const changePassword = (value) => {
    setPassword(value);
  };

  const changeCode = (value) => {
    setCode(value);
  };

  const signin = async () => {

  };

  const signup = () => {

  };

  const openModalForgetPassword = () => {
    setIsOpenModalForgetPassword(true);
  };

  const closeModalForgetPassword = () => {
    setIsOpenModalForgetPassword(false);
  };

  const sendEmailCode = () => {

  };

  const sendEmailNewPassword = () => {

  };

  return (
    <View
      changeCurrentPage={changeCurrentPage}
      currentPage={currentPage}
      changeEmail={changeEmail}
      email={email}
      changePassword={changePassword}
      password={password}
      changeCode={changeCode}
      code={code}
      signin={signin}
      signup={signup}
      openModalForgetPassword={openModalForgetPassword}
      closeModalForgetPassword={closeModalForgetPassword}
      isOpenModalForgetPassword={isOpenModalForgetPassword}
      sendEmailCode={sendEmailCode}
      sendEmailNewPassword={sendEmailNewPassword} />
  );
};

export default Container;
