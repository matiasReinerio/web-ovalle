"use client";

const clients = [
  { id: 1, name: "Cliente 1" },
  { id: 2, name: "Cliente 2" },
  { id: 3, name: "Cliente 3" },
  { id: 4, name: "Cliente 4" },
  { id: 5, name: "Cliente 5" },
];

export function ClientsCarousel() {
  // We repeat the client list to create an infinite scroll illusion
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients, ...clients, ...clients];

  return (
    <section className="pt-8 pb-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5 backdrop-blur-sm rounded-3xl py-6 overflow-hidden">
          <div className="relative group">
            <div 
              className="flex w-max animate-carousel group-hover:[animation-play-state:paused]"
            >
              {duplicatedClients.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex flex-shrink-0 items-center justify-center w-32 h-12 mx-6 md:mx-10 bg-slate-200 dark:bg-slate-800 rounded-xl opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                >
                  <span className="text-slate-500 dark:text-slate-400 font-display font-medium text-xs">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
