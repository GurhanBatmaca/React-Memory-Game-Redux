import { useSelector,useDispatch } from "react-redux";
import { clickCard } from "../redux/slices/cardsSlice";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);

    const dispatch = useDispatch();

  return (
    <div className='p-5 row card-list'>
        {
            cardList.map((card,index) => (
                <div onClick={() => {dispatch(clickCard(index))}} key={index} className="col-sm-2 col-6">
                    <div className="p-2 card-top">
                        <div className={ (card.status ? "card-wall" : "card-head") +" "}>
                            <img src={card.img} />
                            <h5>{card.name}</h5>
                        </div>
                        <div className={ (card.status ? "card-head" : "card-wall") + " "}>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
