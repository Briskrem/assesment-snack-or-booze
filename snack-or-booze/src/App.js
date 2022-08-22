import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import {AddItem} from './AddItem'
import {NotFound} from './NotFound'
import dataContext from './CreateContext'
import  {ErrorBoundary}  from "./ErrorBoundary";
import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  function addDrink(itemAdded){
    console.log(itemAdded)
    
    setDrinks(drink => [...drink , itemAdded ])
    console.log(drinks)
  }

  function addSnack(itemAdded){
    console.log(itemAdded)
    
    setSnacks(snack => [ ...snack, itemAdded])
    console.log(drinks)
  }

  
  let drinksArray;
  let snacksArray;
  useEffect(() => {
    async function getItems() {
      let items = await SnackOrBoozeApi.getItems();
     
      drinksArray = items[0][0].data
      snacksArray = items[0][1].data
      // console.log(items[0], drinksArray, snacksArray)
      setSnacks(snacksArray);
      setDrinks(drinksArray);
      setIsLoading(false);
      console.log(drinksArray)
    }
    getItems();

  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  console.log(snacks, drinks)
  console.log(drinksArray)
  return (
    <div className="App">
      <BrowserRouter>
        <dataContext.Provider value={{drinksArray, addDrink, addSnack}} >
          <NavBar />
          <ErrorBoundary >
          <Routes>
              <Route  path={'/'} element={<Home snacks={snacks} />}  />
              <Route path={'/items'} element={<Menu snacks={snacks} drinks={drinks} title="Snacks" />} /> 
              <Route  path={'/items/:id'} element={<Snack snacks={snacks} drinks={drinks} cantFind="/items" />} />
              <Route  path={'/add-item'} element={<AddItem />}  />
              <Route  path={'*'} element={<NotFound />} />
          </Routes>
          </ErrorBoundary>
        </dataContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;



//  <Route>
// <p>Hmmm. I can't seem to find what you want.</p>
// </Route>
