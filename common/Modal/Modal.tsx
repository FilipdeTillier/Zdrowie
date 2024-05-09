import { FC } from "react";
import classNames from "classnames";
import styles from "./Modal.module.scss";
import CloseIcon from "@mui/icons-material/Close";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  active: boolean;
};

export const Modal: FC<ModalProps> = ({ children, active, onClose }) => {
  return (
    <div
      className={classNames(styles.modal, {
        [styles.active]: active,
      })}
    >
      <div className={styles.modalContent}>
        <CloseIcon
          onClick={onClose}
          className={classNames("pointer", styles.closeButton)}
        />
        {children}
      </div>
    </div>
  );
};
