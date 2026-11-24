// Endereços antigos do WordPress redirecionados para as páginas novas, para não quebrar links já enviados.
const antigos = {
  "case-tga": "crm-agencia-de-empregos",
  "case-angela": "funil-de-captacao",
  "case-grafica": "orcamento-grafica",
  "case-nps": "nps-e-reputacao",
  "case-financeiro": "dashboard-financeiro",
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return Object.entries(antigos).map(([de, para]) => ({
      source: `/${de}`,
      destination: `/projetos/${para}`,
      permanent: true,
    }));
  },
};

export default nextConfig;
