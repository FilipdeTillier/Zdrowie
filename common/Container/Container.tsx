import { PropsWithChildren } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-full bg-slate-50">
      <Header />
      <div className="container max-w-screen-lg m-auto">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
