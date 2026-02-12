import { PRODUCT_DETAILS } from "@/app/data/products";
import { ChevronLeft, Shield, Zap, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/Header";

export default async function ProductPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const product =
    PRODUCT_DETAILS[id as keyof typeof PRODUCT_DETAILS] ||
    Object.values(PRODUCT_DETAILS).find((p) => p.id === id);

  if (!product) return <div>Producto no encontrado</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 px-4">
      <Header />
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white bg-slate-900/40 px-3 py-1 rounded-full border border-slate-800 transition"
          >
            <ChevronLeft className="w-4 h-4" /> Volver al catálogo
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Visualización (Placeholder para tu render o foto) */}
          <div className="aspect-square bg-slate-900 rounded-[3rem] border border-slate-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10" />
            <Shield className="w-32 h-32 text-indigo-400 opacity-50" />
          </div>

          {/* Información */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl font-black mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-cyan-400 font-mono">{product.brand}</p>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              {product.fullDescription}
            </p>

            <div className="bg-slate-900/50 p-6 rounded-2xl border border-indigo-500/20">
              <h3 className="text-indigo-400 font-bold mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2" /> El toque GadgetsIA (MDI)
              </h3>
              <p className="text-sm text-slate-300 italic">
                {product.whySantaFe}
              </p>
            </div>

            <ul className="space-y-3">
              {product.specs.map((spec, i) => (
                <li key={i} className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" /> {spec}
                </li>
              ))}
            </ul>

            <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
              <span className="text-4xl font-black">
                ${product.price.toLocaleString()}
              </span>
              <a
                href={`https://wa.me/5493426115800?text=${encodeURIComponent(
                  `Hola! Quiero el producto: ${product.name}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-slate-950 px-8 py-4 rounded-xl font-black hover:bg-cyan-400 transition-colors inline-block"
              >
                LO QUIERO
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
