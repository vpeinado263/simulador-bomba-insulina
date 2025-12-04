import { DeviceProvider } from "@/contexts/DeviceContext";
import Footer from "../organisms/Footer";
import DeviceLayout from "./DeviceLayout";

const AppLayout = () => {
  return (
    <DeviceProvider>
    <div className="min-h-screen flex flex-col items-center justify-center">
      <DeviceLayout />
      <Footer />
    </div>
  </DeviceProvider>
  )
}

export default AppLayout;
