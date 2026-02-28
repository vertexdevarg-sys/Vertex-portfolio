import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const EMAIL = "vertexdevarg@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/vertex.dev";
const LINKEDIN_URL = "https://www.linkedin.com/in/vertexdevarg/";
const GITHUB_URL = "https://github.com/vertexdevarg-sys/";

const Footer = () => {
  const subject = encodeURIComponent("Consulta — Vertex Dev");
  const body = encodeURIComponent(
    "Hola Vertex Dev!\n\nQuiero consultar por un desarrollo (web / e-commerce / sistema a medida).\n\nMi nombre es:\nMi negocio/rubro es:\nQué necesito:\nPresupuesto estimado:\nFecha ideal de entrega:\n\nGracias!"
  );

  // ✅ Gmail web compose (siempre funciona)
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${subject}&body=${body}`;

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96 pointer-events-none">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative z-10 px-4">
        <h1 className="heading lg:max-w-[55vw] text-center">
          ¿Listo para llevar tu <span className="text-purple">negocio</span> al
          siguiente nivel?
        </h1>

        <p className="text-white-200 md:mt-8 mt-5 text-center max-w-2xl">
          Contanos qué necesitás y te respondemos con una propuesta clara: web,
          e-commerce o sistema a medida.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <MagicButton
              title="Enviar consulta por email"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-block"
          >
            <MagicButton
              title="Escribir por Instagram"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        {/* info extra tipo “pro” */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl">
          <div className="rounded-2xl border border-black-300 bg-black-200/60 backdrop-blur px-5 py-4 text-center">
            <p className="text-white-200 text-sm">Respuesta</p>
            <p className="text-white text-base font-medium">En el día</p>
          </div>

          <div className="rounded-2xl border border-black-300 bg-black-200/60 backdrop-blur px-5 py-4 text-center">
            <p className="text-white-200 text-sm">Modalidad</p>
            <p className="text-white text-base font-medium">Argentina / Remoto</p>
          </div>

          <div className="rounded-2xl border border-black-300 bg-black-200/60 backdrop-blur px-5 py-4 text-center">
            <p className="text-white-200 text-sm">Servicios</p>
            <p className="text-white text-base font-medium">
              Web · E-commerce · Sistemas
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-6 relative z-10 px-4">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          © {new Date().getFullYear()} Vertex Dev — Todos los derechos reservados.
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => {
            const href =
              info.id === 1
                ? GITHUB_URL
                : info.id === 2
                ? INSTAGRAM_URL
                : LINKEDIN_URL;

            const label =
              info.id === 1 ? "GitHub" : info.id === 2 ? "Instagram" : "LinkedIn";

            return (
              <a
                key={info.id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 hover:scale-105 transition"
                aria-label={label}
                title={`Abrir ${label}`}
              >
                <img src={info.img} alt={label} width={20} height={20} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;