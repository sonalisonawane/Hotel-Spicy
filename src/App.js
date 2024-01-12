import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

/* My App will follow below structure:
     1)Header
       -logo
       -Nav links
     2)Body
       -Search Bar
       -Restaurants Cards
         -image
         -name
         -ratings
         -cuisins
     3)Footer
         -links
         -copywrite

*/
const App = () => {
return(
    <>
    <Header/>
    <Body/>
    <Footer/>
    </>
)
};
export default App;