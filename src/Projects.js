import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCheckCircle,
  FaMoon,
  FaRocket,
  FaSun,
} from "react-icons/fa";
import projectData from "./project.json";
import { Contextreact } from "./Context";

const projectMeta = [
  [
    "Business operations",
    "React",
    "Live",
    "Workflow automation",
    "Enterprise",
    "Full Stack",
  ],
  ["Enterprise", "Full Stack", "Complete"],
  ["Personal brand", "React", "Live", "Professional presence"],
  ["Productivity", "React", "Complete", "Streamlined tasks"],
  ["Utility", "React", "Complete", "Fast calculations"],
];
const filters = [
  "All",
  "Enterprise",
  "Workflow",
  "React",
  "Node.js",
  "Automation",
  "Full Stack",
];
const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
export { slugify, projectMeta };

export default function Projects() {
  const { theme, setTheme } = useContext(Contextreact);
  const [filter, setFilter] = useState("All");
  const isDark = theme === "dark";
  const pageBgClass = isDark
    ? "bg-[radial-gradient(ellipse_at_80%_0,#17255490,transparent_38%),radial-gradient(ellipse_at_0_35%,#0f766e30,transparent_32%),#050816] text-slate-50"
    : "bg-[radial-gradient(circle_at_top_right,rgba(191,219,254,0.55),transparent_34%),radial-gradient(circle_at_0%_35%,rgba(167,243,208,0.4),transparent_32%),linear-gradient(180deg,#f8fafc_0%,#ffffff_100%)] text-slate-900";
  const navClass = isDark
    ? "border-white/10 text-slate-400"
    : "border-slate-200 text-slate-600";
  const linkClass = isDark
    ? "text-indigo-100 hover:text-cyan-200"
    : "text-slate-700 hover:text-cyan-700";
  const squareButtonClass = isDark
    ? "border-white/10 bg-white/5 text-slate-100"
    : "border-slate-200 bg-white/80 text-slate-700 shadow-sm";
  const headerCardClass = isDark
    ? "border-white/10 bg-gradient-to-br from-slate-900/90 to-violet-950/70 shadow-black/50"
    : "border-slate-200 bg-gradient-to-br from-sky-50 to-emerald-50 shadow-slate-200/70";
  const eyebrowClass = isDark ? "text-cyan-200" : "text-cyan-700";
  const subtitleClass = isDark ? "text-slate-300" : "text-slate-700";
  const statClass = isDark
    ? "border-white/10 text-slate-400"
    : "border-slate-200 text-slate-600";
  const statValueClass = isDark ? "text-white" : "text-slate-900";
  const filterActiveClass = isDark
    ? "border-cyan-300/60 bg-blue-500/25 text-white"
    : "border-cyan-300/60 bg-cyan-100 text-slate-900";
  const filterIdleClass = isDark
    ? "border-white/10 bg-white/5 text-slate-400 hover:text-white"
    : "border-slate-200 bg-white text-slate-600 hover:text-slate-900";
  const dividerClass = isDark
    ? "border-white/10 text-slate-400"
    : "border-slate-200 text-slate-600";
  const cardClass = isDark
    ? "border-white/10 bg-slate-900/85 shadow-black/20 hover:border-violet-400/60"
    : "border-slate-200 bg-white/90 shadow-slate-200/60 hover:border-violet-400/60";
  const badgeClass = isDark
    ? "border-white/20 bg-slate-950/70 text-slate-200"
    : "border-slate-200 bg-white/80 text-slate-700";
  const metaClass = isDark ? "text-slate-400" : "text-slate-600";
  const chipClass = isDark
    ? "border-white/10 bg-white/5 text-slate-300"
    : "border-slate-200 bg-slate-100 text-slate-700";
  const linkColorClass = isDark ? "text-cyan-200" : "text-cyan-700";
  const emptyStateClass = isDark
    ? "border-white/20 text-slate-400"
    : "border-slate-200 text-slate-600";

  const visible = useMemo(
    () =>
      projectData
        .map((project, index) => ({
          project,
          meta: projectMeta[index] || [
            "Web application",
            "Full Stack",
            "Complete",
            "User-focused delivery",
          ],
        }))
        .filter(
          ({ project, meta }) =>
            filter === "All" ||
            `${project.tech.join(" ")} ${meta.join(" ")}`
              .toLowerCase()
              .includes(filter.toLowerCase()),
        ),
    [filter],
  );
  return (
    <main
      className={`projects-page min-h-screen overflow-hidden pb-24 ${pageBgClass}`}
    >
      <nav
        className={`mx-auto flex h-20 w-[min(1140px,calc(100%-48px))] items-center justify-between border-b font-mono text-[11px] ${navClass}`}
      >
        <Link className={`flex items-center gap-2 ${linkClass}`} to="/">
          <FaArrowLeft /> Back to home
        </Link>
        <span className="hidden sm:inline">IVIN AUSTAN / SELECTED WORK</span>
        <button
          className={`grid h-9 w-9 place-items-center rounded-lg border ${squareButtonClass}`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
      <header className="mx-auto w-[min(1140px,calc(100%-48px))] py-16">
        <div
          className={`overflow-hidden rounded-3xl border p-8 shadow-2xl sm:p-16 ${headerCardClass}`}
        >
          <p
            className={`font-mono text-[10px] font-bold tracking-[.16em] ${eyebrowClass}`}
          >
            SELECTED PROJECTS / 2026
          </p>
          <h1 className="mt-4 text-6xl font-extrabold leading-none tracking-tighter sm:text-8xl">
            Projects
            <span className={isDark ? "text-violet-400" : "text-violet-600"}>
              .
            </span>
          </h1>
          <h2
            className={`mt-6 max-w-3xl text-lg font-medium leading-8 sm:text-2xl ${subtitleClass}`}
          >
            A collection of enterprise applications, workflow automation
            systems, and full-stack solutions I’ve designed and built.
          </h2>
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              ["20+", "Projects"],
              ["5+", "Years experience"],
              ["Enterprise", "Applications"],
              ["Workflow", "Automation"],
            ].map(([a, b]) => (
              <span
                className={`border-r pr-6 text-[10px] uppercase tracking-wider ${statClass}`}
                key={a}
              >
                <b
                  className={`mb-1 block text-xl normal-case ${statValueClass}`}
                >
                  {a}
                </b>
                {b}
              </span>
            ))}
          </div>
        </div>
      </header>
      <section className="mx-auto w-[min(1140px,calc(100%-48px))]">
        <div className="flex flex-wrap gap-2 py-5">
          {filters.map((item) => (
            <button
              className={`rounded-full border px-3 py-2 text-[11px] transition ${filter === item ? filterActiveClass : filterIdleClass}`}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className={`flex justify-between border-t py-5 font-mono text-[10px] ${dividerClass}`}
        >
          <p className={`font-bold tracking-[.16em] ${eyebrowClass}`}>
            CURATED PRODUCT LAUNCHES
          </p>
          <span>{visible.length} projects displayed</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ project, meta }, index) => (
            <article
              className={`group flex min-h-[420px] flex-col overflow-hidden rounded-2xl border shadow-xl transition hover:-translate-y-2 ${cardClass} ${index % 3 === 0 ? "lg:col-span-2" : ""}`}
              key={project.id}
            >
              <div
                className="relative h-56 overflow-hidden p-4"
                style={{
                  background: `radial-gradient(circle at 70% 25%, #ffffff55, ${project.bgcolor})`,
                }}
              >
                <div className="relative z-10 flex justify-between font-mono text-[10px]">
                  <span
                    className={`rounded-full border px-2 py-1 ${badgeClass}`}
                  >
                    <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {meta[2]}
                  </span>
                  <span>{meta[0]}</span>
                </div>
                <div
                  className={`absolute inset-x-[10%] bottom-0 h-36 rounded-t-xl border p-4 shadow-2xl ${isDark ? "border-white/25 bg-slate-950/90" : "border-slate-200 bg-white/90"}`}
                >
                  <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <i className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <i className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <b
                    className={`mt-7 block text-lg ${isDark ? "text-white" : "text-slate-900"}`}
                  >
                    {project.title}
                  </b>
                  <small className={`mt-1 block ${metaClass}`}>{meta[3]}</small>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div
                  className={`flex justify-between gap-3 font-mono text-[10px] ${metaClass}`}
                >
                  <span>{meta[0]}</span>
                  <span
                    className={`flex items-center gap-1 ${isDark ? "text-cyan-200" : "text-cyan-700"}`}
                  >
                    <FaRocket /> {meta[3]}
                  </span>
                </div>
                <h2
                  className={`mt-3 text-xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}
                >
                  {project.title}
                </h2>
                <p
                  className={`mt-2 line-clamp-3 text-xs leading-6 ${metaClass}`}
                >
                  {project.description.trim()}
                </p>
                <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span
                        className={`rounded-md border px-2 py-1 text-[9px] ${chipClass}`}
                        key={t}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    className={`flex items-center gap-2 text-xs font-bold ${linkColorClass}`}
                    to={`/projects/${slugify(project.title)}`}
                  >
                    More info <FaArrowRight />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        {!visible.length && (
          <div
            className={`mt-4 rounded-xl border border-dashed p-12 text-center ${emptyStateClass}`}
          >
            <FaCheckCircle
              className={
                isDark
                  ? "mr-2 inline text-cyan-300"
                  : "mr-2 inline text-cyan-700"
              }
            />
            No projects match this filter yet.
          </div>
        )}
      </section>
    </main>
  );
}
