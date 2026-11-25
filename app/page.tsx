import {
  apice,
  colunasMatriz,
  emFormacao,
  fluxoTI,
  matriz,
  pessoa,
  projetos,
  senac,
  tga,
  type Imagem,
} from "@/content/site";

function Print({ imagem, escuro = false }: { imagem: Imagem; escuro?: boolean }) {
  return (
    <figure className={`print${escuro ? " print-escuro" : ""}`}>
      <img src={imagem.src} alt={imagem.alt} width={imagem.largura} height={imagem.altura} loading="lazy" decoding="async" />
      <figcaption>{imagem.legenda}</figcaption>
    </figure>
  );
}

function FluxoTI() {
  return (
    <figure className="print">
      <div className="painel">
        <div className="painel-topo">
          <span>Avisos à TI</span>
          <span className="painel-status">
            <span className="painel-ponto" aria-hidden="true" />
            em produção
          </span>
        </div>
        <ol>
          {fluxoTI.map((f) => (
            <li key={f.etiqueta}>
              <span className={`etiqueta etiqueta-${f.cor}`}>{f.etiqueta}</span>
              <span>{f.texto}</span>
            </li>
          ))}
        </ol>
      </div>
      <figcaption>Exemplo ilustrativo do fluxo, sem dados de colaboradores.</figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <>
      <section id="topo" className="abertura largura">
        <p className="rotulo">Portfólio · {pessoa.papel}</p>
        <h1>{pessoa.nome}</h1>
        <p className="frase">
          {pessoa.frase} {pessoa.cidade}.
        </p>
        <div className="acoes">
          <a className="botao botao-azul" href={pessoa.contatos.linkedin}>
            LinkedIn
          </a>
          <a className="botao botao-contorno" href={pessoa.contatos.github}>
            GitHub
          </a>
          <a className="botao botao-contorno" href={pessoa.contatos.whatsapp}>
            WhatsApp
          </a>
        </div>
      </section>

      <section id="sobre" className="faixa">
        <div className="largura sobre">
          <div className="sobre-texto">
            <p className="indice">01</p>
            <h2>Sobre mim</h2>
            {pessoa.sobre.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="matriz-rolagem" role="region" aria-label="Habilidades por projeto" tabIndex={0}>
            <table className="matriz">
              <caption className="so-leitor">Habilidades e os projetos em que foram usadas</caption>
              <thead>
                <tr>
                  <th scope="col">Habilidade</th>
                  {colunasMatriz.map((c) => (
                    <th scope="col" key={c}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {matriz.map((linha) => (
                  <tr key={linha.habilidade}>
                    <th scope="row">{linha.habilidade}</th>
                    {linha.usos.map((u, i) => (
                      <td key={colunasMatriz[i]}>
                        {u ? (
                          <span className="ponto" role="img" aria-label="usado" />
                        ) : (
                          <span className="ponto-vazio" role="img" aria-label="não usado" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="matriz-nota">
            Cada ponto liga uma habilidade a um projeto desta página. Em formação: {emFormacao}
          </p>
        </div>
      </section>

      <section id="projetos" className="largura projetos-secao">
        <div className="cabeca-secao">
          <p className="indice">02</p>
          <h2>Projetos</h2>
          <p>Do mais recente ao mais antigo. Primeiro o que construo na Rede Ápice, depois os projetos para clientes.</p>
        </div>

        <h3 className="periodo">{apice.periodo}</h3>
        {apice.trabalhos.map((t, i) => (
          <article key={t.titulo} className={`trabalho${i % 2 ? " trabalho-invertido" : ""}`}>
            {t.imagem ? <Print imagem={t.imagem} /> : t.fluxo ? <FluxoTI /> : null}
            <div className="trabalho-texto">
              <h4>{t.titulo}</h4>
              <p>{t.texto}</p>
              <p className="stack">{t.stack}</p>
            </div>
          </article>
        ))}
        <div className="extras">
          {apice.extras.map((e) => (
            <div key={e.titulo}>
              <h4>{e.titulo}</h4>
              <p>{e.texto}</p>
            </div>
          ))}
        </div>

        <h3 className="periodo">{tga.periodo}</h3>
        <article className="destaque">
          <div className="trabalho-texto">
            <h4>{tga.titulo}</h4>
            <p>{tga.texto}</p>
            <p className="stack">{tga.stack}</p>
            <a className="botao botao-menta" href={tga.link}>
              Abrir portal.tgaempregos.com.br
            </a>
          </div>
          <Print imagem={tga.imagem} escuro />
        </article>
        <ul className="cartoes">
          {projetos.map((p) => (
            <li key={p.slug}>
              <h4>{p.titulo}</h4>
              <p>{p.curto}</p>
              <a href={`/projetos/${p.slug}`} aria-label={`Ver case: ${p.titulo}`}>
                Ver case
              </a>
            </li>
          ))}
        </ul>

        <h3 className="periodo">{senac.periodo}</h3>
        <article className="academico">
          <h4>{senac.titulo}</h4>
          <div>
            <p>{senac.texto}</p>
            <p className="stack">{senac.stack}</p>
            <a href={senac.link}>Ver no GitHub</a>
          </div>
        </article>
      </section>
    </>
  );
}
