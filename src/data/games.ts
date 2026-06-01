import { PuzzleGames } from "@/types/game";

const puzzleGames: PuzzleGames[] = [
  {
    title: "Framed",
    href: "https://framed.wtf",
    hook: "Guess the daily movie title in as few frames as possible.",
  },
  {
    title: "Spotle",
    href: "https://spotle.io",
    hook: "Guess the artist of the day in 10 tries or less.",
  },
  {
    title: "Spotle Movies",
    href: "https://spotle.movie",
    hook: "Guess the movie of the day in 10 tries or less.",
  },
  {
    title: "FoodGuessr",
    href: "https://foodguessr.com",
    hook: "Guess where dishes are from based on their appearance and ingredients.",
    staticPreviewImage: "/images/foodguessr.png",
  },
  {
    title: "Timeguessr",
    href: "https://timeguessr.com",
    hook: "Guess the year taken and location of pictures.",
    staticPreviewImage: "/images/timeguessr.png",
  },
  {
    title: "Betweenle",
    href: "https://betweenle.com",
    hook: "Guess the secret word hidden between other words.",
  },
  {
    title: "Clues by Sam",
    href: "https://cluesbysam.com",
    hook: "Figure out who is criminal and who is innocent based on the clues given.",
  },
  {
    title: "Crosstune",
    href: "https://crosstune.io",
    hook: "A music crossword.",
  },
  {
    title: "Raddle",
    href: "https://raddle.quest",
    hook: "Fill in the ladder rungs by using the clues to transform each word into the next, getting from the first word to the last.",
  },
  {
    title: "Bandle",
    href: "https://bandle.app/menu",
    hook: "Guess the song one instrument at a time.",
  },
  {
    title: "Wordsmith",
    href: "https://wordsmith.today",
    hook: "Guess the missing words between the first and last before you run out of lives.",
  },
  {
    title: "NYTimes Crosswords",
    href: "https://www.nytimes.com/crosswords",
    hook: "Solve the daily crossword puzzles from The New York Times.",
    staticPreviewImage: "/images/nytimes-crossword.png",
  }
];
export { puzzleGames };
