import '../index.css'

export default function Card(props) {
    return (
        <div className="card">
            <img className='img-card' src={`../../public/img/${props.imageUrl}`} alt={props.title} />
            <div className='container-info'>
                <div className='container-location'>
                    <img src='../../public/img/icon-location.svg' />
                    <p> {props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='desc'>{props.description}</p>
            </div>
        </div>
    )
}

