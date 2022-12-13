import { colors, getBackgroundColor } from "@helpers/colors";
import { appPaths } from "@helpers/paths";
import classNames from "classnames";
import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

const headerVisiblePaths = [appPaths.results];

export const Container = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const isHeaderVisible = useMemo(
    () => router.pathname && headerVisiblePaths.includes(router.pathname),
    [router]
  );
  const bgColor = useMemo(() => getBackgroundColor(colors.body), []);
  return (
    <div className={classNames("min-h-full flex flex-col", bgColor)}>
      {isHeaderVisible && <Header />}
      <div className="container max-w-screen-lg mx-auto flex-1">
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
