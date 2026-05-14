import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Bed, Layers, Square, MapPin, Mail, X, Send, CheckCircle2 } from "lucide-react";
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
    // Simulation of a successful send
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
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
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Conforto, elegância e bem-estar em cada detalhe.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed opacity-90 md:text-lg">
              Na Confortebem, somos especialistas em enxovais, cortinas sob medida e peças
              decorativas selecionadas para transformar sua casa em um refúgio acolhedor.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex cursor-pointer items-center justify-center rounded-sm bg-background px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-accent"
              >
                Fale com um consultor
              </button>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-sm border border-background/60 px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-background/10"
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
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Sobre Nós</p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Tradição, requinte e o cuidado de quem entende de lar.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A <strong className="text-foreground">Confortebem</strong> é uma brand dedicada a oferecer
              conforto e bem-estar para o lar. Operada pela <strong className="text-foreground">Voil Atelie
              Comércio de Enxovais e Decoração LTDA</strong>, atendemos famílias e arquitetos em Garça e
              região com enxovais e peças decorativas de padrão premium e atendimento próximo.
            </p>
            <p>
              Trabalhamos apenas com fornecedores de confiança e tecidos selecionados,
              garantindo qualidade que se revela no toque, na durabilidade e na beleza
              que permanece com o tempo.
            </p>
            <p className="font-medium text-foreground">— Confortebem, conforto que se sente em cada detalhe.</p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-secondary/40 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Nossa Coleção</p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Peças que compõem ambientes com personalidade.
            </h2>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article key={s.title} className="group bg-background p-8 transition-colors hover:bg-card">
                <s.icon className="h-8 w-8 stroke-[1.25] text-accent" />
                <h3 className="mt-8 text-2xl">{s.title}</h3>
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
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Visite-nos</p>
            <h2 className="text-4xl leading-tight md:text-5xl">
              Estamos próximos de você.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Receba atendimento personalizado em nosso espaço, ou entre em contato
              pelos canais abaixo. Será um prazer apresentar nossa coleção.
            </p>

            <ul className="mt-10 space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">Endereço</p>
                  <p className="text-muted-foreground">
                    Rua São João, 86 — Labienópolis<br />
                    Garça — SP, CEP 17404-308
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a
                    href="mailto:contato@confortebem.com.br"
                    className="text-muted-foreground hover:text-accent"
                  >
                    contato@confortebem.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex cursor-pointer items-center justify-center rounded-sm border border-foreground/20 px-8 py-5 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-secondary"
            >
              Solicite um catálogo por e-mail
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl">
                Conforte<span className="italic">bem</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Enxovais, conforto e bem-estar para o lar. Curadoria premium em cortinas, jogos de cama, tapetes e almofadas.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-3">Empresa</p>
              <p>
                Confortebem é uma marca operada por <strong className="text-foreground">Voil Atelie Comercio de Enxovais e Decoracao LTDA</strong>
              </p>
              <p className="mt-1">CNPJ: 64.980.979/0001-94</p>
              <p className="mt-1">Rua São João, 86 — Labienópolis — Garça/SP — CEP 17404-308</p>
              <p className="mt-1">contato@confortebem.com.br</p>
            </div>
            <div className="text-sm">
              <p className="font-medium mb-3">Institucional</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/politica-de-privacidade" className="hover:text-accent">Política de Privacidade</Link></li>
                <li><Link to="/termos-de-uso" className="hover:text-accent">Termos de Uso</Link></li>
                <li><a href="#contato" className="hover:text-accent">Contato</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
            <p>© {new Date().getFullYear()} Confortebem — Voil Atelie Comercio de Enxovais e Decoracao LTDA. Todos os direitos reservados.</p>
            <p>Garça — São Paulo — Brasil</p>
          </div>
        </div>
      </footer>

      {/* Contact Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm animate-in fade-in duration-300" 
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg overflow-hidden rounded-md bg-background shadow-2xl animate-in zoom-in-95 fade-in duration-300 border border-border">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-8 text-center">
                    <h3 className="text-2xl font-light tracking-tight text-foreground">Solicitar Atendimento</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Preencha os campos abaixo e entraremos em contato.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Nome Completo</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" 
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">WhatsApp</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" 
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">E-mail</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent" 
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Como podemos ajudar?</label>
                      <textarea 
                        rows={3}
                        className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-accent resize-none" 
                        placeholder="Descreva seu projeto ou dúvida..."
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-foreground py-4 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-foreground/90"
                    >
                      <Send className="h-3 w-3" />
                      Enviar Solicitação
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-accent animate-in zoom-in duration-500" />
                  <h3 className="mt-6 text-2xl font-light">Mensagem Enviada!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Recebemos sua solicitação. <br /> Retornaremos o contato em breve.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}/p>
          </div>
        </div>
      </footer>
    </main>
  );
}