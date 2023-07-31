import Card from "./Card";


const Cards = ({ cards }) => {
    console.log(cards);

    return <div>
        <ul>
            {cards.map((card, idx) => (
                <li key={idx}>< Card key={idx} name={card.name} language={card.language} /></li>
            ))}
        </ul>
    </div>

}

export default Cards;
