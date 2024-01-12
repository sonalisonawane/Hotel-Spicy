import { swiggy_api_url } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react';


function filterData(searchText,restaurants){
  return  restaurants.filter((restaurant)=>restaurant?.info.name.toLowerCase().includes(searchText.toLowerCase()));
}

const Body = () =>{
    // We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
  const [searchText, setSearchText] = useState("");
  const [allRestaurants,setAllRestaurants] = useState([]);
  const [filteredRestaurants,setFilteredRestaurants] = useState([]);

  
  //use useEffect for one time call getRestaurants using empty dependency array.  
  useEffect(()=>{
      getRestaurants();
  },[]);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants(){
    const response = await fetch(swiggy_api_url);
    const json = await response.json();
    console.log(json?.data);

    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }



  return(
      <>
      <div className="search">
      <input type="text" placeholder="Search your Favourite Restaurant" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
      <button 
        className="searchbtn"
        onClick={() => {

          if(searchText!==""){
            // filter the data
            const filteredData = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(filteredData);
           
          }
          
       
        }}>Search
      </button>
      </div>

      <div className="body">
        { filteredRestaurants?.map((restaurant)=>{
          console.log(restaurant?.info);
          return <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}/>
      })}
      </div>
      </>
    );
    };

    export default Body;
    