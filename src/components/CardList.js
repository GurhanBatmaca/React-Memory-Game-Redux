import { useSelector,useDispatch } from "react-redux";
import { clickCard } from "../redux/slices/cardsSlice";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);
    const clickIndex = useSelector(state => state.cards.clickIndex);

    const dispatch = useDispatch();

    const sideEffectFunc = (param) => {
        if( clickIndex == 0 ) {
            dispatch(clickCard(param));

        } else if ( clickIndex == 1 ) {
            dispatch(clickCard(param));
            setTimeout(() => {
                console.log("olduuu");
             }, 1000);
        }       
      };

  return (
    <div className='p-5 row card-list'>
        {
            cardList.map((card,index) => (
                <div onClick={() => {sideEffectFunc(index)}} key={index} className="col-sm-2 col-6">
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
