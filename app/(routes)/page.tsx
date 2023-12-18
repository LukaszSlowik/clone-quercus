import CarouselCompanies from "@/app/components/carousel-companies";
import DividerWave from "@/app/components/divider-wave";
import NewModelVendor from "@/app/components/new-model-vendor";
import WhyQuercus from "@/app/components/why-quercus";
import HeroNumbers from "@/app/components/hero-numbers";
import DeliveryMethods from "@/app/components/delivery-methods";
import Software from "@/app/components/software";

export default function Home() {
  return (
    <main className="  min-h-screen  ">
      <NewModelVendor />
      <WhyQuercus />
      <HeroNumbers />
      <DeliveryMethods />
      <Software />
      <div className="w-screen bg-[#dfeaf0]">
        <DividerWave className="hidden w-full  fill-white sm:block" />

        <CarouselCompanies />
      </div>
    </main>
  );
}
