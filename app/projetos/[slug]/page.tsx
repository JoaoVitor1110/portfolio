import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pessoa, projetos } from "@/content/site";

export function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  return p ? { title: `${p.titulo} | ${pessoa.nome}`, description: p.resultado } : {};
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const p = projetos.find((x) => x.slug === slug);
  if (!p) notFound();

  return (
    <article className="case">
      <p className="voltar">
        <a href="/#projetos">Voltar aos projetos</a>
      </p>
      <h1>{p.titulo}</h1>
      <p className="case-cliente">{p.cliente}</p>
      <dl className="case-partes">
        <div>
          <dt>Problema</dt>
          <dd>{p.problema}</dd>
        </div>
        <div>
          <dt>O que eu fiz</dt>
          <dd>{p.solucao}</dd>
        </div>
        <div>
          <dt>Resultado</dt>
          <dd>{p.resultado}</dd>
        </div>
      </dl>
      <p className="stack">{p.stack.join(", ")}</p>
    </article>
  );
}
