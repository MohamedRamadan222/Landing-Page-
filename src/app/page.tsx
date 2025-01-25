import Button from "@/components/Buttons";
import Heading from "@/components/Heading";
import { clients } from "@/constants/clients";
import { features } from "@/constants/features";
import { ArrowDownRightFromCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-24 lg:pt-28 antialiased">
      <div className="relative container">
        <Image
          src="/bg.png"
          width={1920}
          height={1080}
          alt="test"
          className="absolute -z-50 w-full h-full -top-20 left-0 opacity-10"
        />
        {/* Home Section */}
        <section id="home" className="relative">
          <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-100 top-16 -left-40" />
          <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-100 bottom-16 md:bottom-44 -right-20 md:right-20" />
          <div className="flex flex-col text-center space-y-12">
            a
            <div className="flex flex-col items-center space-y-6">
              <p
                className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl
              cursor-pointer hover:border-sky-500 hover:bg-slate-800 shadow-md transition-all"
              >
                New Features Is Now Available.
                <ArrowDownRightFromCircle className="inline ml-1 w-4 h-4" />
              </p>
              <Heading title="A CRM dashboard for engineering teams" />
              <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
                Boost engineering team&rsquo;s productivity with Ocean CRM
                dashboard that streamlines project management, collaboration,
                and data-driven decision-making.
              </p>
              <div className="flex items-center gap-4">
                <Button>
                  get started
                  <MoveRight className="w-4 h-4" />
                </Button>
                <Link href="#pricing">
                  <Button variant="outline">view pricing</Button>
                </Link>
              </div>
            </div>
            <Image
              src="/Hero-image.svg"
              width={670}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </section>
        {/* Home Section */}

        {/* Clients Section */}
        <section
          id="clients"
          className="max-w-[62rem] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-4"
        >
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.imageUrl}
              width={120}
              height={80}
              alt={client.alt}
              className="w-40 md:w-full mx-auto"
            />
          ))}
        </section>
        {/* Clients Section */}

        {/* Features section */}
        <section
          id="features"
          className="flex flex-col gap-y-12 md:gap-y-20 lg:gap-y-28 "
        >
          {/* part one */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <Image
              src="/bg2.png"
              width={1920}
              height={1080}
              alt="Second Banner"
              className="absolute -z-50 w-full top-0 left-0 opacity-5"
            />
            <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:text-start">
              <Heading title="Powerfull Features To Help You Manage All Your Leads." />
              <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
                Apsus dolor sit amet consectetur. Aliquam elementum elementum in
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
              </p>
              <Button>get started</Button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4">
              {features.map((feature, index) => (
                <div key={index}>{feature.title}</div>
              ))}
            </div>
          </div>
          {/* part one */}
        </section>
        {/* Features section */}
      </div>
    </main>
  );
}
