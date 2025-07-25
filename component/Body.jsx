function TheBody(props) {
    return (
        <main>
            <div className='location-tile'>
                <img src={props.image.src} alt={props.image.alt} />

                <div className='infos'>
                    <p>
                        <img className='marker' src='marker.png' alt='location marker' />
                        <span className='city'>{props.city}</span>
                        <a href={props.link} className='view'>View on Google Maps</a>
                    </p>

                    <p className='location-name'>{props.site}</p>

                    <p className='date'>{props.date}</p>
                    <p className='text'>{props.text}</p>
                </div>
            </div>
            <hr/>
        </main>
    )
}

export { TheBody };