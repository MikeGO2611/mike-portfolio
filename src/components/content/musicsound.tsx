import Slide from "./slide/slide.tsx"
import ExplorationMusic from "../../assets/music/a_exploration.ogg"
import DeportivoMusic from "../../assets/music/a_deportivo.ogg"
import PlanetLoveMusic from "../../assets/music/a_planet-love.ogg"
import GodotMusic from "../../assets/music/a_godot.ogg"

export default function MusicSound(){
    return(
        <div className="content">
            <h1 className="title">Music and Sound</h1>
            <Slide
            leftSided={true}
            audio={true}
            mediaSrc={ExplorationMusic}
            title="Exploration"
            tasks={["Composition", "Orchestration", "Production"]}
            software={["MuseScore","FLStudio"]}
            body="Composition, orchestration and production of a 2 minute piece for a videogame soundtrack."
            />
            <Slide
            leftSided={false}
            audio={true}
            mediaSrc={DeportivoMusic}
            title="Viva el Deportivo"
            tasks={["Arrangement", "Orchestration", "Production"]}
            software={["MuseScore","FLStudio"]}
            body="Restoration, arrangement and production of a 1924 piano composition for the original soundtrac of Deportivo de A Coruña football team."
            />
            <Slide
            leftSided={true}
            audio={true}
            mediaSrc={PlanetLoveMusic}
            title="Planet Love"
            tasks={["Composition", "Production"]}
            software={["MuseScore","FLStudio"]}
            body="Song used in the rythm game Planet Love for the first leve. Synthwave."
            />
            <Slide
            leftSided={false}
            audio={true}
            mediaSrc={GodotMusic}
            title="Viva Godot"
            tasks={["Composition", "Orchestration", "Production"]}
            software={["MuseScore","FLStudio"]}
            body="Composition, orchestration and production of a piece with different emotions across the entire song."
            />
        </div>
    );
}