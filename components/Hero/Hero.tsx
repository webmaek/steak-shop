export function Hero() {
  return (
    <section className="relative h-[90vh] bg-hero bg-center bg-no-repeat bg-cover shadow-sm">
      <div className="flex items-center justify-center absolute bottom-0 right-0 p-10 bg-gray-50 rounded-tl-lg space-y-4">
        <div className="w-[450px] mr-20 flex flex-col items-start justify-center">
          <h3 className="uppercase tracking-wide text-sm text-gray-700">
            Steak Shop Offers Best Steak In Town
          </h3>
          <p className="text-3xl font-brand text-gray-800 mt-2">
            Steak Shop offers best steak in town
          </p>
          <p className="text-gray-700 text-xs font-light mt-4 break-words">
            inappropriate behavior is often laughed off as “boys will be boys,”
            women face higher conduct standards especially in the workplace.
            That&apos;s why it&apos;s crucial that, as women.
          </p>
        </div>

        <div>
          <a
            href="/menu"
            className="px-8 py-4 uppercase font-light rounded bg-transparent border border-rose-500 text-gray-700 hover:text-white hover:bg-rose-500 transition-colors ease-in-out duration-300"
          >
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
}
