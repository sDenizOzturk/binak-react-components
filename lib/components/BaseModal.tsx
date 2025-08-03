"use client";
import { FC, ReactNode, CSSProperties, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BaseButton } from "./BaseButton";
import classes from "./BaseModal.module.css";
import { duration } from "../utils/animationVariants";

interface BaseModalProps {
  open: boolean;
  children?: ReactNode;
  onClose: () => void;
  center?: boolean;
  title?: string;
  content?: ReactNode;
  baseDialog?: boolean;
  okayButton?: string;
  menuItems?: ReactNode;
  backdropStyle?: CSSProperties;
  dialogStyle?: CSSProperties;
}

export const BaseModal: FC<BaseModalProps> = ({
  open,
  children,
  onClose,
  center,
  title,
  content,
  baseDialog,
  okayButton = "",
  menuItems,
  backdropStyle,
  dialogStyle,
  ...props
}) => {
  const [modalContainer, setModalContainer] = useState<HTMLElement | null>(
    null
  );

  useEffect(() => {
    let el = document.getElementById("modal");
    if (!el) {
      el = document.createElement("div");
      el.id = "modal";
      document.body.appendChild(el);
    }
    setModalContainer(el);
  }, []);

  if (!modalContainer) return null;

  const positionStyle =
    !center && typeof window !== "undefined"
      ? { top: `${window.scrollY + 20}px`, ...dialogStyle }
      : dialogStyle;

  const contentNode = baseDialog ? (
    <>
      <header>
        <h2>{title}</h2>
      </header>
      <section>
        <p style={{ wordWrap: "break-word" }}>{content}</p>
        {children}
      </section>
      <menu>
        {okayButton && <BaseButton onClick={onClose}>{okayButton}</BaseButton>}
        {menuItems}
      </menu>
    </>
  ) : (
    <>{children}</>
  );

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={duration.m}
            onClick={onClose}
            className={classes.backdrop}
            style={backdropStyle}
          />
          <motion.dialog
            key="dialog"
            open={open}
            initial={{ opacity: 0, scale: 0.6, y: 200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 200 }}
            transition={duration.m}
            className={`${classes.dialog} ${center ? classes.center : ""}`}
            style={positionStyle}
            onClose={onClose}
            {...props}
          >
            {contentNode}
          </motion.dialog>
        </>
      )}
    </AnimatePresence>,
    modalContainer
  );
};
