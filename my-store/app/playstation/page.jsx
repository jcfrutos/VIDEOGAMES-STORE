import { GameGrid } from '@/components/games/gameGrid'

export default function Playstation (){
    return(<div>
         <h1 className="text-2xl font-bold mb-4 text-center">Juegos para PlayStation</h1>
         <GameGrid platform="PlayStation" />
    </div>)
}