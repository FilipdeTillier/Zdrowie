import { colors, getBackgroundColor } from "@helpers/colors";
import { appPaths } from "@helpers/paths";
import classNames from "classnames";
import { useRouter } from "next/router";
import { PropsWithChildren, useMemo } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

const headerVisiblePaths = [appPaths.results, appPaths.offer];

export const Container = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  console.log(router);
  const isHeaderVisible = useMemo(
    () => router.pathname && headerVisiblePaths.includes(router.pathname),
    [router]
  );
  return (
    <div className={classNames("min-h-full flex flex-col bg-slate-50")}>
      {isHeaderVisible && <Header />}
      <div className="container max-w-screen-xl mx-auto flex-1">
        <main className="w-full">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
