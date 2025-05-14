import { GameGrid } from "@/components/games/gameGrid";

export default function Xbox() {
  return (
    <div>
      {" "}
      <h1 className="text-2xl font-bold mb-4 text-center">Juegos para Xbox</h1>
      <GameGrid platform="Xbox" />
    </div>
  );
}
