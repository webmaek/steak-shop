export function Reservation() {
  return (
    <section className="w-full h-[600px] bg-reservation relative my-20">
      <form className="absolute -bottom-20 right-28 bg-white p-10 flex flex-col rounded shadow-xl">
        <h3 className="text-3xl font-brand text-gray-800">Reservation Form</h3>
        <div className="mt-6 flex flex-col space-y-6">
          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600">
            <label
              htmlFor="name"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600">
            <label
              htmlFor="email"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600">
            <label
              htmlFor="phone"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600">
            <label
              htmlFor="numOfPeople"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Number Of People
            </label>
            <input
              type="number"
              name="numOfPeople"
              id="numOfPeople"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
          </div>

          <div className="relative rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-rose-600 focus-within:ring-1 focus-within:ring-rose-600">
            <label
              htmlFor="date"
              className="absolute -top-2 left-2 -mt-px inline-block bg-white px-1 text-xs font-medium text-gray-900"
            >
              Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <button className="px-4 py-2 text-xs uppercase font-light rounded bg-transparent border border-rose-500 text-gray-700 hover:text-white hover:bg-rose-500 transition-colors ease-in-out duration-300">
            Make Reservation
          </button>
        </div>
      </form>
    </section>
  );
}
