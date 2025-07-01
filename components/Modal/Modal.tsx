"use client";
import { useEffect } from "react";
import "./Modal.css";

interface ModalProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-content overflow-auto md:overflow-visible">
        <button className="modal-close desktop-only" onClick={onClose}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};
