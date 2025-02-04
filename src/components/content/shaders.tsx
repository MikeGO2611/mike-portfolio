import Slide from "./slide/slide.tsx"
import RuralAlleyImage from "../../assets/art/t_rural-alley.png"
import DynoTerrainImage from "../../assets/art/t_geoboxes.gif"

export default function Shaders(){
    return(
        <div className="content">
            <h1 className="title">Shaders</h1>
            <Slide
            leftSided={true}
            mediaSrc={RuralAlleyImage}
            title="Rural Alley"
            tasks={["Modelling","Texture Authoring","Shader Programming"]}
            software={["Unity 6","Godot 4"]}
            body="Render of an alley using different techniques. Vertex Paint for creating variation on the textures. Decals to add details. Optimized. Max resolution of textures 1024x1024."
            />
            <Slide
            leftSided={false}
            mediaSrc={DynoTerrainImage}
            title="DynoTerrain"
            tasks={["Movement Programming, Shader Programming"]}
            software={["Godot","GDScript","GLSL"]}
            body="Visual demo of some shaders: the texture used in the ball is a shader; the floor is another shader that uses the position of the ball to displace the vertex."
            />
        </div>
    );
}