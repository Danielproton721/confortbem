import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Bed, Layers, Square, MapPin, Mail, X, Send, CheckCircle2, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Confortebem | Enxovais, Conforto e Bem-estar para o Lar" },
      {
        name: "description",
        content:
          "Confortebem: especialistas em enxovais, conforto e bem-estar. Cortinas sob medida, jogos de cama, tapetes e almofadas com curadoria premium.",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: Layers,
    title: "Cortinas Sob Medida",
    desc: "Tecidos selecionados e confecção artesanal para valorizar cada ambiente com caimento perfeito.",
  },
  {
    icon: Bed,
    title: "Jogos de Cama",
    desc: "Enxovais em algodão de alta gramatura, com toque suave e durabilidade que acompanha sua rotina.",
  },
  {
    icon: Square,
    title: "Tapetes Decorativos",
    desc: "Texturas, fibras e padrões cuidadosamente curados para compor a base de espaços acolhedores.",
  },
  {
    icon: Sparkles,
    title: "Almofadas",
    desc: "Detalhes que transformam — mix de tecidos, bordados e cores neutras para uma composição harmônica.",
  },
];

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] font-[family-name:var(--font-sans)] selection:bg-accent/20">
      {/* Header - Minimalist */}
      <header className="absolute top-0 left-0 right-0 z-20 border-b border-black/5 bg-white/10 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
          <Link to="/" className="font-[family-name:var(--font-display)] text-xl tracking-widest uppercase">
            Conforte<span className="italic font-light">bem</span>
          </Link>
          <nav className="hidden gap-10 text-[10px] uppercase tracking-[0.2em] md:flex font-medium">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Coleção</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero - Clean & White Focus */}
      <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-white">
        <img
          src={heroImage}
          alt="Sala de estar elegante"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-white/40" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-2xl">
            <div className="mb-6 h-px w-12 bg-accent animate-in slide-in-from-left duration-1000" />
            <p className="mb-4 text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">Exclusividade & Conforto</p>
            <h1 className="text-5xl leading-[1.1] md:text-7xl font-light tracking-tight">
              Design que <br />
              <span className="italic">abraça</span> o seu lar.
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-[#4a4a4a] md:text-lg font-light">
              Especialistas em enxovais e cortinas sob medida, criamos ambientes que refletem sua personalidade com elegância e bem-estar.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center justify-center border border-black bg-black px-10 py-5 text-[10px] uppercase tracking-[0.3em] text-white transition-all hover:bg-transparent hover:text-black active:scale-95"
              >
                Solicitar Atendimento
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center border border-black/10 px-10 py-5 text-[10px] uppercase tracking-[0.3em] transition-all hover:border-black active:scale-95"
              >
                Ver Coleção
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre - Pure White */}
      <section id="sobre" className="py-32 bg-white">
        <div className="mx-auto grid max-w-6xl gap-20 px-6 md:grid-cols-2 md:px-10 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">Manifesto</span>
            <h2 className="mt-6 text-4xl leading-tight md:text-5xl font-light tracking-tight">
              A arte de viver bem começa no toque.
            </h2>
            <div className="mt-10 h-px w-20 bg-black/10" />
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[#666] font-light">
            <p>
              A <strong className="text-black font-normal uppercase tracking-wider text-sm">Confortebem</strong> nasceu do desejo de transformar casas em refúgios. Com curadoria premium e confecção artesanal, cada peça é escolhida para proporcionar uma experiência sensorial única.
            </p>
            <p>
              De cortinas sob medida a jogos de cama em algodão nobre, nossa missão é unir tradição e requinte para quem não abre mão do cuidado em cada detalhe do lar.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços - White Grid */}
      <section id="servicos" className="py-32 bg-white border-y border-black/5">
        <div className="mx-auto max-w-6xl px-6 md:px-10 text-center">
          <div className="mb-20">
            <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">Nossa Curadoria</span>
            <h2 className="mt-6 text-4xl font-light md:text-5xl tracking-tight">Essenciais para o seu Lar</h2>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="group flex flex-col items-center">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-black/5 transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                  <s.icon className="h-6 w-6 stroke-[1]" />
                </div>
                <h3 className="text-lg font-normal tracking-wide uppercase">{s.title}</h3>
                <p className="mt-4 text-xs leading-relaxed text-[#888] font-light max-w-[200px] mx-auto uppercase tracking-wider">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato - White Minimalist */}
      <section id="contato" className="py-32 bg-white">
        <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-accent font-semibold">Contato</span>
          <h2 className="mt-6 text-4xl font-light md:text-5xl tracking-tight">
            Vamos planejar seu espaço juntos?
          </h2>
          <p className="mt-8 text-[#666] font-light leading-relaxed max-w-2xl mx-auto">
            Receba atendimento exclusivo. Nossa equipe está pronta para ajudar você a escolher as melhores opções para o seu conforto.
          </p>
          
          <div className="mt-16 flex flex-col items-center gap-12">
             <div className="flex flex-col md:flex-row gap-12 text-[10px] uppercase tracking-[0.3em] font-medium">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span>Garça — São Paulo</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  <span>contato@confortebem.com.br</span>
                </button>
             </div>

             <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center justify-center bg-black px-12 py-6 text-[10px] uppercase tracking-[0.4em] text-white transition-all hover:bg-black/90 active:scale-95 shadow-xl shadow-black/10"
              >
                Solicitar Catálogo Completo
              </button>
          </div>
        </div>
      </section>

      {/* Footer - White Minimalist */}
      <footer className="py-20 bg-white border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-xs">
              <p className="font-[family-name:var(--font-display)] text-xl tracking-widest uppercase mb-6">
                Conforte<span className="italic font-light">bem</span>
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#999] leading-loose">
                Curadoria premium em enxovais e decoração. Tradição e sofisticação em cada detalhe.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-20 text-[10px] uppercase tracking-[0.2em] font-medium">
              <div className="space-y-4">
                <p className="text-accent mb-6">Links</p>
                <Link to="/politica-de-privacidade" className="block hover:text-accent transition-colors">Privacidade</Link>
                <Link to="/termos-de-uso" className="block hover:text-accent transition-colors">Termos</Link>
              </div>
              <div className="space-y-4">
                <p className="text-accent mb-6">Empresa</p>
                <p className="text-[#999] font-normal leading-relaxed">
                  Voil Atelie Comercio de Enxovais <br />
                  CNPJ: 64.980.979/0001-94
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 flex flex-col md:flex-row justify-between border-t border-black/5 pt-10 text-[9px] uppercase tracking-[0.3em] text-[#bbb]">
            <p>© {new Date().getFullYear()} Confortebem. Todos os direitos reservados.</p>
            <p>Especialistas em Conforto & Bem-estar</p>
          </div>
        </div>
      </footer>



      {/* Contact Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/40 backdrop-blur-md animate-in fade-in duration-500" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg overflow-hidden rounded-sm bg-background shadow-2xl animate-in slide-in-from-bottom-8 fade-in duration-500 border border-border">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8 md:p-12">
              {!isSubmitted ? (
                <>
                  <div className="mb-10">
                    <h3 className="text-3xl font-light tracking-tight text-foreground">Solicitar Atendimento</h3>
                    <div className="mt-3 h-px w-12 bg-accent" />
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                      Deixe seus dados abaixo. Nossa equipe entrará em contato para entender seu projeto e enviar nosso catálogo.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Nome</label>
                        <input 
                          type="text" 
                          required
                          className="w-full bg-secondary/30 border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50" 
                          placeholder="Seu nome"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">WhatsApp</label>
                        <input 
                          type="tel" 
                          required
                          className="w-full bg-secondary/30 border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50" 
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">E-mail</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-secondary/30 border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted-foreground/50" 
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">Mensagem (Opcional)</label>
                      <textarea 
                        rows={2}
                        className="w-full bg-secondary/30 border-b border-border px-0 py-2 text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-muted-foreground/50" 
                        placeholder="Em que podemos ajudar?"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full group mt-4 inline-flex items-center justify-center gap-3 rounded-sm bg-foreground py-5 text-[10px] uppercase tracking-[0.3em] text-background transition-all hover:bg-foreground/90 active:scale-[0.98]"
                    >
                      <Send className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      Enviar Solicitação
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent animate-in zoom-in duration-500">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <h3 className="mt-8 text-3xl font-light">Obrigado!</h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                    Sua solicitação foi enviada com sucesso. <br /> 
                    Em breve entraremos em contato com você.
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="mt-10 text-[10px] uppercase tracking-[0.2em] text-accent hover:underline"
                  >
                    Voltar para o site
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}