"use client";

import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

type CaseStudy = {
  problem?: string;
  solution?: string;
  result?: string;
};

type ProjectItem = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists?: string[];
  link?: string;
  type?: "case" | "live";
  caseStudy?: CaseStudy;
};

const EMAIL = "vertexdevarg@gmail.com";
const INSTAGRAM_URL = "https://instagram.com/vertex.dev";

const RecentProjects = () => {
  const [open, setOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const list = projects as unknown as ProjectItem[];

  const openCase = (p: ProjectItem) => {
    setActiveProject(p);
    setOpen(true);
  };

  const closeCase = () => {
    setOpen(false);
    setTimeout(() => setActiveProject(null), 150);
  };

  // ✅ Abre Gmail Web SIEMPRE (evita problemas de mailto)
  const buildGmailCompose = (title: string) => {
    const subject = encodeURIComponent(`Consulta comercial — ${title}`);
    const body = encodeURIComponent(
      `Hola Vertex Dev!\n\nMe interesa este proyecto:\n${title}\n\nQuiero consultar por algo similar.\n\nMi nombre:\nMi negocio/rubro:\nQué necesito:\nPresupuesto estimado:\nFecha ideal:\n\nGracias!`
    );

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      EMAIL
    )}&su=${subject}&body=${body}`;
  };

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Una selección de <span className="text-purple">proyectos recientes</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {list.map((item) => {
          const hasLink = !!item.link && item.link.trim().length > 0;

          const pinHref = hasLink ? item.link! : "#projects";
          const pinTitle = hasLink ? item.link! : "Case study";

          return (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
              key={item.id}
            >
              <PinContainer title={pinTitle} href={pinHref}>
                {/* portada */}
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="fondo" />
                  </div>

                  <img
                    src={item.img}
                    alt={`Portada ${item.title}`}
                    className="z-10 absolute bottom-0"
                  />
                </div>

                {/* título */}
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>

                {/* descripción */}
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{ color: "#BEC1DD", margin: "1vh 0" }}
                  title={item.des}
                >
                  {item.des}
                </p>

                {/* ✅ “Ver más” SIEMPRE abre modal */}
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={() => openCase(item)}
                    className="text-sm text-white-200 hover:text-white transition underline underline-offset-4"
                  >
                    Ver más
                  </button>
                </div>

                {/* CTA abajo a la derecha */}
                <div className="flex justify-end mt-7 mb-3">
                  {hasLink ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-center items-center"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Ver sitio
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openCase(item)}
                      className="flex justify-center items-center"
                    >
                      <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                        Ver caso
                      </p>
                      <FaLocationArrow className="ms-3" color="#CBACF9" />
                    </button>
                  )}
                </div>
              </PinContainer>
            </div>
          );
        })}
      </div>

      {/* ✅ MODAL CASE STUDY (SIN FOTOS) */}
      {open && activeProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
          onClick={closeCase}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* modal */}
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-white/[0.12] overflow-hidden"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* header */}
            <div className="flex items-start justify-between gap-4 p-6 border-b border-white/[0.08]">
              <div>
                <h2 className="text-white text-xl md:text-2xl font-bold">
                  {activeProject.title}
                </h2>
                <p className="text-white-200 mt-2 text-sm md:text-base leading-relaxed">
                  {activeProject.des}
                </p>
              </div>

              <button
                onClick={closeCase}
                className="text-white/80 hover:text-white text-sm px-3 py-2 rounded-lg border border-white/[0.12]"
              >
                Cerrar ✕
              </button>
            </div>

            {/* content */}
            <div className="p-6 space-y-4">
              {activeProject.caseStudy?.problem && (
                <div className="rounded-2xl border border-white/[0.10] bg-black/30 p-4">
                  <p className="text-white-200 text-xs uppercase tracking-wide">
                    Problema
                  </p>
                  <p className="text-white mt-2 leading-relaxed">
                    {activeProject.caseStudy.problem}
                  </p>
                </div>
              )}

              {activeProject.caseStudy?.solution && (
                <div className="rounded-2xl border border-white/[0.10] bg-black/30 p-4">
                  <p className="text-white-200 text-xs uppercase tracking-wide">
                    Solución
                  </p>
                  <p className="text-white mt-2 leading-relaxed">
                    {activeProject.caseStudy.solution}
                  </p>
                </div>
              )}

              {activeProject.caseStudy?.result && (
                <div className="rounded-2xl border border-white/[0.10] bg-black/30 p-4">
                  <p className="text-white-200 text-xs uppercase tracking-wide">
                    Resultado
                  </p>
                  <p className="text-white mt-2 leading-relaxed">
                    {activeProject.caseStudy.result}
                  </p>
                </div>
              )}

              {/* CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildGmailCompose(activeProject.title)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <button className="w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 py-3 text-white hover:bg-black/40 transition flex items-center justify-center gap-2">
                    Consultar este proyecto <FaLocationArrow />
                  </button>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1"
                >
                  <button className="w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 py-3 text-white hover:bg-black/40 transition flex items-center justify-center gap-2">
                    Escribir por Instagram <FaLocationArrow />
                  </button>
                </a>

                {/* ✅ SOLO SI TIENE LINK, mostramos “Ver sitio” también dentro del modal */}
                {activeProject.link && activeProject.link.trim().length > 0 && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1"
                  >
                    <button className="w-full rounded-xl border border-white/[0.12] bg-black/30 px-4 py-3 text-white hover:bg-black/40 transition flex items-center justify-center gap-2">
                      Ver sitio <FaLocationArrow />
                    </button>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentProjects;