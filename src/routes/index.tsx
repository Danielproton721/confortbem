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
    <main className="min-h-screen bg-background text-foreground font-[family-name:var(--font-sans)]">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link to="/" className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-background md:text-foreground">
            Conforte<span className="italic">bem</span>
          </Link>
          <nav className="hidden gap-8 text-sm md:flex text-foreground">
            <a href="#sobre" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-accent transition-colors">Coleção</a>
            <a href="#contato" className="hover:text-accent transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Sala de estar elegante decorada com cortinas e almofadas Confortebem"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-2xl text-background">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-90">Conforto e bem-estar para o seu lar</p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl font-light">
              Conforto, elegância e bem-estar em cada detalhe.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed opacity-90 md:text-lg">
              Na Confortebem, somos especialistas em enxovais, cortinas sob medida e peças
              decorativas selecionadas para transformar sua casa em um refúgio acolhedor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center justify-center rounded-sm bg-background px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-accent active:scale-95"
              >
                Fale com um consultor
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-sm border border-background/60 px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-background/10 active:scale-95"
              >
                Conheça nossa coleção
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Sobre Nós</p>
            <h2 className="text-4xl leading-tight md:text-5xl font-light">
              Tradição, requinte e o cuidado de quem entende de lar.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A <strong className="text-foreground font-medium">Confortebem</strong> é uma brand dedicada a oferecer
              conforto e bem-estar para o lar. Operada pela <strong className="text-foreground font-medium">Voil Atelie
              Comércio de Enxovais e Decoração LTDA</strong>, atendemos famílias e arquitetos em Garça e
              região com enxovais e peças decorativas de padrão premium e atendimento próximo.
            </p>
            <p>
              Trabalhamos apenas com fornecedores de confiança e tecidos selecionados,
              garantindo qualidade que se revela no toque, na durabilidade e na beleza
              que permanece com o tempo.
            </p>
            <p className="font-medium text-foreground italic">— Confortebem, conforto que se sente em cada detalhe.</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary/40 py-24 md:py-32 border-y border-border/50">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Nossa Coleção</p>
            <h2 className="text-4xl leading-tight md:text-5xl font-light">
              Peças que compõem ambientes com personalidade.
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-sm border border-border">
            {services.map((s) => (
              <article key={s.title} className="group bg-background p-8 transition-all hover:bg-card">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-sm bg-secondary/50 text-accent transition-colors group-hover:bg-accent group-hover:text-background">
                  <s.icon className="h-6 w-6 stroke-[1.25]" />
                </div>
                <h3 className="mt-8 text-2xl font-light">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:px-10">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">Visite-nos</p>
            <h2 className="text-4xl leading-tight md:text-5xl font-light">
              Estamos próximos de você.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Receba atendimento personalizado em nosso espaço, ou preencha o formulário
              ao lado para que nossa equipe entre em contato com você.
            </p>

            <ul className="mt-10 space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Endereço</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua São João, 86 — Labienópolis<br />
                    Garça — SP, CEP 17404-308
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-secondary text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-muted-foreground hover:text-accent transition-colors text-left"
                  >
                    contato@confortebem.com.br
                  </button>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <div className="rounded-sm border border-border p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-light mb-4">Interessado em nossa coleção?</h3>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                Clique no botão abaixo para preencher seus dados e solicitar nosso catálogo completo de enxovais e decoração.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex cursor-pointer items-center justify-center rounded-sm bg-foreground px-8 py-5 text-xs uppercase tracking-[0.2em] text-background transition-all hover:opacity-90 active:scale-[0.98]"
              >
                Solicite o catálogo agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl">
                Conforte<span className="italic">bem</span>
              </p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Enxovais, conforto e bem-estar para o lar. Curadoria premium em cortinas, jogos de cama, tapetes e almofadas com foco em qualidade e requinte.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-4 uppercase tracking-widest text-xs">Empresa</p>
              <p className="leading-relaxed">
                Marca operada por <strong className="text-foreground">Voil Atelie Comercio de Enxovais e Decoracao LTDA</strong>
              </p>
              <p className="mt-2">CNPJ: 64.980.979/0001-94</p>
              <p className="mt-2">Garça — São Paulo — Brasil</p>
            </div>
            <div className="text-sm">
              <p className="font-medium text-foreground mb-4 uppercase tracking-widest text-xs">Institucional</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link to="/politica-de-privacidade" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
                <li><button onClick={() => setIsModalOpen(true)} className="hover:text-accent transition-colors">Contato e Catálogo</button></li>
              </ul>
            </div>
          </div>
          <div className="mt-16 border-t border-border pt-8 text-[10px] uppercase tracking-widest text-muted-foreground flex flex-wrap justify-between gap-4">
            <p>© {new Date().getFullYear()} Confortebem. Todos os direitos reservados.</p>
            <p>Design de Interiores & Bem-estar</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5514999999999" // TODO: Substituir pelo número real
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-110 active:scale-95 animate-bounce-subtle"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

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