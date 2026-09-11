import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Die from "../Die/Die";
import type { DieData } from "../../types";
import {
  generateId,
  generateRandomNumber,
  generateRandomNumbers,
} from "../../utils/util";

const DICE_COUNT = 10;
const MIN_DIE_VALUE = 1;
const MAX_DIE_VALUE = 6;
const CONFETTI_DURATION = 5000;
const CONFETTI_INTERVAL = 200;
const CONFETTI_PARTICLE_COUNT = 30;

function checkWinning(dice: DieData[]): boolean {
  if (dice.length === 0) return false;

  const firstDieValue = dice[0].value;

  return dice.every((die) => die.isHeld && die.value === firstDieValue);
}

function generateInitialDice(): DieData[] {
  return generateRandomNumbers(DICE_COUNT, MIN_DIE_VALUE, MAX_DIE_VALUE).map(
    (number) => ({
      id: generateId(),
      value: number,
      isHeld: false,
    }),
  );
}

export default function Main() {
  const [dice, setDice] = useState<DieData[]>(generateInitialDice());

  const isWon = checkWinning(dice);

  // Confetti effect when the game is won
  useEffect(() => {
    if (!isWon) return;

    const intervalId = setInterval(() => {
      confetti({
        particleCount: CONFETTI_PARTICLE_COUNT,
        spread: 90,
        startVelocity: 70,
        origin: {
          x: Math.random(),
          y: 0,
        },
        disableForReducedMotion: true,
      });
    }, CONFETTI_INTERVAL);

    // Focus on the "Reset Game" button for accessibility when the game is won
    const resetButton = document.querySelector<HTMLButtonElement>(".roll-btn");
    if (resetButton) {
      resetButton.focus();
    }

    const timeoutId = setTimeout(() => {
      clearInterval(intervalId);
    }, CONFETTI_DURATION);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [isWon]);

  function holdDie(id: string) {
    setDice((prev) =>
      prev.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die,
      ),
    );
  }

  function rollDice() {
    setDice((prev) =>
      prev.map((die) =>
        die.isHeld
          ? die
          : {
              ...die,
              value: generateRandomNumber(MIN_DIE_VALUE, MAX_DIE_VALUE),
            },
      ),
    );
  }

  function resetGame() {
    setDice(generateInitialDice());
  }

  return (
    <main>
      <div aria-live="polite" className="sr-only">
        {isWon && (
          <p>Congratulations! You won! Press "New Game" to start again.</p>
        )}
      </div>
      <h1>Tenzies</h1>

      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>

      <div className="dice-container">
        {dice.map((die) => (
          <Die
            key={die.id}
            id={die.id}
            value={die.value}
            isHeld={die.isHeld}
            onClick={() => holdDie(die.id)}
          />
        ))}
      </div>

      <button className="roll-btn" onClick={isWon ? resetGame : rollDice}>
        {isWon ? "Reset Game" : "Roll Dice"}
      </button>
    </main>
  );
}
