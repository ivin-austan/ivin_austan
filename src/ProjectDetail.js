import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import projectData from "./project.json";
import { projectMeta, slugify } from "./Projects";
import { Contextreact } from "./Context";

export default function ProjectDetail() {
  const { slug } = useParams();
  const { theme, setTheme } = useContext(Contextreact);
  const index = projectData.findIndex((p) => slugify(p.title) === slug);
  const project = projectData[index];
  if (!project)
    return (
      <main className="min-h-screen bg-slate-950 p-24 text-white">
        <h1 className="text-4xl font-bold">Project not found.</h1>
        <Link className="mt-4 inline-block text-cyan-300" to="/projects">
          Return to projects
        </Link>
      </main>
    );
  const meta = projectMeta[index] || [
    "Web application",
    "Full Stack",
    "Complete",
    "User-focused delivery",
  ];
  const features = [
    "Responsive product experience",
    "Clear user workflows",
    "Reusable interface patterns",
    "Production-minded implementation",
  ];
  return (
    <main className="min-h-screen bg-slate-950 pb-24 text-slate-50">
      <nav className="mx-auto flex h-20 w-[min(1140px,calc(100%-48px))] items-center justify-between border-b border-white/10 font-mono text-[11px] text-slate-400">
        <Link
          className="flex items-center gap-2 text-indigo-100 hover:text-cyan-200"
          to="/projects"
        >
          <FaArrowLeft /> All projects
        </Link>
        <span className="hidden sm:inline">CASE STUDY / {meta[0]}</span>
        <button
          className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 text-white"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
      <header
        className="relative mx-auto mt-12 min-h-[410px] w-[min(1140px,calc(100%-48px))] overflow-hidden rounded-3xl border border-white/15 p-8 shadow-2xl shadow-black/50 sm:p-14"
        style={{
          background: `radial-gradient(circle at 70% 20%, #ffffff44, ${project.bgcolor})`,
        }}
      >
        <span className="font-mono text-[10px] tracking-wider">
          {meta[0]} · {meta[2]}
        </span>
        <h1 className="relative z-10 mt-5 max-w-xl text-5xl font-extrabold tracking-tight sm:text-7xl">
          {project.title}
        </h1>
        <p className="relative z-10 mt-3 text-indigo-100">{meta[3]}</p>
        <div className="absolute bottom-0 right-[7%] h-56 w-[48%] min-w-64 rounded-t-xl border border-white/25 bg-slate-950/90 p-5">
          <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-rose-400" />
          <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
          <i className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <b className="mt-10 block text-2xl">{project.title}</b>
          <small className="mt-2 block line-clamp-2 text-slate-400">
            {project.description.trim()}
          </small>
        </div>
      </header>
      <article className="mx-auto w-[min(900px,calc(100%-48px))] py-14">
        <section className="border-b border-white/10 py-8">
          <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
            OVERVIEW
          </p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight">
            A purposeful product, built around a real workflow.
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            {project.description.trim()}
          </p>
        </section>
        <section className="grid gap-10 border-b border-white/10 py-8 md:grid-cols-2">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
              MY CONTRIBUTION
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Designed a clear, responsive product experience.",
                "Built maintainable application components and workflows.",
                "Connected the interface with supporting full-stack architecture.",
              ].map((x) => (
                <li className="flex gap-2 text-sm text-slate-300" key={x}>
                  <FaCheck className="mt-1 text-cyan-300" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
              TECHNICAL APPROACH
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              The implementation balances a polished interface with practical
              architecture, keeping the application understandable, responsive,
              and ready to evolve.
            </p>
          </div>
        </section>
        <section className="border-b border-white/10 py-8">
          <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
            KEY FEATURES
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {features.map((x) => (
              <span
                className="flex gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300"
                key={x}
              >
                <FaCheck className="mt-1 text-cyan-300" />
                {x}
              </span>
            ))}
          </div>
        </section>
        <section className="border-b border-white/10 py-8">
          <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
            TECHNOLOGY STACK
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((x) => (
              <span
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-violet-300"
                key={x}
              >
                <FaLayerGroup />
                {x}
              </span>
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-between gap-8 py-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] font-bold tracking-[.16em] text-cyan-300">
              BUSINESS IMPACT
            </p>
            <h3 className="mt-3 text-2xl font-bold">{meta[3]}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              Designed to reduce friction in a core digital workflow and give
              users a more dependable, efficient way to complete their work.
            </p>
          </div>
          <div className="flex gap-2">
            <a
              className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs hover:text-cyan-200"
              href={project.codelink}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              Source
            </a>
            {project.applink && (
              <a
                className="flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs hover:text-cyan-200"
                href={project.applink}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                Live app
              </a>
            )}
          </div>
        </section>
      </article>
    </main>
  );
}
