const leftColMenu = [
  {
    title: "Appetizer",
    data: [
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
    ],
  },
  {
    title: "Side Dishes",
    data: [
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
    ],
  },
];

const rightColMenu = [
  {
    title: "Main Courses",
    data: [
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
    ],
  },
  {
    title: "Desserts",
    data: [
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
      {
        name: "Ham & Potato Sandwiches",
        price: "$20",
        description: "(French bread baguette, cooked ham, potato salad)",
      },
    ],
  },
];

export function MenuTable() {
  return (
    <section className="py-20 px-40">
      <div className="grid grid-cols-2 space-x-8">
        <div className="col-span-1 flex flex-col">
          {leftColMenu.map((menu) => (
            <div key={menu.title} className="my-10">
              <h4 className="text-4xl font-brand font-semibold">
                {menu.title}
              </h4>

              <ul className="mt-6">
                {menu.data.map((item, index) => (
                  <li key={index} className="space-y-2">
                    <div className="mt-2 flex items-center justify-between font-brand text-xl">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-1 flex flex-col">
          {rightColMenu.map((menu) => (
            <div key={menu.title} className="my-10">
              <h4 className="text-4xl font-brand font-semibold">
                {menu.title}
              </h4>

              <ul className="mt-6">
                {menu.data.map((item, index) => (
                  <li key={index} className="space-y-2">
                    <div className="mt-2 flex items-center justify-between font-brand text-xl">
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
