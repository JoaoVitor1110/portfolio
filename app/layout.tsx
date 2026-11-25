import type { Metadata } from "next";
import "@fontsource/schibsted-grotesk/400.css";
import "@fontsource/schibsted-grotesk/500.css";
import "@fontsource/schibsted-grotesk/700.css";
import "@fontsource/schibsted-grotesk/800.css";
import "@fontsource/schibsted-grotesk/900.css";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import "./globals.css";
import { pessoa } from "@/content/site";

const titulo = `${pessoa.nomeCompleto} | ${pessoa.papel}`;

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.jvsatech.com.br"),
  title: titulo,
  description: pessoa.frase,
  openGraph: {
    title: titulo,
    description: pessoa.frase,
    locale: "pt_BR",
    type: "website",
    images: ["/prints/portal-gente-gestao.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="pular" href="#conteudo">
          Pular para o conteúdo
        </a>
        <header className="cabecalho largura">
          <a href="/" className="marca">
            João Vitor Alves
          </a>
          <nav aria-label="Seções">
            <a href="/#sobre">Sobre mim</a>
            <a href="/#projetos">Projetos</a>
            <a href="/#contato">Contato</a>
            <a href={pessoa.contatos.curriculo} className="botao botao-escuro">
              Baixar currículo
            </a>
          </nav>
        </header>
        <main id="conteudo">{children}</main>
        <footer id="contato" className="contato">
          <div className="largura">
            <p className="indice">03</p>
            <h2>Vamos conversar?</h2>
            <p className="contato-texto">
              Procuro vagas de estágio e júnior em IA, dados e automação, em São Paulo ou remoto.
            </p>
            <ul className="contatos">
              <li>
                <a href={`mailto:${pessoa.contatos.email}`}>{pessoa.contatos.email}</a>
              </li>
              <li>
                <a href={pessoa.contatos.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={pessoa.contatos.github}>GitHub</a>
              </li>
              <li>
                <a href={pessoa.contatos.whatsapp}>WhatsApp</a>
              </li>
            </ul>
            <p className="assinatura">Desenvolvido por João Vitor · {pessoa.cidade}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
