import { EnvelopeIcon, HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";

const contactData = [
  {
    id: 1,
    icon: HomeIcon,
    name: "California, United States",
    description: "Santa monica bullevard",
  },
  {
    id: 2,
    icon: PhoneIcon,
    name: "00 (440) 9865 562",
    description: "Mon to Fri 9am to 6pm",
  },
  {
    id: 3,
    icon: EnvelopeIcon,
    name: "support@colorlib.com",
    description: "Send us your query anytime!",
  },
];

export function ContactUs() {
  return (
    <section className="py-20 px-40">
      <div className="w-full h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.305935303!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1663592901399!5m2!1spl!2spl"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 w-full h-full"
        />
      </div>

      <div className="mt-10 flex space-x-16">
        <div className="flex flex-col">
          {contactData.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-6 space-y-2"
            >
              <div>
                <item.icon className="h-6 w-6 text-rose-600" />
              </div>

              <div className="flex flex-col">
                <h6 className="font-brand font-semibold">{item.name}</h6>
                <p className="text-gray-700 text-sm mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grow">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              placeholder="Enter your name"
            />
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              placeholder="Enter your email address"
            />
            <input
              type="text"
              name="subject"
              id="subject"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              placeholder="Enter your subject"
            />
          </form>
        </div>

        <div className="grow">
          <form className="flex flex-col">
            <textarea
              name="subject"
              id="subject"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm"
              placeholder="Enter your subject"
              rows={5}
            />
          </form>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <button
          type="button"
          className="inline-flex items-center rounded-3xl border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Send Message
        </button>
      </div>
    </section>
  );
}
