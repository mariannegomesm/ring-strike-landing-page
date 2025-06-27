"use client";

import Image from "next/image";

import { Card, Header } from "@/components";

import { useActiveSection } from "@/lib/hook/useActiveSection";

import Banner from "../../public/banner.svg";
import PhotoSection1 from "../../public/photo-section-1.svg";
import PhotoSection2 from "../../public/photo-section-2.svg";
import PhotoSection3 from "../../public/photo-section-3.svg";
import Banner2 from "../../public/banner-2.svg";
import Banner3 from "../../public/banner-3.svg";
import { cardsOptions, instructorsOptions, photosOptions, uniOptions } from "@/lib/constants/menu";

const Home = () => {
  const activeSection = useActiveSection();

  return (
    <main className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} />

      <section id="quem-somos" className="relative" style={{ height: 'calc(100vh - 80px)' }}>
        <Image
          src={Banner}
          alt="Banner"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 text-white px-4 text-center">
          <h1 className="text-[16px] md:text-[32px] lg:text-[42px] font-bold lg:mb-2">
            Equipe Profissional de Muay Thai e MMA
          </h1>
          <h2 className="text-[14px] md:text-[20px] ml:text-[24px] font-light">
            Chancelada pela Federação Cearense de Muay Thai-FCMT
          </h2>
          <div className="absolute bottom-12 left-0 right-0 flex justify-center items-center text-white px-4">
            <span className="material-symbols-outlined mr-2 text-2xl">
              globe
            </span>
            <span className="text-[12px] md:text-[16px] lg:text-[16px] md:text-xl">
              Fortaleza – CE
            </span>
          </div>
        </div>
      </section>

      <section id="quem-somos" className="min-h-[600px] flex flex-col lg:flex-row items-center px-[10%] py-[40px]">
        <div className="w-full lg:w-[50%] px-[5%]">
          <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Quem somos?</label>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px] mt-[16px] font-light">
            A <label className="font-bold text-[#BC090D]">Ring Strike</label> é uma equipe profissional de <label className="font-bold text-[#BC090D]">Muay Thai</label> e <label className="font-bold text-[#BC090D]">MMA</label>, comprometida em oferecer o mais alto padrão de treinamento e competição. Nossa missão é transformar apaixonados por artes marciais em verdadeiros campeões.
            <br />
            <br />
            Com um ambiente <label className="font-bold text-[#BC090D]">acolhedor</label> e treinamentos <label className="font-bold text-[#BC090D]">excepcionais</label>, estamos prontos para ajudar você a alcançar seus objetivos e fazer parte de uma equipe <label className="font-medium text-[#BC090D]">dedicada</label> à excelência nas artes marciais.
          </p>
        </div>
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
          <Image src={PhotoSection1} alt="Foto section 1" />
        </div>
      </section>

      <section id="quem-somos" className="min-h-[600px] flex flex-col lg:flex-row items-center px-[10%] bg-[#960407] text-white py-[40px]">
        <div className="w-full lg:w-[50%] flex justify-center items-center  mb-10 lg:mb-0">
          <Image src={PhotoSection2} alt="Foto section 1" />
        </div>
        <div className="w-full lg:w-[50%] px-[5%]">
          <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Como surgimos?</label>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px] mt-[16px] font-light">
            A Ring Strike foi reaberta em Fortaleza, Ceará, por <label className="font-bold">Guilherme Soldado</label>, Grau Preto de Muay Thai, Head Coach da equipe e Personal Fighter, e por <label className="font-bold">Elinardo Goiabinha</label>, campeão brasileiro e cearense de Muay Thai.
            <br />
            <br />
            Com o objetivo de <label className="font-bold">promover</label> e <label className="font-bold">desenvolver</label> o esporte na região, Guilherme e Elinardo reuniram um grupo de dedicados atletas e treinadores para criar um centro de treinamento de excelência. Desde o início, a Ring Strike se destacou por seu compromisso com a qualidade do treinamento e a formação de atletas de alto nível.          </p>
        </div>
      </section>
      <section id="aulas-e-treinamentos" className="min-h-[600px] px-10 py-20 text-center">
        <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Aulas e treinamentos</label>
        <p className="font-light text-[12px] md:text-[14px] lg:text-[16px]">Conheça as diferentes <label className="font-bold text-[#BC090D]">modalidades de treino</label> que proporcionamos</p>

        <div className="flex flex-col lg:flex-row gap-[24px] px-[10%] mt-[40px]">
          {cardsOptions.map((item, index) => (
            <Card src={item.img} title={item.title} description={item.description} key={index} />
          ))}
        </div>
      </section>
      <section id="aulas-e-treinamentos" className="relative w-full h-[900px]">
        <Image src={Banner2} alt="Foto section 2" fill style={{ objectFit: 'cover' }} />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-center px-4">
          <label className="text-2xl md:text-3xl font-light max-w-4xl">
            "Juntos, somos uma família que treina, luta e cresce unida."
          </label>
        </div>
      </section>
      <section id="instrutores" className="min-h-[600px] px-10 py-20 text-center">
        <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Instrutores</label>
        <p className="font-light text-[12px] md:text-[14px] lg:text-[16px]">Conheça o <label className="font-bold text-[#BC090D]">nosso time</label> de instrutores e saiba <label className="font-bold text-[#BC090D]">onde atuam</label></p>

        <div className="flex flex-col lg:flex-row gap-[24px] px-[10%] mt-[40px]">
          {instructorsOptions.map((item, index) => (
            <div
              key={`instructors-${index}`}
              className="border-1 items-center border-solid border-[#E7E7E7] flex flex-col rounded-lg overflow-hidden py-[24px] shadow-lg bg-white"
            >
              <Image src={item.img} alt="Instrutor" />
              <div className="flex flex-col px-[24px]">
                <label className="text-[14px] font-bold mt-[12px] mb-[8px]">{item.title}</label>
                <label className="text-[12px] font-light mt-[12px] mb-[8px] text-justify">{item.description}</label>
              </div>
            </div>
          ))}
        </div>

      </section>
      <section id="eventos" className="min-h-[600px] flex flex-col lg:flex-row items-center px-[10%] py-[40px] bg-[#960407] text-white">
        <div className="w-full lg:w-[50%] flex justify-center items-center mt-10 lg:mt-0">
          <Image src={PhotoSection3} alt="Foto section 1" />
        </div>
        <div className="w-full lg:w-[50%] px-[5%]">

          <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Nossos eventos</label>
          <p className="text-justify text-[12px] md:text-[14px] lg:text-[16px] mt-[16px] font-light">
            A <label className="font-bold">Ring Strike</label> valoriza profundamente os eventos de <label className="font-bold">Muay Thai</label>, realizando frequentemente aulões temáticos que oferecem uma excelente oportunidade para apresentar o esporte à <label className="font-bold">comunidade</label>.
            <br />
            <br />
            Esses eventos são cuidadosamente planejados para mostrar a técnica, disciplina e a cultura do Muay Thai, permitindo que todos, desde iniciantes até praticantes avançados, se envolvam e aprendam mais sobre essa arte marcial.
            Convidamos você a participar dos nossos <label className="font-bold">próximos aulões</label> temáticos e vivenciar de perto a energia e a paixão que movem nossa equipe.
          </p>
        </div>
      </section>

      <section id="galeria" className="min-h-[600px] px-10 py-20 text-center">
        <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Galeria</label>
        <p className="font-light text-[12px] md:text-[14px] lg:text-[16px]">
          Nos <label className="font-bold text-[#BC090D]">conheça</label> um pouco mais por meio das{" "}
          <label className="font-bold text-[#BC090D]">nossas fotos</label>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[24px] mt-[40px] w-full max-w-[1200px] mx-auto justify-items-center">
          {photosOptions.map((item, index) => (
            <Image src={item.img} alt="Foto" key={index} className="w-[370px]" />
          ))}
        </div>
      </section>
      <section id="unidades" className="relative w-full text-white">
        <div className="absolute inset-0 -z-10">
          <Image src={Banner3} alt="Foto section 2" fill style={{ objectFit: 'cover' }} />
        </div>

        <div className="flex flex-col items-center px-4 text-center pt-40 pb-40">
          <label className="font-bold text-[20px] md:text-[28px] lg:text-[36px]">Nossas unidades</label>
          <p className="font-light lg:mt-4 max-w-2xl text-[12px] md:text-[14px] lg:text-[16px]">
            Encontre a <label className="font-bold text-[#BC090D]">unidade mais próxima</label> de você e{" "}
            <label className="font-bold text-[#BC090D]">venha treinar</label> conosco!
          </p>

          <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-[24px] px-[10%] mt-[40px]">
            {uniOptions.map((item, index) => (
              <div
                key={`instructors-${index}`}
                className="border-1 items-center border-solid border-[#E7E7E7] flex flex-col rounded-lg overflow-hidden py-[24px] bg-white text-black max-w-[300px]"
              >
                <Image src={item.img} alt="Instrutor" />
                <div className="flex flex-col px-[24px]">
                  <label className="text-[14px] font-bold mt-[12px] mb-[8px]">{item.title}</label>
                  <label className="text-[12px] font-light mt-[12px] mb-[8px] text-justify">{item.description}</label>
                  <label className="text-[12px] font-light mt-[12px] mb-[8px] text-center">{item.phone}</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#960407] text-white text-center py-[12px] mt-auto">
        <label className="text-[14px] font-light">Desenvolvido por @mariannegomesm</label>
      </footer>
    </main>
  );
};

export default Home;
