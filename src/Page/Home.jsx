import React, { useEffect, useState } from "react";
import CartCom from "../Component/CartCom";
import { Spinner } from "flowbite-react";

const Home = () => {
  const [data, setData] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [ inpValue , setvalue ] = useState('')
  useEffect(() => {
    const loadData = async () => {
      const apidata = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await apidata.json();
      setData(data.categories);
      setLoading(false);
    };
    loadData();
  }, []);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const visibleData = showMore ? data : data.slice(0, 6);


  const searchValue = (event)=>{

    setvalue(event.target.value);
  }

  return (
    <>
      <div className="text-center">
      <div className="my-5">
            <form action="#">
                <input type="text" name="" id="" className=" border-2 rounded-lg border-blue-300 py-4 w-1/3" value={inpValue} onChange={searchValue}/>
                <button className="relative bg-blue-600 rounded-xl py-4 px-6 text-white"> Search</button>
            </form>
        </div>
      <div className="flex justify-center">
     
       
          {loading ? (
           <Spinner
           color="success"
           size="lg"
           aria-label="Info spinner example"
         />
          ) : (
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-start">
                
              {visibleData.map((meal) => (
                <CartCom
                  key={meal.idCategory}
                  img={meal.strCategoryThumb}
                  title={meal.strCategory}
                />
              ))}
            </div>
          )}
        </div>
        <button
          onClick={toggleShowMore}
          className="my-5 rounded-md font-bold text-white bg-red-500 py-3 px-5 shadow-2xl shadow-red-600/20 "
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </>
  );
};

export default Home;
