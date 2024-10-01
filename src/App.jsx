import{ useState } from 'react';
import './App.css'

function App() {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const deck = [
        { front: "Start!", back: "Press the next arrow to start the flashcards :)" },
        { front: "When a plant needs more than 50% humidity, what kind of plant is it?", back: "Tropical", difficulty: "easy" },
        { front: "When a plant develops pests, what is the first thing you should do?", back: "Isolate the plant from other plants", difficulty: "easy" },
        { front: "What can you do for plants to improve their ability to photosynthesize?", back: "Dust or clean off the leaves", difficulty: "easy" },
        { front: "What is an unlikely booster for plant growth?", back: "Music!", difficulty: "hard" },
        { front: "What is more energy consuming for a plant, developing new roots or putting out flowers?", back: "Putting out flowers", difficulty: "hard" },
        { front: "What indoor plant is the best for purifying air, as tested by NASA?", back: "English Ivy", difficulty: "hard" },
        { front: "What is it called when plants develop holes or slits in the leaves as they receive more sunlight?", back: "Fenestration", difficulty: "medium" },
        { front: "If a plant starts to develop yellow spots in the middle of its leaves, what could be the culprit?", back: "Overwatering or fungus infection", difficulty: "medium" },
        { front: "What plant is known for looking perked up at night but droopy by day?", back: "Prayer Plant or Maranta", difficulty: "medium" },
        { front: "What type of plant is this?", back: "ZZ Plant", image: "src/assets/the-sill_zz-plant_bryant_mint_variant.jpg", difficulty: "medium" },
    ];

    function handleCardClick() {
        setIsFlipped(!isFlipped);
    };

    function handleNextClick() {
        setCurrentCard((prevCard) => {
            let nextCard;

            do {
                nextCard = Math.floor(Math.random() * (deck.length - 1)) + 1;
            } while (nextCard === prevCard);

            return nextCard;
        });

        setIsFlipped(false);
    };

    return (
        <div id="root">
            <h2>The Ultimate Plant Parent!</h2>
            <h4>How good of a plant parent are you? Test all of your planty knowledge here!</h4>
            <h5>Number of cards: 10</h5>
            <br/>
            <div className={`card ${isFlipped ? 'flipped' : ''} ${deck[currentCard].difficulty}`} onClick={handleCardClick}>
                <div className="front">
                    {deck[currentCard].front}
                    <br/>
                    {deck[currentCard].image && (<img className="image" src={deck[currentCard].image} alt="Small image for question 6"/>)}
                </div>
                <div className="back">{deck[currentCard].back}</div>
            </div>

            <button type="button" className="nextCard" onClick={handleNextClick}>⭢</button>
        </div>
    );
}

export default App
