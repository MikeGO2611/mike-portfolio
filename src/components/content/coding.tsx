import Slide from "./slide/slide.tsx"
import PlanetLoveImage from "../../assets/art/t_planet-love.png"
import WhatTheHellImage from "../../assets/art/t_what-the-hell.png"

export default function Coding(){
    return (
        <div className="content">
            <h1 className="title">Coding</h1>
            <Slide
            leftSided={true}
            mediaSrc={WhatTheHellImage}
            title="What The Hell"
            tasks={["Lead Programming", "Audio Programming", "Music Composition and Production"]}
            software={["Unreal Engine 5", "FMOD"]}
            body="Team project. 3D plataformer with hand-drawed textures based on Dante's Inferno."
            link={<iframe frameBorder="0" src="https://itch.io/embed/3064944?dark=true" width="552" height="167"><a href="https://mikego.itch.io/what-the-hell">What The Hell by MikeGO</a></iframe>}
            />
            <Slide
            leftSided={false}
            mediaSrc={PlanetLoveImage}
            title="Planet Love"
            tasks={["Gameplay Programming", "Audio Programming", "Music Composition and Production", "Gameplay Design"]}
            software={["Godot", "GDScript", "FMOD"]}
            body="Rythm bullet hell where enemies attack and move following the music beat. The main objective is to survive the entire song and fight the final boss."
            link={<iframe frameBorder="0" src="https://itch.io/embed/2186968?dark=true" width="552" height="167"><a href="https://mikego.itch.io/planet-love">Planet Love by MikeGO</a></iframe>}
            />
        </div>
    );
}