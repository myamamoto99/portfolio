import PuzzleGameCard from "@/components/puzzleGameCard";
import { puzzleGames } from "@/data/games";
import { gameStyles } from "@/styles/games";

export default function GamesPage() {
  return (
    <section className={gameStyles.pageSection}>
      <div className={gameStyles.grid}>
        {puzzleGames.map((game) => (
          <PuzzleGameCard
            key={game.title}
            title={game.title}
            href={game.href}
            hook={game.hook}
            staticPreviewImage={game.staticPreviewImage}
          />
        ))}
      </div>
    </section>
  );
}
