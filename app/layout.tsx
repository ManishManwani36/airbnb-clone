import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

interface Props {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: Props) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        <Navbar currentUser={currentUser} />
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
