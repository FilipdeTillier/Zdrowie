import classnames from "classnames";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import EggIcon from "@mui/icons-material/Egg";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./SearchIcons.module.scss";
import { Services } from "models/services";
import { FC } from "react";
import { SearchQueryParams } from "models/searchQueryParams";

type SearchIconsProps = {
  className?: string;
};

export const SearchIcons: FC<SearchIconsProps> = ({ className }) => {
  const searchParams = useSearchParams();
  const speciality = searchParams.get(SearchQueryParams.SPECIALITY) || "";
  const router = useRouter();
  const pathname = usePathname();

  const setParam = (speciality: Services) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(SearchQueryParams.SPECIALITY, speciality.toLowerCase());
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div className={classnames(styles.iconsWrapper, className)}>
      <div className={styles.iconContainer}>
        <div
          className={classnames(styles.iconWrapper, {
            [styles.active]: speciality === Services.PHYSIOTHERAPIST,
          })}
          onClick={() => setParam(Services.PHYSIOTHERAPIST)}
        >
          <AccessibilityNewIcon />
        </div>
        {/* <FormattedMessage id={Services.PHYSIOTHERAPIST} /> */}
      </div>
      <div className={styles.iconContainer}>
        <div
          className={classnames(styles.iconWrapper, styles.trainer, {
            [styles.active]: speciality === Services.TRAINER,
          })}
          onClick={() => setParam(Services.TRAINER)}
        >
          <FitnessCenterIcon />
        </div>
        {/* <FormattedMessage id={Services.TRAINER} /> */}
      </div>
      <div className={styles.iconContainer}>
        <div
          className={classnames(styles.iconWrapper, {
            [styles.active]: speciality === Services.DIETICIAN,
          })}
          onClick={() => setParam(Services.DIETICIAN)}
        >
          <EggIcon />
        </div>
        {/* <FormattedMessage id={Services.DIETICIAN} /> */}
      </div>
    </div>
  );
};
