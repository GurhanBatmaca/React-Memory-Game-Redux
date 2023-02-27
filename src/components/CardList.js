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

    const sideEffectFunc = ( {index, id} ) => {
        if( clickIndex === 0 ) {
            dispatch(firsClick( {index,id} ));
            console.log(cardList);                      
        } else if (clickIndex === 1)  {
            if(clicedItem !== id) {
                dispatch(secondClick( {index} ));
                setTimeout(() => {
                    dispatch(oneWronCard());
                },1500)
                setTimeout(() => {
                    dispatch(secondClick( {index} ));
                    dispatch(wrongCard( {id}));
                },1500)
            } else if (clicedItem === id) {
                dispatch(secondClick( {index} ));
                dispatch(addScore());
            }
        }
      };

  return (
    <div className='container'>
        <div className="text-center info-box mb-3 p-4">
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
        <div className="row card-list ">
        {
            cardList.map((card,index) => (
                <div onClick={() => {sideEffectFunc( { index, id: card.id } )}} key={index} className="col-6 col-sm-3 col-lg-2 pt-1">
                    <div className="card-top">
                        <div className={ (card.adult ? "card-wall" : "card-head") +" "}>
                            <img src={`https://image.tmdb.org/t/p/w780/${card.backdrop_path}`} alt={card.original_title}/>
                            <h5>{card.original_title}</h5>
                        </div>
                        <div className={ (card.adult ? "card-head" : "card-wall") + " "}>
                        <i class="fa-solid fa-video"></i>
                            <img src="https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg" alt="pokemon"/>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>

    </div>
  )
}
