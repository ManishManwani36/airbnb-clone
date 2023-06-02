import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import RegisterModal from "./components/Modals/RegisterModal";
import LoginModal from "./components/Modals/LoginModal";
import RentModal from "./components/Modals/RentModal";
import getCurrentUser from "./actions/getCurrentUser";
import SearchModal from "./components/Modals/SearchModal";

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
        <RentModal />
        <RegisterModal />
        <SearchModal />
        <Navbar currentUser={currentUser} />
        <ToasterProvider />
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
