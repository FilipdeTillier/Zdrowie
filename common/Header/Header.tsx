import Link from "next/link";
import { ReactElement, useMemo, useState } from "react";
import { Input } from "@common/Input";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import {
  isValidSearchServiceObject,
  SearchForm,
} from "@features/SearchRecords/SearchForm";
import { useRouter } from "next/router";
import classNames from "classnames";

import styles from "./Header.module.scss";
import { Modal } from "@common/Modal/Modal";

export const Header = (): ReactElement => {
  const [openModal, setOpenModal] = useState(false);
  const [openMenuModal, setOpenMenuModal] = useState(false);
  const { query } = useRouter();
  const defaultValues = useMemo(
    () =>
      isValidSearchServiceObject(query)
        ? query
        : { specialty: "", province: "" },
    [query]
  );

  return (
    <header className={classNames(styles.header, "sticky inset-0 z-10")}>
      <nav className={classNames(styles.nav)}>
        <Link className="pointer" href="/">
          Brand
        </Link>
        <div className={classNames(styles.iconsWrapper, "flex", "lg:hidden")}>
          <SearchIcon className="pointer" onClick={() => setOpenModal(true)} />
          <MenuIcon
            className="pointer"
            onClick={() => setOpenMenuModal(true)}
          />
        </div>
        <div className={classNames("hidden", "lg:flex")}>
          <SearchForm
            buttonClassName="w-full lg:w-1/5"
            defaultValues={defaultValues}
            formClassName={styles.searchFormDesktop}
            onFormSubmit={() => setOpenModal(false)}
          />
        </div>
      </nav>
      <Modal active={openModal} onClose={() => setOpenModal(false)}>
        <SearchForm
          buttonClassName="w-full"
          defaultValues={defaultValues}
          formClassName={styles.searchForm}
          onFormSubmit={() => setOpenModal(false)}
        />
      </Modal>
      <Modal active={openMenuModal} onClose={() => setOpenMenuModal(false)}>
        <div>Menu</div>
      </Modal>
    </header>
  );
};
