import { useState } from "react";
import {data} from "./data";
import Clothes from "./Clothes";
import Buttons from "./Buttons";


function Home() {
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
      const newClothes = data.filter(element => element.searchTerm === searchTerm);
      setClothes(newClothes);
    }
    return(
      <div>
        <div className="cont">
          <h2 className="back">Free Standart Shopping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Clothes apple = {clothes}/>
      </div>
    )
}

export default Home;