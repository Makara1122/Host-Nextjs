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
      <CarouselComponent/>
    </main>
  );
}
