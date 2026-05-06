import { useState } from "react";

import {
  profile,
  metrics,
  builderArc,
  projects,
  researchThemes,
  writings,
  lookingFor,
  interests,
  outsideSlides,
} from "./data/profile";

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function MetricCard({ item, index }) {
  return (
    <article className={`metric-card metric-card-${index + 1}`}>
      <p className="metric-value">{item.value}</p>
      <h3>{item.label}</h3>
      <p>{item.detail}</p>
    </article>
  );
}


function ProjectCard({ project, index }) {
  return (
    <article className={`project-card project-card-${index % 3}`}>
      {project.image && (
        <div className="project-media-wrap">
          <img src={project.image} alt={project.title} className="project-media" />
        </div>
      )}

      <div className="card-topline">
        <span>{project.type}</span>
        <span>{project.status}</span>
      </div>

      <h3>{project.title}</h3>

      <div className="impact-box">
        <span>Impact Highlight</span>
        <strong>{project.highlight}</strong>
      </div>

      <p className="project-desc">{project.description}</p>

      <ul>
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="insight">
        <span>What it taught me</span>
        <p>{project.insight}</p>
      </div>
    </article>
  );
}

function ResearchCard({ item }) {
  return (
    <article className="research-card">
      <h3>{item.title}</h3>
      <strong>{item.highlight}</strong>
      <p>{item.text}</p>
    </article>
  );
}

function WritingCard({ item }) {
  return (
    <article className="writing-card">
      <div className="writing-topline">
        <span>{item.type}</span>
        <span>{item.date}</span>
      </div>

      <h3>{item.title}</h3>
      <p>{item.summary}</p>

      <div className="writing-tags">
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <a href={item.link} target="_blank" rel="noreferrer" className="writing-link">
       在小红书阅读 →
      </a>
    </article>
  );
}

