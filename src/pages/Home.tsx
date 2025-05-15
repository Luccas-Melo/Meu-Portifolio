import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, Terminal, ChevronRight, Code2, Globe, Database, Palette, Sun, Moon, Home as HomeIcon, Briefcase, User, Phone, Menu } from 'lucide-react';
import InteractiveBg from '../components/InteractiveBg';

function Home() {
  const [text, setText] = useState('');
  const [theme, setTheme] = useState('dark');
  const [isBarraLateralOpen, setIsBarraLateralOpen] = useState(false);
  const fullText = "Transformando ideias em código";

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section-reveal').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleBarraLateral = () => {
    setIsBarraLateralOpen(prev => !prev);
  };

  const projetos = [
    {
      title: "Site de Venda de Produtos",
      description: "Uma plataforma de e-commerce completa",
      tags: ["React", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      link: "/store"
    },
    {
      title: "Sistema de Gestão",
      description: "Sistema integrado para gestão empresarial",
      tags: ["PHP", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      link: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Globe size={32} />, items: ["HTML5", "CSS3", "JavaScript", "React"] },
    { name: "Backend", icon: <Code2 size={32} />, items: ["PHP", "Node.js", "Express"] },
    { name: "Banco de Dados", icon: <Database size={32} />, items: ["MySQL", "MongoDB", "PostgreSQL"] },
    { name: "Design", icon: <Palette size={32} />, items: ["UI/UX", "Figma", "Responsive Design"] }
  ];

  return (
    <>
      {/* Botão de Troca de Tema */}
      {/* <button onClick={toggleTheme} className="theme-switch">
        {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
      </button> */}

      {/* Botão de Menu */}
      <button onClick={toggleBarraLateral} className="menu-button">
        <Menu size={24} />
      </button>

      {/* Barra Lateral */}
      <aside className={`sidebar ${!isBarraLateralOpen ? 'sidebar-collapsed' : ''}`}>
        <div className="flex items-center gap-2 mb-12">
          <Terminal size={24} className="text-purple-500" />
          <span className="font-bold">Lucas Soares</span>
        </div>
        <nav className="space-y-2">
          <a href="#home" className="nav-link" onClick={() => setIsBarraLateralOpen(false)}>
            <HomeIcon size={20} />
            <span>.home()</span>
          </a>
          <a href="#about" className="nav-link" onClick={() => setIsBarraLateralOpen(false)}>
            <User size={20} />
            <span>.sobre()</span>
          </a>
          <a href="#skills" className="nav-link" onClick={() => setIsBarraLateralOpen(false)}>
            <Code2 size={20} />
            <span>.habilidades()</span>
          </a>
          <a href="#projetos" className="nav-link" onClick={() => setIsBarraLateralOpen(false)}>
            <Briefcase size={20} />
            <span>.projetos()</span>
          </a>
          <a href="#contact" className="nav-link" onClick={() => setIsBarraLateralOpen(false)}>
            <Phone size={20} />
            <span>.contato()</span>
          </a>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className={`main-content ${!isBarraLateralOpen ? 'main-content-expanded' : ''}`}>
        {/* Seção Hero */}
        <section id="home" className="min-h-screen pt-20 px-6 section-reveal bg-white dark:bg-[#11071F] relative overflow-hidden">
          <InteractiveBg />
          <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
            <div className="terminal-line mb-4">
              <span className="font-mono">const developer = new Developer();</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Desenvolvedor Web</span>
              <br />
              <span className="font-mono">{text}</span>
              <span className="animate-pulse">_</span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-8 font-mono">
              Desenvolvendo soluções web modernas e eficientes com foco em qualidade e experiência do usuário.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/Luccas-Melo" target="_blank" rel="noopener noreferrer" 
                className="p-2 text-zinc-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lucas-soares-085537250" target="_blank" rel="noopener noreferrer"
                className="p-2 text-zinc-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lucassoaresdemeloo@email.com"
                className="p-2 text-zinc-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Seção Sobre */}
        <section id="about" className="py-20 px-6 section-reveal bg-gray-50 dark:bg-[#11071F]">
          <div className="max-w-6xl mx-auto">
            <div className="terminal-line mb-12">
              <span className="font-mono">developer.about();</span>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8 relative w-64 h-64 mx-auto md:mx-0">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-3xl -rotate-6"></div>
                  <div className="absolute inset-0 bg-purple-500/20 rounded-3xl rotate-6"></div>
                  <img 
                    src="/fotoperfil.jpeg" 
                    alt="Lucas Soares" 
                    className="relative rounded-2xl w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-3xl font-bold mb-6">
                  <span className="gradient-text">Sobre Mim</span>
                </h2>
                <div className="space-y-4 text-zinc-600 dark:text-zinc-300">
                  <p>
                    Desenvolvedor Full Stack apaixonado por criar soluções web inovadoras e eficientes. 
                    Com experiência em desenvolvimento front-end e back-end, busco sempre as melhores 
                    práticas e tecnologias mais recentes para entregar resultados excepcionais.
                  </p>
                  <p>
                    Minha abordagem combina criatividade com metodologias ágeis, garantindo 
                    entregas consistentes e de alta qualidade. Tenho forte comprometimento com 
                    código limpo, performance e experiência do usuário.
                  </p>
                </div>
                
                <div className="mt-8">
                  <div className="p-4 rounded-lg bg-white dark:bg-[#1A0B2E] border border-purple-500/20">
                    <h3 className="font-bold mb-2 text-purple-500">Competências Comportamentais</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        <span>Comunicação</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        <span>Trabalho em Equipe</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        <span>Proatividade</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 rounded-lg bg-white dark:bg-[#1A0B2E] border border-purple-500/20">
                  <h3 className="font-bold mb-4 text-xl">Experiência de Trabalho</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-purple-500/10">
                          <Code2 size={24} className="text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">Desenvolvedor Full Stack</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Desenvolvimento de aplicações web completas, desde o planejamento
                            até a implementação e manutenção.
                          </p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-purple-500/10">
                          <Globe size={24} className="text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">Desenvolvedor Frontend</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Criação de interfaces modernas e responsivas com foco em 
                            usabilidade e performance.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-white dark:bg-[#1A0B2E] border border-purple-500/20">
                  <h3 className="font-bold mb-4 text-xl">Educação & Certificações</h3>
                  <ul className="space-y-4">
                    <li>
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-purple-500/10">
                          <Terminal size={24} className="text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">Ciência de Dados</h4>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">
                            Graduação com foco em análise de dados, machine learning e estatística.
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Habilidades */}
        <section id="skills" className="py-20 px-6 section-reveal bg-white dark:bg-[#11071F]">
          <div className="max-w-6xl mx-auto">
            <div className="terminal-line mb-12">
              <span className="font-mono">developer.showSkills();</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="projeto-card p-6 rounded-lg border border-purple-500/20 bg-white dark:bg-[#1A0B2E]">
                  <div className="skill-icon mb-4">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-zinc-400 flex items-center gap-2">
                        <ChevronRight size={16} className="text-purple-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Projetos */}
        <section id="projetos" className="py-20 px-6 section-reveal bg-gray-50 dark:bg-[#11071F]">
          <div className="max-w-6xl mx-auto">
            <div className="terminal-line mb-12">
              <span className="font-mono">developer.showProjects();</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {projetos.map((projeto, index) => (
                <div key={index} className="projeto-card p-6 rounded-lg border border-purple-500/20 bg-white dark:bg-[#1A0B2E] group relative">
                  <img 
                    src={projeto.image} 
                    alt={projeto.title}
                    className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 font-mono">
                      {projeto.title}
                      <ExternalLink size={16} className="text-purple-400" />
                    </h3>
                    <p className="text-zinc-400 mb-4">{projeto.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {projeto.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 bg-purple-500/10 rounded-full text-sm text-purple-300 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to="/store"
                    className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <span className="sr-only">Ver projeto</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção de Contato */}
        <section id="contact" className="py-20 px-6 section-reveal bg-white dark:bg-[#11071F]">
          <div className="max-w-6xl mx-auto text-center">
            <div className="terminal-line justify-center mb-8">
              <span className="font-mono">developer.contact();</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Vamos Trabalhar Juntos</h2>
            <p className="text-zinc-400 mb-8 max-w-2xl mx-auto font-mono">
              Estou disponível para novos projetos e colaborações. Vamos criar algo incrível!
            </p>
            <div className="flex flex-col items-center gap-6">
              <a 
                href={`https://wa.me/5561981198763?text=${encodeURIComponent('Olá! Vi seu portfólio e gostaria de conversar sobre um projeto.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-600 transition-colors px-6 py-3 rounded-lg font-medium font-mono"
              >
                Entre em contato
                <ChevronRight size={16} />
              </a>
              <div className="flex gap-4 mt-8">
                <a href="tel:+5561981198763" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  +55 (61) 98119-8763
                </a>
                <span className="text-zinc-600">|</span>
                <a href="mailto:lucassoaresdemeloo@email.com" className="text-zinc-400 hover:text-purple-400 transition-colors">
                  lucassoaresdemeloo@email.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Rodapé */}
        <footer className="py-8 px-6 border-t border-purple-500/20 bg-white dark:bg-[#11071F]">
          <div className="max-w-6xl mx-auto text-center text-zinc-400 font-mono">
            <p> {new Date().getFullYear()} Lucas Soares // Todos os direitos reservados</p>
          </div>
        </footer>
      </main>
    </>
  );
}

export default Home;
