import { useSelector,useDispatch } from "react-redux";
import { clickCard,firstCard,wrongCard,trueCard,closeToFirtCard } from "../redux/slices/cardsSlice";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);
    const clickIndex = useSelector(state => state.cards.clickIndex);
    const clicedItem = useSelector(state => state.cards.clicedItem);

    const dispatch = useDispatch();

    const sideEffectFunc = ({ index, card }) => {
        if( clickIndex === 0 ) {
            dispatch(clickCard( index ));
            
        } else if ( clicedItem === 1 ) {
            dispatch(clickCard( index ));

        }
      };

  return (
    <div className='p-5 row card-list'>
        {
            cardList.map((card,index) => (
                <div onClick={() => {sideEffectFunc( { index,card } )}} key={index} className="col-sm-2 col-6">
                    <div className="p-2 card-top">
                        <div className={ (card.status ? "card-wall" : "card-head") +" "}>
                            <img src={card.img} alt={card.name}/>
                            <h5>{card.name}</h5>
                        </div>
                        <div className={ (card.status ? "card-head" : "card-wall") + " "}>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg" alt="pokemon"/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
