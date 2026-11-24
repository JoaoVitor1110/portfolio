import AgentDemo from "@/components/AgentDemo";
import {
  competencias,
  fluxoChamados,
  formacao,
  pessoa,
  projetoPessoal,
  projetos,
  trabalhoAtual,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <section className="abertura">
        <div className="abertura-texto">
          <h1>{pessoa.nome}</h1>
          <p className="papel">
            {pessoa.papel} na Rede Ápice de Educação, em {pessoa.cidade}.
          </p>
          <p className="frase">{pessoa.frase}</p>
          <div className="acoes">
            <a className="botao" href={pessoa.contatos.curriculo}>
              Baixar currículo
            </a>
            <a className="botao botao-secundario" href={`mailto:${pessoa.contatos.email}`}>
              Enviar e-mail
            </a>
          </div>
        </div>
        <AgentDemo />
      </section>

      <section id="rede-apice" className="secao">
        <h2>O que construo na Rede Ápice</h2>
        <p className="secao-intro">
          Um portal que concentra RH, DHO e Departamento Pessoal, um agente de IA para atender os
          colaboradores e integrações que tiram trabalho manual entre RH, TI e financeiro. Descrevo tudo sem
          dados de colaboradores.
        </p>

        <figure className="fluxo" aria-labelledby="fluxo-legenda">
          <div className="fluxo-coluna">
            {fluxoChamados.entradas.map((e) => (
              <span key={e} className="fluxo-no">
                {e}
              </span>
            ))}
          </div>
          <div className="fluxo-seta" aria-hidden="true" />
          <div className="fluxo-coluna fluxo-meio">
            <span className="fluxo-no fluxo-no-central">{fluxoChamados.centro}</span>
          </div>
          <div className="fluxo-seta" aria-hidden="true" />
          <div className="fluxo-coluna">
            {fluxoChamados.saidas.map((s) => (
              <span key={s} className="fluxo-no">
                {s}
              </span>
            ))}
          </div>
          <figcaption id="fluxo-legenda">
            Os dados entram uma vez no portal. Dele saem os indicadores da diretoria, os chamados e as
            credenciais da TI e os arquivos prontos para os sistemas de folha e de despesas.
          </figcaption>
        </figure>

        <div className="trabalhos">
          {trabalhoAtual.map((t) => (
            <article key={t.titulo} className="trabalho">
              <h3>{t.titulo}</h3>
              <p className="trabalho-resumo">{t.resumo}</p>
              <ul>
                {t.pontos.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className="stack">{t.stack.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="secao">
        <h2>Projetos para clientes</h2>
        <p className="secao-intro">Automações e BI que fiz como freelancer entre fevereiro de 2025 e agosto de 2026.</p>
        <ul className="projetos">
          {projetos.map((p) => (
            <li key={p.slug}>
              <a href={`/projetos/${p.slug}`} className="projeto">
                <span className="projeto-titulo">{p.titulo}</span>
                <span className="projeto-resultado">{p.resultado}</span>
                <span className="projeto-cliente">{p.cliente}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="pessoal">
          <h3>{projetoPessoal.titulo}</h3>
          <p>{projetoPessoal.descricao}</p>
          <p className="stack">{projetoPessoal.stack.join(", ")}</p>
        </div>
      </section>

      <section className="secao secao-dupla">
        <div>
          <h2>Sobre mim</h2>
          {pessoa.sobre.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div>
          <h2>Ferramentas</h2>
          <dl className="competencias">
            {competencias.map((c) => (
              <div key={c.grupo}>
                <dt>{c.grupo}</dt>
                <dd>{c.itens.join(", ")}</dd>
              </div>
            ))}
          </dl>
          <h2 className="h2-menor">Formação</h2>
          <ul className="formacao">
            {formacao.map((f) => (
              <li key={f.curso}>
                <strong>{f.curso}</strong>, {f.onde}, {f.quando}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="secao contato">
        <h2>Vamos conversar</h2>
        <p>Estou aberto a vagas de estágio e júnior em dados, IA e automação, em São Paulo ou remoto.</p>
        <ul className="contatos">
          <li>
            <a href={`mailto:${pessoa.contatos.email}`}>{pessoa.contatos.email}</a>
          </li>
          <li>
            <a href={pessoa.contatos.whatsapp}>WhatsApp</a>
          </li>
          <li>
            <a href={pessoa.contatos.linkedin}>LinkedIn</a>
          </li>
          <li>
            <a href={pessoa.contatos.github}>GitHub</a>
          </li>
        </ul>
      </section>
    </>
  );
}
