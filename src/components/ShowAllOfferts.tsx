import { useEffect, useState } from "react";
import { dataOffer } from "./data/offferData";

const ShowAllOfferts = () => {
  const [offertIndex, setOffertIndex] = useState(0);
  const data = dataOffer[offertIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setOffertIndex((offertIndex + 1) % dataOffer.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [offertIndex]);

  return (
   
      <section className="overflow-hidden flex flex-col-reverse  bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <div className="h-[140px] ">
              <p className="text-xl hidden sm:block font-semibobold text-left text-gray-900 md:text-xl">
                Oferta de Temporada
              </p>
              <span className="text-2xl font-bold text-left text-gray-900 md:text-4xl ">
                {data.title}
              </span>
            </div>

            <p className="hidden text-gray-500 text-left md:mt-4 md:block px-3 h-[240px] overflow-scroll">
              {data.description}
            </p>

            <div className="-mt-20 md:mt-8">
              <a
                href={`/ofertas/${data.slug}`}
                className="inline-block rounded bg-red-400 px-12 py-3 text-sm font-medium text-white transition  focus:outline-none focus:ring focus:ring-yellow-400"
              >
                ver esta oferta
              </a>
              <div className="flex justify-center items-center gap-3 pt-4">
              {dataOffer.map((_, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setOffertIndex(index);
                  }}
                  className={`cursor-pointer relative size-6 ${offertIndex === index ? "bg-red-400" : "bg-slate-600"} rounded-full`}
                >
                  
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
        <div className="relative ">
          <div className="size-[120px] absolute z-10 -bottom-10 -left-4 sm:-left-10  bg-white rounded-full">
          <img  src="public/dummyPhoto/logoDummyremovebg.png" alt="" />
          </div>
          <p className="text-2xl sm:hidden  font-semibobold text-center text-gray-900 md:text-xl">
                Oferta de Temporada
              </p>
          <img
          alt=""
          src={data.heroImage}
          className=" h-full w-full object-cover sm:h-[calc(100%_-_4rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
        
        </div>
      
      </section>
   
  );
};

export default ShowAllOfferts;
