import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { firsClick,secondClick,wrongCard,oneWronCard,resetList,addScore } from "../redux/slices/cardsSlice";
import { fetchList } from "../service/service";

export const CardList = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchList());
    },[]);

    const cardList = useSelector(state => state.cards.cardList);
    const clickIndex = useSelector(state => state.cards.clickIndex);
    const clicedItem = useSelector(state => state.cards.clicedItem);
    const score = useSelector(state => state.cards.score);
    const clickedCards = useSelector(state => state.cards.clickedCards);  
    let remainingCards = (cardList.length /2) - clickedCards.length

    const sideEffectFunc = ({ index, id }) => {
        if( clickIndex === 0 ) {
            dispatch(firsClick( {index,id} ));
            console.log(cardList);                      
        } else if (clickIndex === 1)  {
            if(clicedItem !== id) {
                dispatch(secondClick( {index} ));
                setTimeout(() => {
                    dispatch(oneWronCard());
                },1000)
                setTimeout(() => {
                    dispatch(secondClick( {index} ));
                    dispatch(wrongCard({id}));
                },1000)
            } else if (clicedItem === id) {
                dispatch(secondClick( {index} ));
                dispatch(addScore());
            }
        }
      };

  return (
    <div className='p-5 '>
        <div className="p-4 text-center">
            <div >
                <h3>Score: {score}</h3>
                <h5>Remaining cards: {remainingCards}</h5>
                <div className="d-flex">
                    <h6>Correct answer +50 points</h6>
                    <h6>Wrong answer -10 points</h6>
                    
                </div>
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
                <div onClick={() => {sideEffectFunc( { index, id: card.id } )}} key={index} className="col-sm-2 col-6">
                    <div className="p-2 card-top">
                        <div className={ (card.adult ? "card-wall" : "card-head") +" "}>
                            <img src={`https://image.tmdb.org/t/p/w780/${card.backdrop_path}`} alt={card.original_title}/>
                            <h5>{card.original_title}</h5>
                        </div>
                        <div className={ (card.adult ? "card-head" : "card-wall") + " "}>
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
