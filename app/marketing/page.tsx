import Footer from "@/components/footer";
import Home from "@/components/home";
import Navbar from "@/components/navbar";

export default function Page() {
    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center w-full mt-[100px]">
                <Home />
            </main>
            <Footer />
        </>
    );
}