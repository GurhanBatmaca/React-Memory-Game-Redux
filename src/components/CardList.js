import { useSelector,useDispatch } from "react-redux";
import { firsClick,secondClick,wrongCard } from "../redux/slices/cardsSlice";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);
    const clickIndex = useSelector(state => state.cards.clickIndex);
    const clicedItem = useSelector(state => state.cards.clicedItem);

    const dispatch = useDispatch();

    const sideEffectFunc = ({ index, card }) => {
        if( clickIndex === 0 ) {
            dispatch(firsClick( {index,card} ));
            
        } else if (clickIndex === 1)  {
            dispatch(secondClick( {index} ));
            if(clicedItem.name != card.name) {

                setTimeout(() => {
                    dispatch(wrongCard({card}))
                    console.log("hata");
                    console.log(cardList);
                },1000)
            }
  

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
