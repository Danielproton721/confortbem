import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso | Confortebem" },
      { name: "description", content: "Termos de Uso do site institucional da Confortebem (Voil Atelie Comercio de Enxovais e Decoracao LTDA)." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent">← Voltar</Link>
        <h1 className="mt-8 text-5xl">Termos de Uso</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            O presente documento estabelece os Termos de Uso aplicáveis à navegação no site
            institucional da marca <strong className="text-foreground">Confortebem</strong>, operada por
            <strong className="text-foreground"> Voil Atelie Comércio de Enxovais e Decoração LTDA</strong>,
            CNPJ 64.980.979/0001-94, sediada na Rua São João, 86,
            Labienópolis, Garça/SP, CEP 17404-308.
          </p>

          <h2 className="text-2xl text-foreground">1. Objeto</h2>
          <p>
            Este site tem caráter exclusivamente institucional, destinando-se à apresentação de
            informações sobre a empresa, seus produtos e serviços, bem como à disponibilização de
            canais de contato. Não há, neste site, qualquer funcionalidade de venda online.
          </p>

          <h2 className="text-2xl text-foreground">2. Propriedade intelectual</h2>
          <p>
            Todo o conteúdo apresentado — textos, imagens, marca, identidade visual e elementos
            gráficos — é de titularidade exclusiva da Confortebem / Voil Atelie Comércio de Enxovais e Decoração LTDA ou de terceiros licenciantes,
            sendo proibida sua reprodução, total ou parcial, sem autorização prévia e por escrito.
          </p>

          <h2 className="text-2xl text-foreground">3. Uso adequado</h2>
          <p>
            O usuário compromete-se a utilizar o site de forma ética, em conformidade com a
            legislação vigente, abstendo-se de praticar atos que possam comprometer a integridade
            do serviço, de outros usuários ou da própria Confortebem.
          </p>

          <h2 className="text-2xl text-foreground">4. Limitação de responsabilidade</h2>
          <p>
            A Confortebem envida seus melhores esforços para manter as informações atualizadas e
            corretas, mas não se responsabiliza por eventuais imprecisões, indisponibilidades
            temporárias ou danos decorrentes do uso indevido do site.
          </p>

          <h2 className="text-2xl text-foreground">5. Links externos</h2>
          <p>
            Este site pode conter links para páginas de terceiros. A Confortebem não se
            responsabiliza pelo conteúdo, políticas ou práticas de privacidade desses sites.
          </p>

          <h2 className="text-2xl text-foreground">6. Alterações</h2>
          <p>
            Estes Termos podem ser alterados a qualquer momento, sendo recomendada a consulta
            periódica. O uso continuado do site após alterações implica aceitação tácita das
            novas condições.
          </p>

          <h2 className="text-2xl text-foreground">7. Foro</h2>
          <p>
            Fica eleito o foro da Comarca de Garça/SP para dirimir quaisquer controvérsias
            decorrentes destes Termos, com renúncia a qualquer outro, por mais privilegiado que seja.
          </p>
        </div>
      </div>
    </main>
  );
}