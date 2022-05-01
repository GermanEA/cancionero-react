import { Link, useParams } from "react-router-dom";
import { getSong } from "../api/querys";
import SongPart from "../components/song/SongPart";

const Song = () => {
    const params = useParams();
    const song = getSong(parseInt(params.id, 10));

    const recoverPart = (title) => {
        for( const el in song ) {
            if( title === el ) {
                return song[el];
            }
        }
    }

    return (
        <div className="main__container">            
            <h1 className="page__title">{ song.titulo }</h1>
            <div className="structure__container">
                {
                    song.estructura.map((el, index) => (
                        <SongPart
                            key={ song.id + index }
                            title={ el }
                            part={ recoverPart(el) }
                        />
                    ))
                }
            </div>
            <Link to={ '/' } className="button__back">Volver</Link>
        </div>
    )
}

export default Song;