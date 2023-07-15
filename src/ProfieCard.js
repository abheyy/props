function ProfileCard(props)
{
    return(
        // <div>
        //     <img src={props.image}/>
        //     <div>Title is {props.title}</div>
        //     <div>Hanndle is {props.handle}</div>
            
        // </div>

        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={props.image} alt="Placeholder image" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{props.title}</p>
                    <p className="subtitle is-6">{props.handle}</p>
                </div>
            </div>
            <div className="content">{props.description}</div>

        </div>

  

    );
}

export default ProfileCard;


