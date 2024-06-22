import React, { useEffect, useState } from "react";
import type { dataShowItems } from "./itemsData";

interface Props {
  items: dataShowItems[];
}

const FilterComponent = ({ items }: Props) => {
  const [showFilters, setShowFilters] = useState(false);
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [onSale, setOnSale] = useState(false);
  const [brands, setBrands] = useState<string[]>([]);

  const handleBrandChange = (brandSelected: string) =>
    setBrand(brandSelected === "Todos" ? "" : brandSelected);
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMinPrice(e.target.value);
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMaxPrice(e.target.value);
 

  const filteredItems = items.filter((item) => {
    const { data } = item;
    return (
      (!brand || data.brand === brand) &&
      (!minPrice || data.precio >= Number(minPrice)) &&
      (!maxPrice || data.precio <= Number(maxPrice)) &&
      (!onSale || data.oferta === onSale)
    );
  });
  useEffect(() => {
    const allBrands = new Set(items.map((item) => item.data.brand));
    // allBrands.add('Todos');
    setBrands([
      "Todos",
      ...Array.from(allBrands).sort((a, b) => (a > b ? 1 : -1)),
    ]);
  }, []);
  const filterInput = [
    {
      label: "Precio Mínimo:",
      type: "number",
      value: minPrice,
      onChange: handleMinPriceChange,
    },
    {
      label: "Precio Máximo:",
      type: "number",
      value: maxPrice,
      onChange: handleMaxPriceChange,
    },
  ];

  return (
    <section>
      <div
        className={`
      overflow-hidden 
      ${showFilters ? "h-[400px] bg-slate-200" : "h-12 bg-slate-400 "}
      gap-y-3  rounded-2xl shadow-xl  transition-all ease-in-out duration-1000 `}
      >
        <div className="flex flex-row justify-between items-center px-6">
          <h2 className="text-2xl font-semibold">
            Filtrar {items[0].collection}
          </h2>
          <MoreFilter showFilters={showFilters} setShowFilters={setShowFilters} />
        </div>
        {
          <form
            className={`
            
            animation-all ease-in-out duration-[14200ms]
          flex flex-col gap-4  p-4 `}
          >
            <div className="w-full  flex flex-row">
              <div>
                {/* <input type="text" value={brand} onChange={handleBrandChange} /> */}
                <ShowAllBrands brands={brands} brand={brand} handleBrandChange={handleBrandChange} />
              </div>
            </div>

            <div className="w-auto  flex flex-row gap-6 px-6 justify-betweesn bg-black/10 rounded-xl items-center ">
            {/* <CheckOfferta onSale={onSale} setOnSale={setOnSale} /> */}

              {/*  */}
              <CheckPrices filterInput={filterInput} />
            </div>
          </form>
        }
      </div>
      <div className=" min-h-[480px]">
  
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
          {filteredItems.map((item) => (
            <li
              key={item.id}
              className="bg-slate-300/40 rounded-2xl shadow-xl p-4 sm:w-[240px] mx-auto my-4"
            >
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FilterComponent;

const ItemCard = ({ item }:{item: dataShowItems}) => {
  const dummyPhotoAccesorio = "https://image.made-in-china.com/202f0j00jctbVmiqfgok/Mobile-Phone-Accessories-for-iPhone-Accessories-for-Samsung-iPad-iPod-Huawei-Xiaomi-Smart-Cell-Phones.webp"

  const dummyPhotoCelular = "https://imgs.search.brave.com/b1lR3L6ETYE_mTYWbwOcdrtlWxVDOdCN6SGXxiWmcRg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0bWFnLmNvbS9p/bWFnZXMvY2VsbC1w/aG9uZS1jbGlwYXJ0/LTEuanBn"
  return (
    <div className="h-[440px]  ">
      <h3 className="text-xl font-bold text-center">{item.data.title}</h3>
      <img className="w-full h-[240px] object-  mb-3 rounded-2xl" 
       src={item.collection  === "accesorios" ? dummyPhotoAccesorio : dummyPhotoCelular} alt={item.data.title} />
      
      <p className="text-sm font-light overflow-scroll h-[60px] ">{item.data.description}</p>
      <div className="flex flex-row justify-between  relative -bottom-12 ">
      <p>Precio: ${item.data.precio}</p>
      <p>Marca: {item.data.brand}</p>
      </div>
      {/* <p>{item.data.oferta ? "En Oferta" : "Precio Regular"}</p> */}
    </div>
  );
};

// const CheckOfferta = ({ onSale, setOnSale }: { onSale: boolean; setOnSale: (e: boolean) => void }) => {

//   return (
//     <div 
//     className={`w-24 bg-red-300 h-10 rounded-xl text-center  p-2  select-none cursor-pointer shadow-md font-semibold flex flex-row  gap-5 `}
//     onClick={() => setOnSale(!onSale)}
//     >
//       <p>Oferta</p>
//       {
//         onSale && (
//           <div>
//             <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
//           </div>
//         )
//       }
     
//     </div>
//   )
// }

const CheckPrices = ({ filterInput }:{ filterInput : Array<{label:string, type:string, value:string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}>} ) => {
return(
<>
  {filterInput.map(({ label, type, value, onChange }) => (
    <div key={label} className=" flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="w-20 bg-slate-100 ml-4 rounded-xl text-center  py-2 "
      />
    </div>
  ))}
  </>
)
}

const ShowAllBrands = ({ brands, brand, handleBrandChange }: { brands: string[]; brand: string; handleBrandChange: (e: string) => void }) => {
  return(
    <div className="sm:flex sm:flex-wrap grid grid-flow-col grid-rows-3  justify-start relative w-[360px] sm:w-full overflow-scroll">
                  {brands.map((showBrand) => (
                    <p
                      onClick={() => handleBrandChange(showBrand)}
                      className={`
                w-24 font-semibold 
                cursor-pointer select-none transition-all ease-in-out duration-300
                ${
                  showBrand === "Todos" &&
                  "bg-metal-gradient text-black font-bold shadow-lg from-red-200 to-red-300   "
                }
                ${
                  brand === showBrand
                    ? "bg-metal-gradient text-white shadow-lg from-red-300 to-red-500"
                    : "bg-metal-gradient from-metal-start to-metal-end shadow-md"
                } 
                py-2  mx-1 my-2 rounded-xl  text-center`}
                      key={showBrand}
                    >
                      {showBrand}
                    </p>
                  ))}
                </div>
  )
}

const MoreFilter = ({ showFilters, setShowFilters }: { showFilters: boolean; setShowFilters: (e: boolean) => void }) => {

  return (
    <div className="h-full mt-[2px] ">
            <div
              className="cursor-pointer bg-red-300 rounded-full    "
              onClick={() => setShowFilters(!showFilters)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                stroke-linejoin="round"
                className={`
                animation-all ease-in-out duration-[600ms] 
            ${showFilters ? "rotate-180" : "rotate-0"}
            icon icon-tabler icons-tabler-outline icon-tabler-caret-down`}
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 10l6 6l6 -6h-12" />
              </svg>
            </div>
          </div>
  )
}