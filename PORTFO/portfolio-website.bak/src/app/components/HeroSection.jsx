import React from "react";
import { motion } from "framer-motion"; // Ajout de l'import pour motion
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { fetchme } from "../Services/ME/meservices";

const HeroSection = ({
  firstname,
  lastname,
  phone,
  city,
  country,
  address,
  email,
  birth,
  description,
}) => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
              {" "}
              Hello, I'm {""}
            </span>
            <TypeAnimation
              sequence={[
                "C@ndice",
                1000,
                "Web developer",
                1000,
                "20 ans",
                1000,
                "French",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl ">
            uexuueiu Actuellement à la recherche d'un contrat d'apprentissage prévoyant
            une alternance sur une période de 3 semaines, comprenant 33 heures
            de formation en e-learning dispensées depuis l'entreprise. De plus,
            un vendredi sur trois est consacré à des séminaires en présentiel à
            l'école, tandis que le reste du temps est passé en entreprise,
            totalisant ainsi 96% de la durée de la formation en milieu
            professionnel. La disponibilité pour commencer ce contrat est dès le
            4 mars 2024.jejeje
          </p>
          <p className="text-white">CHGHJVJH</p>
          <p>{firstname}</p>
          <p>{lastname}</p>
          <p>{phone}</p>
          <p>{city}</p>
          <p>{country}</p>
          <p>{address}</p>
          <p>{email}</p>
          <p>{birth}</p>
          <p>{description}</p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-200 text-white ">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  hover:bg-slate-800 text-white border border-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt:0">
          <div className="rounded-full bg-[181818]">
            <Image
              src="/images/portefolio.jpg"
              alt="hero image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
