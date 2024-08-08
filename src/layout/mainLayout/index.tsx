import { FloatingButton, Footer, Navbar } from "layout/component";
import { MainLayoutProps } from "layout/types";

export function MainLayout(props: MainLayoutProps) {
  const { children } = props;

  return (
    <>
      <Navbar />
      {children}
      <FloatingButton />
      <Footer />
    </>
  );
}
