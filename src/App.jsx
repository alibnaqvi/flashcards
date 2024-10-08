import { useState } from 'react';
import './App.css';

function App() {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [guess, setGuess] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);

    const deck = [
        { front: "Start!", back: "Press the next arrow to start the flashcards :)" },
        { front: "What plant is known for looking perked up at night but droopy by day?", back: "Prayer Plant or Maranta", difficulty: "medium" },
        { front: "What is it called when plants develop holes or slits in the leaves as they receive more sunlight?", back: "Fenestration", difficulty: "medium" },
        { front: "When a plant needs more than 50% humidity, what kind of plant is it?", back: "Tropical", difficulty: "easy" },
        { front: "What can you do for plants to improve their ability to photosynthesize?", back: "Dust or clean off the leaves", difficulty: "easy" },
        { front: "When a plant develops pests, what is the first thing you should do?", back: "Isolate the plant from other plants", difficulty: "easy" },
        { front: "What type of plant is this?", back: "ZZ Plant", image: "src/assets/the-sill_zz-plant_bryant_mint_variant.jpg", difficulty: "medium" },
        { front: "If a plant starts to develop yellow spots in the middle of its leaves, what could be the culprit?", back: "Overwatering or fungus infection", difficulty: "medium" },
        { front: "What is more energy consuming for a plant, developing new roots or putting out flowers?", back: "Putting out flowers", difficulty: "hard" },
        { front: "What indoor plant is the best for purifying air, as tested by NASA?", back: "English Ivy", difficulty: "hard" },
        { front: "What is an unlikely booster for plant growth?", back: "Music!", difficulty: "hard" },
    ];

    function handleNextClick() {
        setCurrentCard((prevCard) => {
            if (prevCard < deck.length - 1) {
                return prevCard + 1;
            } else {
                return prevCard;
            }
        });

        setIsFlipped(false);
        setIsCorrect(null);
        setGuess("");
    }

    function handlePreviousClick() {
        setCurrentCard((prevCard) => {
            if (prevCard > 0) {
                return prevCard - 1;
            } else {
                return prevCard;
            }
        });

        setIsFlipped(false);
        setIsCorrect(null);
        setGuess("");
    }

    function handleCardClick() {
        if (currentCard === 0 || isCorrect !== null) {
            setIsFlipped(!isFlipped);
        }
    }

    function handleSubmitGuess() {
        const currentAnswer = deck[currentCard].back.toLowerCase();
        const userGuess = guess.trim().toLowerCase();

        if (userGuess === currentAnswer) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    }

    const isLastCard = currentCard === deck.length - 1;
    const isFirstCard = currentCard === 0;

    return (
        <div id="root">
            <h2>The Ultimate Plant Parent!</h2>
            <h4>How good of a plant parent are you? Test all of your planty knowledge here!</h4>
            <h5>Number of cards: 10</h5>

            <br />

            {currentCard !== 0 && (
                <>
                    <input
                        type="text"
                        placeholder="Type your guess..."
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        style={{
                            borderColor: isCorrect === true ? "green" : isCorrect === false ? "red" : "green",
                        }}
                    />
                    <button type="button" onClick={handleSubmitGuess}>Submit Guess</button>
                </>
            )}

            <div
                className={`card ${isFlipped ? 'flipped' : ''} ${deck[currentCard].difficulty}`}
                onClick={handleCardClick}
                style={{ cursor: currentCard === 0 || isCorrect !== null ? "pointer" : "not-allowed" }}
            >
                <div className="front">
                    {deck[currentCard].front}
                    <br />
                    {deck[currentCard].image && (
                        <img className="image" src={deck[currentCard].image} alt="Small image for question 6" />
                    )}
                </div>
                <div className="back">{deck[currentCard].back}</div>
            </div>

            <button
                type="button"
                className="prevCard"
                onClick={handlePreviousClick}
                disabled={isFirstCard}
            >
                ⭠
            </button>

            <button
                type="button"
                className="nextCard"
                onClick={handleNextClick}
                disabled={isLastCard}
            >
                ⭢
            </button>
        </div>
    );
}

export default App;
