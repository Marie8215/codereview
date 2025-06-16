"use client";
import React from "react";
import { AuthButton } from "../AuthButton/AuthButton";
import "./ThankYouModal.css";
import Image from "next/image";

interface ThankYouModalProps {
  onClose: () => void;
}

export const ThankYouModal: React.FC<ThankYouModalProps> = ({ onClose }) => {
  return (
    <div className="thank-you-container">
      {/* Левая панель */}
      <div className="thank-you-left-panel">
        <Image 
          src="/images/sophi-hearts.svg" 
          alt="Sophi Hearts"
          className="hearts-image"
          width={367}
          height={367}
          priority
        />
        
        <div className="thank-you-logo">
          &lt;codereview/&gt;
        </div>
      </div>

      {/* Правая панель */}
      <div className="thank-you-right-panel">
        <div className="thank-you-right-content">
          <h1 className="thank-you-title">
            Спасибо за подписки!
          </h1>
          
          <div className="thank-you-description">
            <p>Доступ к платформе полностью открыт и будет всегда доступен для твоего аккаунта.</p>

            <p>Желаем тебе быстрого поиска работы 🩵</p>
          </div>

          <AuthButton onClick={onClose}>
            {"Ура, спасибо :)"}
          </AuthButton>
        </div>
      </div>
    </div>
  );
};