import CarouselComponent from "@/components/CarouselComponent";
import { Metadata } from "next";


export const metadata : Metadata = {
  title : "Welcome to our website",
  description : "We are offering you a lot of create products.",
  openGraph : {
    images : "https://i.ytimg.com/vi/gtJ5i6DhbaM/maxresdefault.jpg"
  }
}

export default function Home() {
  return (
    <main >
      <a href="https://host-nextjs.vercel.app/"><h1 className="text-center text-2xl text-blue-600">https://host-nextjs.vercel.app/</h1></a>
      <CarouselComponent/>
    </main>
  );
}
