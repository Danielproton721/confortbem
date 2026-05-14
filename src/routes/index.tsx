import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Bed, Layers, Square, MapPin, Mail, Phone } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voil Atelie | Enxovais, Cortinas e Decoração em Garça - SP" },
      {
        name: "description",
        content:
          "Voil Atelie: enxovais, cortinas sob medida, tapetes e almofadas decorativas. Tradição em decoração de interiores em Garça, SP.",
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
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <Link to="/" className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-background md:text-foreground">
            Voil <span className="italic">Atelie</span>
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
          alt="Sala de estar elegante decorada com cortinas e almofadas Voil Atelie"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/50 via-foreground/20 to-transparent" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-10">
          <div className="max-w-2xl text-background">
            <p className="mb-6 text-xs uppercase tracking-[0.3em] opacity-90">Atelie de Decoração — desde sempre</p>
            <h1 className="text-5xl leading-[1.05] md:text-7xl">
              Elegância e conforto que vestem o seu lar.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed opacity-90 md:text-lg">
              Somos especialistas em transformar espaços com enxovais sofisticados,
              cortinas sob medida e peças decorativas cuidadosamente selecionadas.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-sm bg-background px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-accent"
              >
                Fale com o Atelie
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-sm border border-background/60 px-8 py-4 text-sm uppercase tracking-widest text-background transition-all hover:bg-background/10"
              >
                Nossa Coleção
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
              A Voil Atelie nasceu da paixão por ambientes acolhedores e bem compostos.
              Há anos atendemos famílias e arquitetos em Garça e região, oferecendo
              enxovais e peças decorativas com padrão premium e atendimento próximo.
            </p>
            <p>
              Trabalhamos apenas com fornecedores de confiança e tecidos selecionados,
              garantindo qualidade que se revela no toque, na durabilidade e na beleza
              que permanece com o tempo.
            </p>
            <p className="font-medium text-foreground">— Voil Atelie, há tradição em cada detalhe.</p>
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
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Visite o Atelie</p>
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
                <Phone className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/5514000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent"
                  >
                    Falar com o atendimento
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-medium">E-mail</p>
                  <a
                    href="mailto:contato@voilatelie.com.br"
                    className="text-muted-foreground hover:text-accent"
                  >
                    contato@voilatelie.com.br
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://wa.me/5514000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-sm bg-foreground px-8 py-5 text-sm uppercase tracking-widest text-background transition-all hover:bg-primary"
            >
              Conversar no WhatsApp
            </a>
            <a
              href="mailto:contato@voilatelie.com.br"
              className="inline-flex items-center justify-center rounded-sm border border-foreground/20 px-8 py-5 text-sm uppercase tracking-widest text-foreground transition-all hover:bg-secondary"
            >
              Enviar E-mail
            </a>
            <div className="mt-4 overflow-hidden rounded-sm border border-border">
              <iframe
                title="Localização Voil Atelie"
                src="https://www.google.com/maps?q=Rua+S%C3%A3o+Jo%C3%A3o,+86,+Gar%C3%A7a+-+SP,+17404-308&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl">
                Voil <span className="italic">Atelie</span>
              </p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Enxovais, cortinas e decoração de interiores. Tradição em compor lares com elegância.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-3">Empresa</p>
              <p>Voil Atelie Comércio de Enxovais e Decoração LTDA</p>
              <p className="mt-1">CNPJ: 64.980.979/0001-94</p>
              <p className="mt-1">Rua São João, 86 — Garça/SP — 17404-308</p>
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
            <p>© {new Date().getFullYear()} Voil Atelie. Todos os direitos reservados.</p>
            <p>Garça — São Paulo — Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}