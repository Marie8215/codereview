"use client";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { SocialButton } from "../SocialButton/SocialButton";
import { Divider } from "../Divider/Divider";
import { AuthButton } from "../AuthButton/AuthButton";
import "./RegisterForm.css";
import Image from "next/image";

interface RegisterFormProps {
  onLoginClick: () => void;
  onSuccessRegister: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onLoginClick,
  onSuccessRegister,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword] = useState(false);

  // const handleSubmit = () => {
  //   console.log('Register attempt', { name, email, password, confirmPassword });
  //   onSuccessRegister(); // вызываем обработчик при успешной регистрации
  // };

  return (
    <div className="register-container">
      {/* Левая панель */}
      <div className="register-left-panel">
        <div className="register-slogan">
          <div>Вы готовы к большему.</div>
          <div>Мы поможем начать.</div>
        </div>

        {/* {тут вписал рандомные размеры, чтобы ошибка прошла} */}
        <Image
          src="/images/sophi-auth.png"
          alt="Sophi Auth"
          className="register-image"
          width={276}
          height={286}
        />

        <div className="register-logo">&lt;codereview/&gt;</div>
      </div>

      {/* Правая панель */}
      <div className="register-right-panel">
        <div className="register-right-content">
          <div className="social-buttons">
            <SocialButton icon="/images/telegram-color-ico.svg" alt="Telegram">
              Войти через Telegram
            </SocialButton>

            <SocialButton icon="/images/hh-color-ico.svg" alt="HH.ru">
              Войти через HH.ru
            </SocialButton>
          </div>

          <Divider text="или" />

          <div className="register-form">
            <CustomInput
              label="Имя"
              type="text"
              placeholder="Светлана"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <CustomInput
              label="Почта"
              type="email"
              placeholder="example@mail.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="password-wrapper">
              <CustomInput
                label="Пароль"
                type={showPassword ? "text" : "password"}
                placeholder="****"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Image
                src="/images/eye-ico.svg"
                alt="Toggle password visibility"
                className="eye-toggle"
                width={24}
                height={24}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <div className="password-wrapper">
              <CustomInput
                label="Ещё раз пароль"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="****"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Image
                src="/images/eye-ico.svg"
                alt="Toggle password visibility"
                className="eye-toggle"
                width={24}
                height={24}
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            <AuthButton onClick={onSuccessRegister}>
              Зарегистрироваться
            </AuthButton>

            <p className="login-prompt">
              Уже есть аккаунт?{" "}
              <a
                href="#"
                className="login-link"
                onClick={(e) => {
                  e.preventDefault();
                  onLoginClick();
                }}
              >
                Войти
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
