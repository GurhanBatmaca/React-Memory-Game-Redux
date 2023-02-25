import { useSelector,useDispatch } from "react-redux";
import { firsClick,secondClick,wrongCard,oneWronCard,resetList,addScore } from "../redux/slices/cardsSlice";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);
    const clickIndex = useSelector(state => state.cards.clickIndex);
    const clicedItem = useSelector(state => state.cards.clicedItem);
    const score = useSelector(state => state.cards.score);
    const clickedCards = useSelector(state => state.cards.clickedCards);

    const dispatch = useDispatch();

    const sideEffectFunc = ({ index, name }) => {
        if( clickIndex === 0 ) {
            dispatch(firsClick( {index,name} ));
            console.log(cardList);                      
        } else if (clickIndex === 1)  {
            if(clicedItem !== name) {
                dispatch(secondClick( {index} ));
                setTimeout(() => {
                    dispatch(oneWronCard());
                },1000)
                setTimeout(() => {
                    dispatch(secondClick( {index} ));
                    dispatch(wrongCard({name}));
                },1000)
            } else if (clicedItem === name) {
                dispatch(secondClick( {index} ));
                dispatch(addScore());
            }
        }
      };

  return (
    <div className='p-5 '>
        <div className="p-4 text-center">
            <div>
                <h3>Score: {score}</h3>
                <h4>{clickedCards.length}</h4>
            </div>
            <button
                onClick={() => dispatch(resetList())} 
                className="btn btn-danger">
                Reset
            </button>

        </div>
        <div className="row card-list">
        {
            cardList.map((card,index) => (
                <div onClick={() => {sideEffectFunc( { index, name: card.name } )}} key={index} className="col-sm-2 col-6">
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

    </div>
  )
}
