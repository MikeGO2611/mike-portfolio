import { useState } from "react";
import "./content.css";
import AboutMe from "./aboutme.tsx";
import Art from "./3dart.tsx";
import Code from "./coding.tsx"
import Shaders from "./shaders.tsx"
import MusicSound from "./musicsound.tsx"

function Button({ text, onClick }: { text: string; onClick: () => void }) {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    );
}

export default function Content() {
    const [selectedContent, setSelectedContent] = useState<string | null>(null);

    const handleButtonClick = (text: string) => {
        setSelectedContent(text);
    };

    const renderContent = () => {
        switch (selectedContent) {
            case "About Me":
                return <AboutMe />;
            case "3D Art":
                return <Art />;
            case "Coding":
                return <Code />;
            case "Shaders":
                return <Shaders />;
            case "Music and Sound":
                return <MusicSound />;
            default:
                return <div> <AboutMe /> </div>;
        }
    };

    return (
        <div>
            <div id="nav-bar">
                <Button text="About Me" onClick={() => handleButtonClick("About Me")} />
                <Button text="3D Art" onClick={() => handleButtonClick("3D Art")} />
                <Button text="Coding" onClick={() => handleButtonClick("Coding")} />
                <Button text="Shaders" onClick={() => handleButtonClick("Shaders")} />
                <Button text="Music and Sound" onClick={() => handleButtonClick("Music and Sound")} />
            </div>
            <div id="content">
                {renderContent()}
            </div>
        </div>
    );
}