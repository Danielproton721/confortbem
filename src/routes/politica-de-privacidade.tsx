import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Confortebem" },
      { name: "description", content: "Política de Privacidade da Confortebem (Voil Atelie Comercio de Enxovais e Decoracao LTDA) em conformidade com a LGPD." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Link to="/" className="text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-accent">← Voltar</Link>
        <h1 className="mt-8 text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-muted-foreground">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>

        <div className="prose prose-neutral mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            A marca <strong className="text-foreground">Confortebem</strong>, operada por
            <strong className="text-foreground"> Voil Atelie Comércio de Enxovais e Decoração LTDA</strong>,
            inscrita no CNPJ sob nº 64.980.979/0001-94, com sede à Rua São João, 86, Labienópolis, Garça/SP,
            CEP 17404-308 ("Confortebem", "nós"), valoriza a privacidade de seus visitantes e clientes e
            está comprometida com a proteção dos dados pessoais em conformidade com a Lei nº 13.709/2018
            (Lei Geral de Proteção de Dados - LGPD).
          </p>

          <h2 className="text-2xl text-foreground">1. Dados que coletamos</h2>
          <p>
            Coletamos apenas dados estritamente necessários para o atendimento ao cliente, incluindo:
            nome, telefone, e-mail e mensagens enviadas voluntariamente por meio de nossos canais de
            contato (e-mail e formulários).
          </p>

          <h2 className="text-2xl text-foreground">2. Finalidade do tratamento</h2>
          <p>
            Os dados coletados são utilizados exclusivamente para: (i) responder às solicitações
            enviadas; (ii) prestar atendimento comercial e pós-venda; (iii) cumprir obrigações legais
            e regulatórias.
          </p>

          <h2 className="text-2xl text-foreground">3. Compartilhamento</h2>
          <p>
            A Confortebem (Voil Atelie Comércio de Enxovais e Decoração LTDA) não comercializa dados pessoais. O compartilhamento ocorre apenas quando
            necessário para cumprimento de obrigação legal ou ordem de autoridade competente.
          </p>

          <h2 className="text-2xl text-foreground">4. Cookies</h2>
          <p>
            Este site pode utilizar cookies essenciais para o funcionamento e métricas anônimas de
            navegação. O usuário poderá, a qualquer momento, configurar seu navegador para
            bloqueá-los.
          </p>

          <h2 className="text-2xl text-foreground">5. Direitos do titular</h2>
          <p>
            Nos termos da LGPD, o titular dos dados pode solicitar acesso, correção, anonimização,
            portabilidade ou exclusão de seus dados, bem como revogar consentimento. As solicitações
            devem ser enviadas para o e-mail: <strong className="text-foreground">contato@confortebem.com.br</strong>.
          </p>

          <h2 className="text-2xl text-foreground">6. Segurança</h2>
          <p>
            Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados pessoais
            contra acessos não autorizados, perda ou divulgação indevida.
          </p>

          <h2 className="text-2xl text-foreground">7. Contato do encarregado</h2>
          <p>
            Para qualquer dúvida relacionada a esta Política, entre em contato pelo e-mail
            <strong className="text-foreground"> contato@confortebem.com.br</strong>.
          </p>
        </div>
      </div>
    </main>
  );
}