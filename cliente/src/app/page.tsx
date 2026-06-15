import type { ReactElement } from 'react';

const pasos = [
  {
    numero: '01',
    titulo: 'Pedido en develop',
    descripcion: 'El cambio inicia en la rama de desarrollo.',
  },
  {
    numero: '02',
    titulo: 'Merge a main',
    descripcion: 'El pedido aprobado pasa a producción.',
  },
  {
    numero: '03',
    titulo: 'CI automático',
    descripcion: 'GitHub Actions valida formato, lint, pruebas y build.',
  },
  {
    numero: '04',
    titulo: 'CD Localhost',
    descripcion: 'El runner local recibe el despliegue automáticamente.',
  },
];

const estados = ['Repositorio conectado', 'Rama develop activa', 'CI en verde', 'CD ejecutado'];

export default function HomePage(): ReactElement {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-20">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />

        <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500 text-2xl shadow-lg shadow-orange-500/30">
              🚚
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-300">
                Bebras Delivery
              </p>
              <h1 className="text-xl font-bold">CI/CD Automático</h1>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            Runner activo
          </span>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 py-20 lg:grid-cols-2">
          <div>
            <span className="mb-5 inline-flex rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-semibold text-orange-200">
              Entrega automática desde GitHub Actions
            </span>

            <h2 className="text-5xl font-black leading-tight sm:text-6xl">
              Tu cambio viaja de <span className="text-orange-400">develop</span> a{' '}
              <span className="text-emerald-400">main</span> y se despliega solo.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Esta página demuestra el flujo de delivery del proyecto BebrasBolivia: integración
              continua, pruebas automáticas, compilación y despliegue local mediante un self-hosted
              runner.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-xl bg-white px-5 py-3 font-bold text-slate-950">
                CI aprobado
              </span>
              <span className="rounded-xl border border-white/20 px-5 py-3 font-bold text-white">
                CD Localhost
              </span>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-slate-900 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Estado del pedido</p>
                  <h3 className="text-2xl font-bold text-white">Delivery CI/CD</h3>
                </div>
                <div className="rounded-2xl bg-orange-500 px-4 py-2 text-sm font-bold">En ruta</div>
              </div>

              <div className="space-y-4">
                {estados.map((estado) => (
                  <div key={estado} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400 text-slate-950">
                      ✓
                    </span>
                    <span className="font-semibold text-slate-100">{estado}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-emerald-400/10 p-4 text-emerald-200">
                Último despliegue: ejecutado automáticamente en el runner local.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 text-slate-950 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="font-bold uppercase tracking-[0.3em] text-orange-500">Flujo de entrega</p>
            <h2 className="mt-3 text-4xl font-black">Del código al despliegue local</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {pasos.map((paso) => (
              <article
                key={paso.numero}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="text-4xl font-black text-orange-500">{paso.numero}</span>
                <h3 className="mt-4 text-xl font-bold">{paso.titulo}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{paso.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