function OutsideCarousel() {
  const [active, setActive] = useState(0);
  const current = outsideSlides[active];

  const goPrev = () => {
    setActive((prev) => (prev === 0 ? outsideSlides.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActive((prev) => (prev === outsideSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="outside-carousel">
      <div className="carousel-main">
        <img
          key={current.title}
          src={current.image}
          alt={current.title}
          className="carousel-main-image"
        />

        <div className="carousel-gradient" />

        <div className="carousel-controls">
          <button type="button" onClick={goPrev} aria-label="Previous slide">
            ←
          </button>
          <button type="button" onClick={goNext} aria-label="Next slide">
            →
          </button>
        </div>

        <div className="carousel-caption">
          <span>{current.label}</span>
          <h3>{current.title}</h3>
          <p>{current.text}</p>
        </div>
      </div>

      <div className="carousel-thumbs">
        {outsideSlides.map((item, index) => (
          <button
            type="button"
            key={item.title}
            onClick={() => setActive(index)}
            className={index === active ? "thumb active" : "thumb"}
            aria-label={`Show ${item.title}`}
          >
            <img src={item.image} alt={item.title} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main>
      <div className="noise" />
      <div className="gradient-orb orb-one" />
      <div className="gradient-orb orb-two" />

      <div className="mobile-jump-nav">
        <a href="#top">首页</a>
        <a href="#projects">项目</a>
        <a href="#research">研究</a>
        <a href="#writing">文章</a>
        <a href="#contact">联系</a>
      </div>

      <nav className="nav">
        <a href="#" className="brand">
          <span>{profile.name}</span>
          <small>{profile.cnName}</small>
        </a>
        <div className="nav-links">
          <a href="#arc">Builder Arc</a>
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#writing">Writing</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="eyebrow">{profile.headline}</div>
          <h1>{profile.heroTitle}</h1>
          <p>{profile.heroSubtitle}</p>

          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="button primary">
              联系我
            </a>

            <a 
              href={profile.xhsUrl}
              target="_blank"
              rel="noreferrer"
              className="button xhs-button"
            >
              小红书 · 野蛮VC人Tom
            </a>

            <a 
               href={profile.linkedinUrl}
               target="_blank"
               rel="noreferrer"
               className="button linkedin-button"
            >
            LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-card hero-profile-card">
          <div className="portrait-frame">
            <img src={profile.portrait} alt="Tom Wang" className="portrait-image" />
          </div>
          <div>
            <span className="card-kicker">Personal Thesis</span>
            <p>{profile.thesis}</p>
            <div className="mini-tags">
              <span>AI Tools</span>
              <span>Founder Network</span>
              <span>Frontier Tech</span>
              <span>Consumer Communities</span>
            </div>
          </div>
        </aside>
      </section>

      <section className="metrics-section">
        <SectionLabel>Signal First</SectionLabel>
        <div className="metrics-grid">
          {metrics.map((item, index) => (
            <MetricCard key={item.label} item={item} index={index} />
          ))}
        </div>
      </section>

 

      <section id="arc" className="arc-section">
        <div className="section-heading">
          <SectionLabel>Builder Arc</SectionLabel>
          <h2>我一直在寻找真实需求，然后亲自下场解决。</h2>
          <p>
          从初中卖鞋、高中卖盒饭，到大学线下社交平台和 AI 工具，
          我反复训练的是同一件事：在具体人群中发现未被满足的需求，并用轻量方式快速验证，抓住机会。
          </p>
        </div>

        <div className="arc-line">
          {builderArc.map((item, index) => (
            <article className="arc-item" key={item.title}>
              <div className="arc-dot">{index + 1}</div>
              <p className="arc-time">{item.time}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-heading wide">
          <div>
            <SectionLabel>Selected Builds & Experiments</SectionLabel>
            <h2>把真实需求做成可验证的产品、社区和工具。</h2>
          </div>
          <p>
          这些项目横跨线下社交经济、AI 金融工具、城市消费、关系管理和传统产业 AI。
          它们的共同点不是规模，而是都接触过真实用户、真实分发、真实定价和真实迭代。
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="section-heading">
          <SectionLabel>Investment Work & Research</SectionLabel>
          <h2>我关注技术如何从 demo 走向新的产业基础设施。</h2>
          <p>
             我看的不是单纯的技术热度，而是一个方向能否形成真实部署、成本下降、供应链成熟、工作流迁移和协议层沉淀。
           </p>
        </div>

        <div className="research-grid four-col">
          {researchThemes.map((item) => (
            <ResearchCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section id="writing" className="writing-section">
         <div className="section-heading wide">
           <div>
            <SectionLabel>Selected Writing & Notes</SectionLabel>
            <h2>把一线观察写成可复用的判断。</h2>
          </div>
          <p>
            这些不是正式研究报告，而是我对早期项目、AI 工具、学生 founder、投资主题和个人经历的阶段性复盘。
          </p>
        </div>

        <div className="writing-grid">
          {writings.map((item) => (
            <WritingCard key={item.title} item={item} />
          ))}
        </div>
      </section>

      <section className="looking-section">
        <div className="looking-panel">
          <div>
            <SectionLabel>What I’m Looking For</SectionLabel>
            <h2>我希望连接正在靠近真实问题的人。</h2>
          </div>

          <div className="looking-grid">
            {lookingFor.map((item) => (
              <div className="looking-card" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="outside-section">
        <div>
          <SectionLabel>Outside Work</SectionLabel>
          <h2>工作之外，我也关心这些有意思的东西。</h2>
          <p className="outside-copy">
            我对车、滑雪、golf、rugby、poker、城市消费文化和 founder dinners 都有兴趣。这些爱好塑造了我的审美、社交方式和对真实世界的感知。
          </p>

          <div className="interest-tags">
            {interests.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <OutsideCarousel />
      </section>

      <footer id="contact" className="footer">
        <div>
          <h2>Open to thoughtful conversations.</h2>
          <p>
            如果你在做早期项目、投资研究、AI 工具、校园创业、或者只是想交换一些真实的一线观察，可以直接联系我。
          </p>
        </div>
            
        <div className="footer-actions">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.xhsUrl} target="_blank" rel="noreferrer">
            小红书主页
          </a>
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          LinkedIn
          </a>
        </div>
      </footer>
    </main>
  );
}

       <div className="footer-actions">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>

        <a href={profile.xhsUrl} target="_blank" rel="noreferrer" className="footer-xhs">
            小红书主页
        </a>

          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="footer-linkedin">
           LinkedIn
          </a>
      </div>