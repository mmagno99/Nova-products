
import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (!app) {
  throw new Error('No se encontró el elemento #app');
}

app.innerHTML = `
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <header class="border-b border-slate-200 bg-white">
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="/" class="text-2xl font-black tracking-tight">
          NOVA<span class="text-blue-600">.</span>
        </a>

        <span class="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
          Vanilla JS + TypeScript
        </span>
      </nav>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-12">
      <section class="mb-12 rounded-3xl bg-slate-900 px-8 py-12 text-white md:px-14">
        <p class="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
          Explora nuestra colección
        </p>

        <h1 class="max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
          Encuentra algo extraordinario.
        </h1>

        <p class="mt-5 max-w-xl text-slate-300">
          Productos, tecnología y estilo en un solo lugar.
        </p>
      </section>

      <section aria-labelledby="catalog-title">
        <div class="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p class="mb-2 text-sm font-semibold text-blue-600">
              Nuestro catálogo
            </p>
            <h2 id="catalog-title" class="text-3xl font-bold tracking-tight">
              Todos los productos
            </h2>
            <p class="mt-2 text-slate-500">
              Descubre y explora nuestra selección.
            </p>
          </div>

          <label class="block w-full md:w-80">
            <span class="sr-only">Buscar productos</span>
            <input
              id="search"
              type="search"
              placeholder="Buscar productos..."
              class="w-full rounded-xl border border-slate-200 bg-white px-5 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
        </div>

        <div id="categories" class="mb-8 flex flex-wrap gap-2"></div>

        <div id="products" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p class="font-semibold">Nuestro catálogo está listo para conectarse.</p>
            <p class="mt-2 text-sm text-slate-500">
              Próximo paso: obtener productos utilizando fetch().
            </p>
          </div>
        </div>
      </section>
    </main>

    <footer class="mt-16 border-t border-slate-200 py-8 text-center text-sm text-slate-500">
      NOVA Store · Proyecto de práctica con TypeScript
    </footer>
  </div>
`;
