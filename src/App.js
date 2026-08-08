import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  FaArrowUp,
  FaDocker,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMoon,
  FaNodeJs,
  FaReact,
  FaServer,
  FaSun,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPhp,
  SiPostgresql,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import projects from "./project.json";
import { DownloadResume } from "./utility_helper/DownloadResume";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import { Contextreact } from "./Context";

const skills = [
  ["React", FaReact],
  ["JavaScript", SiJavascript],
  ["Tailwind CSS", SiTailwindcss],
  ["Node.js", FaNodeJs],
  ["Express", SiExpress],
  ["PHP", SiPhp],
  ["PostgreSQL", SiPostgresql],
  ["MongoDB", SiMongodb],
  ["MySQL", SiMysql],
  ["Docker", FaDocker],
  ["Socket.io", SiSocketdotio],
  ["GitHub", FaGithub],
];
const jobs = [
  [
    "May 2025 — Present",
    "Software Developer",
    "Galfar Engineering & Contracting WLL Emirates",
    "Implementing new features and resolving bugs to improve enterprise software functionality, performance, and user experience.",
  ],
  [
    "Sep 2021 — May 2025",
    "Associate Software Engineer",
    "CapeStart Software Private Ltd.",
    "Built and supported web applications with React, Node, PHP, CodeIgniter, MySQL and Agile delivery practices.",
  ],
  [
    "Jan 2021 — Sep 2021",
    "Product Development Co-ordinator",
    "CapeStart Software Private Ltd.",
    "Resolved delivery challenges through detailed analysis, rigorous testing, and thoughtfully designed user-facing improvements.",
  ],
];
const primary =
  "inline-flex items-center gap-3 rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition hover:-translate-y-0.5";
