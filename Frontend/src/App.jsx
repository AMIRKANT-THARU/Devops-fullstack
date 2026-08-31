import { useEffect, useState } from "react";
import "./App.css";
import { createStudent, getStudents } from "./services/studentService";

const programs = [
  { icon: "atom", tag: "STEM", title: "Science & Innovation", text: "Inquiry-led labs, robotics, coding and design thinking built into every year.", color: "mint" },
  { icon: "book", tag: "HUMANITIES", title: "Language & Literature", text: "Confident voices, curious readers and globally minded critical thinkers.", color: "blue" },
  { icon: "palette", tag: "CREATIVE ARTS", title: "Arts & Expression", text: "Studio art, theatre, music and movement in inspiring creative spaces.", color: "peach" },
];

const events = [
  { day: "14", month: "SEP", title: "Open Campus Morning", meta: "9:00 AM · Main Campus", tone: "gold" },
  { day: "21", month: "SEP", title: "Founders' Day Showcase", meta: "4:30 PM · Griffin Hall", tone: "blue" },
  { day: "05", month: "OCT", title: "Community Sports Festival", meta: "10:00 AM · Athletics Field", tone: "green" },
];

const Icon = ({ name, size = 20 }) => {
  const paths = {
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>, play: <path d="m9 7 8 5-8 5Z"/>,
    atom: <><circle cx="12" cy="12" r="1"/><path d="M20.2 12c0 2.2-3.7 4-8.2 4S3.8 14.2 3.8 12s3.7-4 8.2-4 8.2 1.8 8.2 4Z"/><path d="M16.1 19.1c-1.9 1.1-5.3-1.2-7.5-5.1S6.1 6.1 8 5s5.3 1.2 7.5 5.1 2.5 7.9.6 9Z"/><path d="M7.9 19.1C6 18 6.3 14 8.5 10.1S14.1 3.9 16 5s1.6 5.1-.6 9-5.6 6.2-7.5 5.1Z"/></>,
    book: <><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5Z"/></>,
    palette: <><path d="M12 3a9 9 0 0 0 0 18h1.5a1.5 1.5 0 0 0 0-3H12a2 2 0 0 1 0-4h3a6 6 0 0 0 0-12Z"/><circle cx="7.5" cy="10" r=".7"/><circle cx="9.5" cy="6.5" r=".7"/><circle cx="14" cy="6" r=".7"/><circle cx="17" cy="9" r=".7"/></>,
    check: <path d="m5 12 4 4L19 6"/>, menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>, close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("northstar-theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const [studentCount, setStudentCount] = useState(642);

  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("northstar-theme", theme); }, [theme]);
  useEffect(() => { getStudents().then((students) => setStudentCount(Math.max(642, students.length))).catch(() => {}); }, []);

  const submitApplication = async (event) => {
    event.preventDefault(); setFormStatus("Sending your request…");
    const data = new FormData(event.currentTarget);
    try {
      await createStudent({ name: data.get("name"), email: data.get("email"), course: data.get("course") });
      setStudentCount((count) => count + 1); setFormStatus("Thank you — our admissions team will contact you shortly."); event.currentTarget.reset();
    } catch { setFormStatus("The admissions service is offline. Please try again when the server is running."); }
  };
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  return <div className="site-shell">
    <header className="site-header">
      <button className="brand" onClick={() => scrollTo("home")} aria-label="Northstar Academy home"><span className="brand-mark"><span>✦</span></span><span className="brand-copy"><strong>Northstar</strong><small>ACADEMY</small></span></button>
      <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Primary navigation">
        <button onClick={() => scrollTo("home")}>Home</button><button onClick={() => scrollTo("about")}>Our School</button><button onClick={() => scrollTo("programs")}>Learning</button><button onClick={() => scrollTo("life")}>School Life</button><button onClick={() => scrollTo("admissions")}>Admissions</button>
      </nav>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}><Icon name={theme === "light" ? "moon" : "sun"}/></button><button className="outline-button header-visit" onClick={() => setTourOpen(true)}>Book a visit <Icon name="arrow" size={17}/></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Icon name={menuOpen ? "close" : "menu"}/></button></div>
    </header>
    <main>
      <section className="hero" id="home"><div className="hero-image" aria-hidden="true"/><div className="hero-wash"/><div className="hero-content reveal"><div className="eyebrow"><span/> Inspiring minds since 1987</div><h1>Where curiosity<br/>finds its <em>direction.</em></h1><p>Northstar is a vibrant learning community where every student is known, challenged and inspired to shape a meaningful future.</p><div className="hero-actions"><button className="primary-button" onClick={() => scrollTo("admissions")}>Discover Northstar <Icon name="arrow"/></button><button className="text-button" onClick={() => setTourOpen(true)}><span className="play"><Icon name="play" size={17}/></span> Watch our story</button></div></div>
        <div className="hero-proof"><div><strong>96%</strong><span>University<br/>acceptance</span></div><div><strong>18:1</strong><span>Student to<br/>teacher ratio</span></div><div><strong>32</strong><span>Clubs &<br/>activities</span></div></div><button className="scroll-cue" onClick={() => scrollTo("about")}><span>Scroll to explore</span><i>↓</i></button></section>
      <section className="intro section" id="about"><div className="section-kicker">THE NORTHSTAR DIFFERENCE</div><div className="intro-grid"><h2>More than a school.<br/><em>A place to belong.</em></h2><div className="intro-copy"><p>We believe remarkable learning begins with genuine connection. Our teachers see the potential in every student, creating the confidence to question, explore and grow.</p><button className="link-button" onClick={() => scrollTo("life")}>Our approach to learning <Icon name="arrow" size={18}/></button></div></div></section>
      <section className="program-section section" id="programs"><div className="section-heading"><div><span className="section-kicker">LEARNING AT NORTHSTAR</span><h2>Pathways to possibility</h2></div><p>A balanced education designed to build knowledge, character and the courage to try something new.</p></div><div className="program-grid">{programs.map((p, index) => <article className={`program-card ${p.color}`} key={p.title} style={{"--delay":`${index*100}ms`}}><div className="program-icon"><Icon name={p.icon} size={28}/></div><span>{p.tag}</span><h3>{p.title}</h3><p>{p.text}</p><button>Explore program <Icon name="arrow" size={17}/></button></article>)}</div></section>
      <section className="life-section" id="life"><div className="life-photo"><div className="photo-note"><strong>Every day, a new discovery.</strong><span>Student-led field research · Grade 9</span></div></div><div className="life-copy"><span className="section-kicker">LIFE BEYOND THE CLASSROOM</span><h2>Growing through<br/><em>every experience.</em></h2><p>Learning is everywhere at Northstar. On the field, on stage and across our community, students discover the interests and friendships that shape who they become.</p><ul><li><Icon name="check"/> 32+ clubs, teams and societies</li><li><Icon name="check"/> Outdoor education every year</li><li><Icon name="check"/> Student leadership from Grade 6</li></ul><button className="primary-button" onClick={() => scrollTo("events")}>Explore school life <Icon name="arrow"/></button></div></section>
      <section className="events section" id="events"><div className="section-heading compact"><div><span className="section-kicker">WHAT&apos;S HAPPENING</span><h2>Upcoming at Northstar</h2></div><button className="link-button">View full calendar <Icon name="arrow" size={18}/></button></div><div className="event-grid">{events.map((e) => <article className="event-card" key={e.title}><div className={`event-date ${e.tone}`}><strong>{e.day}</strong><span>{e.month}</span></div><div><h3>{e.title}</h3><p>{e.meta}</p></div><button aria-label={`View ${e.title}`}><Icon name="arrow"/></button></article>)}</div></section>
      <section className="admissions section" id="admissions"><div className="admissions-copy"><span className="section-kicker">YOUR JOURNEY STARTS HERE</span><h2>Come and see what makes<br/><em>Northstar feel different.</em></h2><p>Meet our educators, explore our campus and imagine your child thriving here.</p></div><form className="interest-form" onSubmit={submitApplication}><div className="form-row"><label>Student name<input required name="name" placeholder="Full name"/></label><label>Parent email<input required name="email" type="email" placeholder="you@example.com"/></label></div><label>Program of interest<select name="course" defaultValue=""><option value="" disabled>Select a program</option><option>Middle School</option><option>Senior School</option><option>STEM & Innovation</option><option>Creative Arts</option></select></label><button className="primary-button" type="submit">Request information <Icon name="arrow"/></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}</form></section>
    </main>
    <footer><div className="footer-brand"><span className="brand-mark">✦</span><div><strong>Northstar Academy</strong><p>Knowledge · Character · Purpose</p></div></div><div className="footer-meta"><span>{studentCount}+ learners in our community</span><span>© 2026 Northstar Academy</span></div></footer>
    {tourOpen && <div className="modal-backdrop" onMouseDown={() => setTourOpen(false)}><div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="tour-title"><button className="modal-close" onClick={() => setTourOpen(false)} aria-label="Close"><Icon name="close"/></button><span className="section-kicker">WELCOME TO NORTHSTAR</span><h2 id="tour-title">Your campus visit</h2><p>Walk our learning spaces, meet an educator and ask everything that matters to your family.</p><button className="primary-button" onClick={() => {setTourOpen(false);scrollTo("admissions")}}>Choose your program <Icon name="arrow"/></button></div></div>}
  </div>;
}
export default App;
