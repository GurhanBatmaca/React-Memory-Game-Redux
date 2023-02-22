// import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { CardList } from "./components/CardList";


function App() {

  // const cards = useSelector(state => state.cards.cardList)

  return (
    <div className="App">
      <CardList />
    </div>
  );
}

export default App;
