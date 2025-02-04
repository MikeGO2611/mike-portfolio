import "./slide.css"

export default function Slide({
    leftSided,
    video = false,
    audio = false,
    mediaSrc,
    title,
    tasks,
    software,
    body,
    link
}: {
    leftSided: boolean,
    video?: boolean,
    audio?: boolean,
    mediaSrc: string,
    title:string,
    tasks: Array<string>,
    software: Array<string>,
    body:string,
    link?: JSX.Element
}){
    if (leftSided) {
        return (
            <div className="slide">
                {video? (
                    <video className="thumbnail" src={mediaSrc} controls autoPlay muted loop/>
                ) : (
                    audio? (
                        <audio className="thumbnail" src={mediaSrc} controls />
                    ) : (
                        <img className="thumbnail" src={mediaSrc} />
                ))}
                <div className="description">
                    <h1>{title}</h1>
                    <div className="rowInfo">
                        <div className="flexGrow">
                            <h2>Tasks</h2>
                            <ul>
                                {tasks.map((tasks) => (
                                    <li>{tasks}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flexGrow">
                            <h2>Software</h2>
                            <ul>
                                {software.map((software) => (
                                    <li>{software}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="project-body">
                        {body}
                    </div>
                    {link && <div className="link">{link}</div>}
                </div>
            </div>
        )
    } else {
        return (
            <div className="slide">
                <div className="description">
                    <h1 className="right-justification">{title}</h1>
                    <div className="rowInfo">
                        <div className="flexGrow">
                            <h2>Tasks</h2>
                            <ul>
                                {tasks.map((tasks) => (
                                    <li>{tasks}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flexGrow">
                            <h2>Software</h2>
                            <ul>
                                {software.map((software) => (
                                    <li>{software}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="project-body">
                        {body}
                    </div>
                    {link && <div className="link">{link}</div>}
                </div>
                {video? (
                    <video className="thumbnail" src={mediaSrc} controls autoPlay muted loop/>
                ) : (
                    audio? (
                        <audio className="thumbnail" src={mediaSrc} controls />
                    ) : (
                        <img className="thumbnail" src={mediaSrc} />
                ))}
            </div>
        )
    }

}