import Image from "next/image";
import clsx from "clsx";

type AboutCardProps = {
  children?: React.ReactNode;
  reversed?: boolean;
  primaryImageUrl: string;
  secondaryImageUrl?: string;
  primaryImageAlt?: string;
  secondaryImageAlt?: string;
};

export function AboutCard({
  children,
  reversed = false,
  primaryImageUrl,
  secondaryImageUrl,
  primaryImageAlt = "",
  secondaryImageAlt = "",
}: AboutCardProps) {
  return (
    <article className="h-full">
      <div className={clsx("w-full h-full px-40 grid grid-cols-2")}>
        <div
          className={clsx(
            "col-span-1 flex flex-col items-start justify-center",
            reversed ? "pl-40" : "pr-40"
          )}
        >
          <h3 className="text-5xl font-brand text-gray-800">
            Daily Food Courses with Drinks
          </h3>
          <p className="my-6 mt-10 font-light text-sm text-gray-600 w-4/5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation.
          </p>
          {children ? (
            <>{children}</>
          ) : (
            <a
              href="#"
              className="px-8 py-4 uppercase font-light rounded bg-transparent border border-rose-500 text-gray-700 hover:text-white hover:bg-rose-500 transition-colors ease-in-out duration-300"
            >
              See Full Menu
            </a>
          )}
        </div>
        <div
          className={clsx(
            "col-span-1 flex flex-col items-center justify-center",
            reversed && "order-first"
          )}
        >
          <div className="w-full h-[700px] my-auto relative">
            <Image src={primaryImageUrl} alt={primaryImageAlt} layout="fill" />
            {secondaryImageUrl && (
              <div
                className={clsx(
                  "absolute bottom-0",
                  reversed ? "-right-28" : "-left-28"
                )}
              >
                <Image
                  src={secondaryImageUrl}
                  alt={secondaryImageAlt}
                  width={570}
                  height={370}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
