import { useSelector } from "react-redux";

export const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList);
  return (
    <div className='p-5 row card-list'>
        {
            cardList.map((card,index) => (
                <div key={index} className="col-sm-2 col-6">
                    <div className="p-2">
                        <div className="my-card">
                            <img src={card.img} />
                            <h5>{card.name}</h5>
                        </div>
                        <div>
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"/>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
