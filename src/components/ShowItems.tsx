import FilterComponent from "./data/FilterAllItems";


const ShowItems =({data}:any)=>{

  return(
    <section>
      <FilterComponent items={data} />
    </section>
    )
};

export default ShowItems; 