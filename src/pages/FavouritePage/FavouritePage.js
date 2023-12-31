import './FavouritePage.css';
import FoodItem from '../../Components/FoodItem/FoodItem';
import foodData from '../../Data/FoodItem.json'


function FavouritePage() {
    const favouriteItems=foodData.filter(food =>food.liked===true);
  return (
    <div className="favourite-page">
      <div className='Food-caontainer'>
      {favouriteItems.length!==0?favouriteItems.map(newfood =>(<FoodItem key={newfood.id} food={newfood}/> )):'No Favourite item Found'
       }
       </div>
    </div>
  );
}

export default FavouritePage;
