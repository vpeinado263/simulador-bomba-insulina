import DeviceLayout from "@/components/templates/DeviceLayout";
import { DeviceProvider } from "@/contexts/DeviceContext";
import React from "react";

export default function Home() {
  return (
    <>
     <DeviceProvider>
       <div className="min-h-screen flex flex-col items-center justify-center">
         <DeviceLayout />
       </div>
     </DeviceProvider>
    </>
  );
}
