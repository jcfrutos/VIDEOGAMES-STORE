import { GameGrid } from "@/components/games/gameGrid";

export default function PC() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">Juegos para PC</h1>
      <GameGrid platform="PC" />
    </div>
  );
}
