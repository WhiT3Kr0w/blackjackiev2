const ranks = require("./ranks.json");

const images = "/images/";
const suits = ["Clubs", "Hearts", "Spades", "Diamonds"];

const getRankIndex = val => ranks.findIndex(item => item.rank === val) + 1;

const getImage = (suit, rank) => images + suit[0].toLowerCase() + getRankIndex(rank) + ".gif";

const getCards = () => {
  const deck = new Array();
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({
        suit,
        rank: rank.rank,
        value: rank.value,
        image: getImage(suit, rank.rank)
      });
    }
  }
  return deck;
};

export default getCards();
