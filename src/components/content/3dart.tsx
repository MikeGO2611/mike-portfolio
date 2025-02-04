import Slide from "./slide/slide.tsx"
import ArtStationLogo from "../../assets/logos/t_artstation-logo.svg"
import AlumifoldImage from "../../assets/art/v_alumifold.webm"
import HouseImage from "../../assets/art/t_house-cliff.png"
import SproutImage from "../../assets/art/t_sprout.png"
import TokonomaImage from "../../assets/art/t_tokonoma.jpeg"

export default function Art(){
    return (
        <div className="content">
            <h1 className="title">3D Art</h1>
            <Slide
            leftSided={true}
            video={true}
            mediaSrc={AlumifoldImage}
            title="Alumifold"
            tasks={["Modelling","Animation","Texturing","Shading","Video Editing"]}
            software={["Blender","Substance Designer","Substance Painter", "DaVinci Resolve"]}
            body="A 30 second fake advertisement of a window made in 2024. This advertisement showcases my skills on the full pipeline of a small production. From planning and making the storyboard, to producing it, composing the music and editing the sound, and delivering it."
            link={<a href="https://www.artstation.com/artwork/RK39eO"><img src={ArtStationLogo} alt="ArtStation" height="60"/></a>}
            />
            <Slide
            leftSided={false}
            mediaSrc={HouseImage}
            title="Cliff Manor"
            tasks={["Modelling","Texturing","Shading","Fluid simulation"]}
            software={["Blender","Substance Designer","Substance Painter"]}
            body="A 3D render of a fantastical manor built on the side of a cliff. Made in 2023 in the span of 2 months. The main objective with this project was to experiment with fluid simulations, used for the rivers and for the fog, as smoke is treated as a fluid."
            link={<a href="https://www.artstation.com/artwork/2qVJQx"><img src={ArtStationLogo} alt="ArtStation" height="60"/></a>}
            />
            <Slide
            leftSided={true}
            mediaSrc={SproutImage}
            title="Sprout"
            tasks={["Modelling","Texturing","Shading"]}
            software={["Blender"]}
            body="A 3D render of a sprout made in 2022. This project had the objective to experiment with dynamic microdisplacement, particle systems and post-processing."
            link={<a href="https://www.artstation.com/artwork/Zea4x8"><img src={ArtStationLogo} alt="ArtStation" height="60"/></a>}
            />
            <Slide
            leftSided={false}
            mediaSrc={TokonomaImage}
            title="Tokonoma"
            tasks={["Modelling","Texturing","Shading"]}
            software={["Blender","Substance Designer","Substance Painter"]}
            body="A 3D render of a Tokonoma room made in 2020. The main objective of this project was to learn to design a believable interior space with realistic materials, lighting and 3D models."
            link={<a href="https://www.artstation.com/artwork/Z52RWG"><img src={ArtStationLogo} alt="ArtStation" height="60"/></a>}
            />
        </div>
    );
}