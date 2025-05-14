import { GameGrid } from "@/components/games/gameGrid";

export default function Nintendo() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 MT-4 text-center">Juegos para Nintendo</h1>
      <GameGrid platform="Nintendo" />
    </div>
  );
}
