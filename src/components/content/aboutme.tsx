import "./aboutme.css"

export default function AboutMe() {
    return (
    <div className="content">
        <h1 className="title">About Me</h1>
        <p>I am Miguel "Mike" González Obenza, or Mike Obenza for short. I'm a developer located in Spain interested in many different topics. I've studied a degree on <em>Audiovisual Communication</em> and later a master's degree on <em>Design, Development, and Marketing of Video Games</em>.</p>
        <p>On my spare time I'm constantly learning different disciplines, like 3D art, frontend development, game design, shader programing, rendering pipeline, music composition and sound design.</p>
        <div className="button-div" onClick={HandleOnClick}><button className="contact-button">Contact Me!</button></div>
    </div>
    )
}

function HandleOnClick(){
    const email = "mgonzalezobenza@gmail.com";
    window.location.href = `mailto:${email}`;
}