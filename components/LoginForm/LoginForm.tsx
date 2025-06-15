"use client";
import { useState } from 'react';
import { Modal } from '../Modal/Modal';
import './LoginForm.css';

interface LoginFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="login-container">
        {/* Левая часть */}
        <div className="login-left">
          <h2 className="login-headline">
            Мы готовы к большему.<br />
            Мы поможем начать.
          </h2>
          <div className="login-image">
            <img 
              alt="Login illustration" 
            />
          </div>
          <div className="login-logo">
            <img 
              alt="Logo"
            />
          </div>
        </div>

        {/* Правая часть */}
        <div className="login-right">
          <div className="social-buttons">
            <button className="social-button telegram">
              Войти через Telegram
            </button>
            <button className="social-button hh">
              Войти через HH.ru
            </button>
          </div>

          <div className="divider">или</div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Пароль"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Войти
            </button>
          </form>

          <div className="register-link">
            Ещё нет аккаунта? {' '}
            <a href="#" onClick={(e) => e.preventDefault()}>
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
};