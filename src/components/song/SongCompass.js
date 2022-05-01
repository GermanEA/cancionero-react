const SongCompass = ({ compass }) => {

    return (
        <div className="compass__container">
            {
                compass.map((el, index) => (
                    <div 
                        className="compass__item"
                        key={ el + index }
                    >
                        { el }
                    </div>       
                ))
            }
        </div>
    )
}

export default SongCompass;