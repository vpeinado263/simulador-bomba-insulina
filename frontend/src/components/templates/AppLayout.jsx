import Footer from "../organisms/Footer";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default AppLayout;
