import { DeviceProvider } from "@/contexts/DeviceContext";
import Footer from "../organisms/Footer";
import Navigation from "../organisms/Navigation";
import DeviceLayout from "./DeviceLayout";

const AppLayout = () => {
  return (
   <DeviceProvider>
    <div className="min-h-screen flex flex-col">
      <Navigation />
    <main className="min-h-screen flex flex-col items-center justify-center">
      <DeviceLayout />
    </main>
    <Footer />
    </div>
  </DeviceProvider>
  )
}

export default AppLayout;
