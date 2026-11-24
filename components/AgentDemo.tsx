"use client";

import { useEffect, useState } from "react";

type Passo =
  | { tipo: "pergunta"; texto: string }
  | { tipo: "resposta"; texto: string }
  | { tipo: "chamado"; estado: "resolvido" | "encaminhado"; titulo: string; detalhe: string };

const passos: Passo[] = [
  { tipo: "pergunta", texto: "Quando cai a primeira parcela do 13º?" },
  { tipo: "resposta", texto: "Até 30 de novembro, com metade do valor. A segunda parcela sai até 20 de dezembro." },
  { tipo: "chamado", estado: "resolvido", titulo: "Resolvido pelo agente", detalhe: "Protocolo 7C1A2F · Folha" },
  { tipo: "pergunta", texto: "Meu banco de horas do dia 14 está errado." },
  { tipo: "resposta", texto: "Isso precisa de alguém do DP. Registrei o seu pedido e a resposta chega aqui no Teams." },
  { tipo: "chamado", estado: "encaminhado", titulo: "Encaminhado ao DP", detalhe: "Protocolo 9B44E0 · prazo de 24 h úteis" },
];

export default function AgentDemo() {
  const [visiveis, setVisiveis] = useState(passos.length);
  const [rodada, setRodada] = useState(0);

  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduzir) {
      setVisiveis(passos.length);
      return;
    }
    setVisiveis(0);
    const timers = passos.map((_, i) => window.setTimeout(() => setVisiveis(i + 1), 500 + i * 1100));
    return () => timers.forEach(clearTimeout);
  }, [rodada]);

  return (
    <figure className="demo">
      <div className="demo-janela" aria-live="polite">
        <div className="demo-topo">
          <span className="demo-avatar" aria-hidden="true">DP</span>
          <span>Agente do DP</span>
        </div>
        <ol className="demo-conversa">
          {passos.slice(0, visiveis).map((p, i) => {
            if (p.tipo === "chamado") {
              return (
                <li key={`${rodada}-${i}`} className={`chamado chamado-${p.estado}`}>
                  <strong>{p.titulo}</strong>
                  <span>{p.detalhe}</span>
                </li>
              );
            }
            return (
              <li key={`${rodada}-${i}`} className={`balao balao-${p.tipo}`}>
                {p.texto}
              </li>
            );
          })}
        </ol>
      </div>
      <figcaption>
        Simulação do agente que construí para o Departamento Pessoal: o que ele resolve sozinho e o que vira chamado.{" "}
        <button type="button" className="link-botao" onClick={() => setRodada((r) => r + 1)}>
          Ver de novo
        </button>
      </figcaption>
    </figure>
  );
}
