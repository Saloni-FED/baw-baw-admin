// import Sidebar from "@/components/Sidebar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

// import { MyProvider } from "@/context/MyContext";
import { MyProvider } from "../../context/MyContext";

export const metadata = {
  title: "Baw Baw",
  description: "Baw baw Admin",
};

export default function RootLayout({ children }) {
  return (
    <MyProvider>
      <div className="flex flex-col w-full h-screen">
        {/* Header should take full width */}
        <Header />

        {/* Sidebar and content are in flex row below the Header */}
        <div className="flex flex-row flex-grow w-full h-full">
          {/* Sidebar with fixed width */}
          <div className="custom_shadow">
            <Sidebar />
          </div>

          {/* Children content should take remaining width */}
          <div className="flex-grow bg-oohpoint-grey-100 p-10">{children}</div>
        </div>
      </div>
    </MyProvider>
  );
}
