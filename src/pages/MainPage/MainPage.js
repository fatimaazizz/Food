import './MainPage.css';
import Food from '../../Components/Food/Food';
import Category from '../../Components/Category/Category';
import Greeting from '../../Components/Greeting/Greeting';

function MainPage() {
  return (
    <div className="main-page">
      <Greeting/>
      <Category/>
      <Food/> 
    </div>
  );
}

export default MainPage;
