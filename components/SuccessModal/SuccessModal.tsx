"use client";
import React from "react";
import { AuthButton } from "../AuthButton/AuthButton";
import Image from "next/image";
import "./SuccessModal.css";

interface SuccessModalProps {
  onSubscribe: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({ onSubscribe }) => {
  return (
    <div className="success-container">
      {/* Левая панель */}
      <div className="success-left-panel">
        <Image 
          src="/images/all-chanels.svg" 
          alt="All channels"
          className="channels-image"
          width={380}
          height={532}
          priority
        />
      </div>

      {/* Правая панель */}
      <div className="success-right-panel">
        <div className="success-right-content">
          <h1 className="success-title">
            Ты успешно авторизовался!
          </h1>
          
          <div className="success-description">
            <p>На нашем сервисе собрано больше 1.000 вопросов с собеседований, сотни тестовых заданий, контакты рекрутеров и многое другое.</p>
              <p>Желаем тебе быстрого поиска работы 🩵</p>
          </div>

          <AuthButton onClick={onSubscribe}>
            Подписаться на каналы
          </AuthButton>
        </div>
      </div>
    </div>
  );
};