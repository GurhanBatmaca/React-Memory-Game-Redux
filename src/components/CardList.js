import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { firsClick,secondClick,secondWrongCard,firstWrongCard,resetList,addScore } from "../redux/slices/cardsSlice";
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
    let remainingCards = (cardList.length /2) - clickedCards.length;

    const sideEffectFunc = ( {index, id} ) => {
        if( clickIndex === 0 ) {
            dispatch(firsClick( {index,id} ));
        } else if (clickIndex === 1)  {
            if(clicedItem !== id) {
                dispatch(secondClick( {index} ));
                setTimeout(() => {
                    dispatch(firstWrongCard());
                },1500)
                setTimeout(() => {
                    dispatch(secondClick( {index} ));
                    dispatch(secondWrongCard( {id}));
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
        <h1 className="text-center">Memory Game</h1>
            <div >
                <h3>Score: <span className={score === 0 ? "text-dark" : score > 0 ? "text-success" : "text-danger"}>{score}</span></h3>
                <h5>Remaining cards: {remainingCards}</h5>
                <div className="d-flex justify-content-center gap-2">
                    <h6>Correct +50 points &</h6>
                    <h6>Wrong -10 points</h6>
                    
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
                        <div className={ (card.adult ? "wallpaper-in" : "wallpaper-out") +" "}>
                            <img src={`https://image.tmdb.org/t/p/w780/${card.backdrop_path}`} alt={card.original_title}/>
                            <h5>{card.original_title}</h5>
                        </div>
                        <div className={ (card.adult ? "wallpaper-out" : "wallpaper-in") + " "}>                       
                            <img src="https://pyxis.nymag.com/v1/imgs/978/4d0/4b4779e1dcb86984abe55c08366f9babe7-13-empty-theater.rsquare.w700.jpg" alt="movie theater"/>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>

    </div>
  )
}