const developerCode = `const developer = {
  name: "Ivin Austan",
  role: "Full Stack Engineer",
  frontend: ["React", "JavaScript", "Tailwind", "Bootstrap"],
  backend: ["Node.js", "Express", "PHP", "CodeIgniter"],
  data: ["PostgreSQL", "MongoDB", "MySQL"],
  cloudDevOps: ["Azure", "Docker", "GitHub"],
  tools: [ "jQuery", "AJAX", "Jira", "Agile","Socket.io"],
  openToWork: true
};`;
const Layout = ({ children }) => (
  <main className="min-h-screen overflow-hidden bg-slate-950 text-slate-50">
    {children}
  </main>
);
function Heading({ number, title, copy }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="text-[10px] font-extrabold tracking-[.18em] text-blue-400">
        {number}
      </p>
      <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {copy && <p className="mt-4 text-sm leading-7 text-slate-400">{copy}</p>}
    </div>
  );
}
function Home() {
  const { theme, setTheme } = useContext(Contextreact);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  useEffect(() => {
    const update = () =>
      setProgress(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100 || 0,
      );
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedCode(developerCode.slice(0, position));
      if (position >= developerCode.length) window.clearInterval(timer);
    }, 14);
    return () => window.clearInterval(timer);
  }, []);
  const scroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };
  const goProjects = () => {
    navigate("/projects");
    setOpen(false);
  };
  return (
    <Layout>
      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-blue-500 to-violet-400"
        style={{ width: `${progress}%` }}
      />
      {/* <div className="pointer-events-none absolute -right-32 top-60 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" /> */}
      <nav className="relative z-10 mx-auto flex min-h-[104px] w-[min(1240px,calc(100%-40px))] items-center justify-between py-5">
        <button
          onClick={() => scroll("home")}
          className="flex shrink-0 items-center gap-3 text-sm font-extrabold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-teal-600 text-[11px] shadow-lg shadow-blue-500/20">
            IA
          </span>
          Ivin Austan
        </button>
        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div
          className={`${open ? "flex" : "hidden"} absolute right-0 top-[84px] w-56 flex-col gap-2 rounded-2xl border border-white/10 bg-slate-900 p-3 shadow-2xl md:static md:flex md:w-auto md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          {[
            ["About", "about"],
            ["Skills", "skills"],
            ["Work", "experience"],
            ["Projects", "projects"],
            ["Contact", "contact"],
          ].map(([x, id]) => (
            <button
              key={id}
              className="rounded-lg px-3 py-2.5 text-left text-sm font-medium text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => scroll(id)}
            >
              {x}
            </button>
          ))}
          <button
            className="ml-1 grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="ml-1 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-blue-400/60 hover:bg-white/5"
            onClick={() => scroll("contact")}
          >
            Let's talk ↗
          </button>
        </div>
      </nav>
      <section
        id="home"
        className="relative mx-auto grid min-h-[calc(100vh-88px)] w-[min(1140px,calc(100%-48px))] items-center gap-12 py-16 lg:grid-cols-2"
      >
        <div>
          <p className="text-2xl font-extrabold  text-blue-500">
            HELLO, I’M IVIN PRATHISH AUSTAN A
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.04] tracking-tight sm:text-6xl">
            Building scalable software applications
            <br />
            <em className="font-display font-semibold text-teal-600">
              that drive real business impact.
            </em>
          </h1>
          <p className="mt-5 text-sm font-bold uppercase tracking-wider text-cyan-200">
            Full Stack Software Engineer
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-400">
            I turn complex enterprise workflows into scalable, dependable
            software that helps teams move faster and work smarter.
          </p>
          <p className="mt-4 text-xs font-bold text-blue-100">
            <span className="mr-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Currently at
            </span>
            Galfar Engineering &amp; Contracting WLL Emirates
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm">
            <i className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            Open to new opportunities (UAE · India)
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className={primary} onClick={goProjects}>
              View projects <FaArrowUp className="rotate-45" />
            </button>
            <button
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200"
              onClick={DownloadResume}
            >
              Download Resume ↓
            </button>
          </div>
          <div className="mt-5 flex items-center gap-2 text-slate-400">
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10"
              href="https://github.com/Ivin1998"
            >
              <FaGithub />
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10"
              href="https://www.linkedin.com/in/ivin-austan/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10"
              href="mailto:a.ivinaustan@gmail.com"
            >
              <FaEnvelope />
            </a>
            <span className="ml-2 text-[11px]">Abu Dhabi, UAE</span>
          </div>
        </div>
        <div className="relative mx-auto  w-full max-w-xl">
          <div className="absolute left-5 top-8 h-80 w-4/5 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="developer-card absolute left-0 top-2 w-[90%] overflow-hidden rounded-2xl border border-blue-300/30 bg-slate-950/90 shadow-2xl">
            <div className="flex h-11 items-center gap-2 border-b border-white/10 bg-white/5 px-4">
              <i className="h-2 w-2 rounded-full bg-rose-400" />
              <i className="h-2 w-2 rounded-full bg-amber-400" />
              <i className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="ml-3 font-mono text-[11px] text-slate-400">
                &lt;/&gt; developer.ts
              </span>
            </div>
            <pre className="h-[250px] overflow-hidden p-5 font-mono text-[11px] leading-6 text-black-500 sm:text-xs sm:leading-7">
              {typedCode}
              <span className="typing-cursor" aria-hidden="true">
                |
              </span>
            </pre>
          </div>
          <div className="absolute bottom-0 right-0 overflow-hidden rounded-[80px_80px_16px_16px]">
            <img
              className="h-96 w-76 object-cover object-top"
              src="/final.png"
              alt="Ivin Austan"
            />
          </div>
        </div>
      </section>
      <section
        id="about"
        className="mx-auto w-[min(1140px,calc(100%-48px))] border-t border-white/10 py-24"
      >
        <Heading
          number="01 / ABOUT"
          title="Built for the work behind the work."
        />
        <div className="grid gap-12 md:grid-cols-2">
          <p className="text-2xl leading-9 tracking-tight">
            I bring product thinking and engineering discipline to every project
            — from polished interfaces to reliable systems behind them.
          </p>
          <div className="text-sm leading-7 text-slate-400">
            Currently a Software Developer at Galfar Engineering &amp;
            Contracting WLL Emirates, I build and improve enterprise
            applications that make everyday work simpler and more effective.
            <div className="mt-7 flex gap-6 border-t border-white/10 pt-6">
              {[
                ["5+", "Years building"],
                ["20+", "Projects shipped"],
                ["UAE", "Based in Abu Dhabi"],
              ].map(([a, b]) => (
                <div key={a}>
                  <b className="block text-xl text-white">{a}</b>
                  <span className="text-[10px] text-slate-500">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="skills"
        className="border-y border-white/10 bg-slate-900/60 py-24"
      >
        <div className="mx-auto w-[min(1140px,calc(100%-48px))]">
          <Heading
            number="02 / TECHNOLOGIES"
            title="A practical, modern toolkit."
            copy="Tools chosen for clean interfaces, resilient services, and smooth delivery."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {skills.map(([name, Icon]) => (
              <div
                className="flex h-28 flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 transition hover:-translate-y-1 hover:border-blue-400/60"
                key={name}
              >
                <Icon className="text-2xl text-teal-600" />
                <span className="text-xs font-bold">{name}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 flex gap-2 text-xs text-slate-400">
            <FaServer className="text-cyan-400" />
            Also experienced with CodeIgniter, jQuery, Ajax, Bootstrap, Linux,
            Jira and Agile delivery.
          </p>
        </div>
      </section>
      <section
        id="experience"
        className="mx-auto w-[min(1140px,calc(100%-48px))] py-24"
      >
        <Heading
          number="04 / EXPERIENCE"
          title="A record of shipping and improving."
        />
        <div className="space-y-10 border-l border-blue-500/60 pl-6 md:ml-16">
          {jobs.map(([date, role, company, text], i) => (
            <article
              className="relative grid gap-4 md:grid-cols-[160px_1fr]"
              key={role}
            >
              <span className="absolute -left-12 grid h-8 w-11 place-items-center rounded-md border border-blue-300/40 bg-slate-900 font-mono text-[10px] text-cyan-200">
                0{i + 1}
              </span>
              <p className="font-mono text-xs text-teal-700">{date}</p>
              <div>
                <h3 className="text-lg font-bold">{role}</h3>
                <h4 className="mt-1 text-xs text-teal-600">{company}</h4>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        id="projects"
        className="mx-auto w-[min(1140px,calc(100%-48px))] py-24"
      >
        <Heading
          number="05 / FEATURED PROJECTS"
          title="Engineering outcomes, not just interfaces."
          copy="A focused selection of products where useful workflows and thoughtful architecture came first."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <article
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 transition hover:-translate-y-1 hover:border-teal-500/60"
              key={p.id}
            >
              <div
                className="h-44 p-4"
                style={{
                  background: `radial-gradient(circle at 65% 30%,#ffffff55,${p.bgcolor})`,
                }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="relative inset-0 h-full w-full object-cover"
                />
                {/* <div className="mt-7 rounded-t-lg border border-white/20 bg-slate-950/90 p-3">
                  <b className="mt-5 block text-sm">{p.title.split(" ")[0]}</b>
                </div> */}
              </div>
              <div className="p-5">
                <h3 className="font-bold">{p.title}</h3>
                <p className="mt-2 line-clamp-3 text-xs leading-6 text-slate-400">
                  {p.summary || p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1">
                  {p.tech.slice(0, 5).map((t) => (
                    <span
                      className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-slate-300"
                      key={t}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className={primary} onClick={goProjects}>
            View all projects <FaArrowUp className="rotate-45" />
          </button>
        </div>
      </section>
      <section
        id="contact"
        className="mx-auto w-[min(1140px,calc(100%-48px))] py-24"
      >
        <div className="contact-card rounded-3xl bg-gradient-to-br from-blue-900 to-teal-950 p-8 shadow-2xl sm:p-16">
          <p className="text-[10px] font-extrabold tracking-[.18em] text-cyan-200">
            06 / CONTACT
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Let’s build something
            <br />
            <em className="font-display font-semibold text-cyan-200">
              worth using.
            </em>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            Have a role, project, a product, or a difficult problem in mind? I’d
            be glad to hear about it.
          </p>
          <a
            className={`${primary} mt-7 bg-white text-slate-950`}
            href="mailto:a.ivinaustan@gmail.com"
          >
            Start a conversation <FaArrowUp className="rotate-45" />
          </a>
        </div>
      </section>
      <footer className="mx-auto flex w-[min(1140px,calc(100%-48px))] justify-between border-t border-white/10 py-6 text-[10px] text-slate-500">
        <span>© {new Date().getFullYear()} Ivin Austan</span>
        <span>React + Tailwind CSS</span>
      </footer>
    </Layout>
  );
}
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}
