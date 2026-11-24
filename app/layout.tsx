import type { Metadata } from "next";
import "@fontsource/bricolage-grotesque/500.css";
import "@fontsource/bricolage-grotesque/700.css";
import "@fontsource/bricolage-grotesque/800.css";
import "@fontsource/literata/400.css";
import "@fontsource/literata/400-italic.css";
import "@fontsource/literata/600.css";
import "./globals.css";
import { pessoa } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jvsatech.com.br"),
  title: `${pessoa.nome} | Dados e IA`,
  description: pessoa.frase,
  openGraph: {
    title: `${pessoa.nome} | Dados e IA`,
    description: pessoa.frase,
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="pular" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="cabecalho">
          <a href="/" className="marca">
            {pessoa.nome}
          </a>
          <nav aria-label="Seções">
            <a href="/#rede-apice">Trabalho atual</a>
            <a href="/#projetos">Projetos</a>
            <a href="/#contato">Contato</a>
            <a href={pessoa.contatos.curriculo} className="nav-cv">
              Baixar currículo
            </a>
          </nav>
        </header>
        <main id="conteudo">{children}</main>
        <footer className="rodape">
          <p>
            {pessoa.nome}, {pessoa.cidade}
          </p>
          <p>
            <a href={pessoa.contatos.github}>Código no GitHub</a>
          </p>
        </footer>
      </body>
    </html>
  );
}
