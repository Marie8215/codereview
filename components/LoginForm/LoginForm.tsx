"use client";
import React, { useState } from "react";
import { CustomInput } from "../CustomInput/CustomInput";
import { SocialButton } from "../SocialButton/SocialButton";
import { Divider } from "../Divider/Divider";
import { AuthButton } from "../AuthButton/AuthButton";
import "./LoginForm.css";

interface LoginFormProps {
  onRegisterClick: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onRegisterClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    // Add login logic here
    console.log('Login attempt', { email, password });
  };

  return (
    <div className="login-container">
      {/* Левая часть */}
      <div className="login-left-panel">
        <div className="login-slogan">
          <div>Вы готовы к большему.</div>
          <div>Мы поможем начать.</div>
        </div>
        
        <img 
          src="/images/sophi-auth.png" 
          alt="Sophi Auth"
          className="login-image"
        />
        
        <div className="login-logo">
          &lt;codereview/&gt;
        </div>
      </div>
      
      {/* Правая часть с формой */}
      <div className="login-right-panel">
        {/* Кнопки входа через соцсети */}
        <div className="social-buttons">
          <SocialButton
            icon="/images/telegram-color-ico.svg"
            alt="Telegram"
          >
            Войти через Telegram
          </SocialButton>
          
          <SocialButton
            icon="/images/hh-color-ico.svg"
            alt="HH.ru"
          >
            Войти через HH.ru
          </SocialButton>
        </div>

        <Divider text="или" />

        {/* Форма входа */}
        <div className="login-form">
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
            <img
              src="/images/eye-ico.svg"
              alt="Toggle password visibility"
              className="eye-toggle"
              onClick={togglePasswordVisibility}
            />
          </div>

          <a href="#" className="forgot-password">Забыли пароль?</a>

          <AuthButton onClick={handleSubmit}>
            Войти
          </AuthButton>

          <p className="register-prompt">
            Ещё нет аккаунта?{' '}
            <a 
              href="#" 
              className="register-link" 
              onClick={(e) => {
                e.preventDefault();
                onRegisterClick();
              }}
            >
              Регистрация
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};