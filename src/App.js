import { Outlet, useSearchParams } from "react-router-dom";
import { getAllData } from './api/querys';
import { QueryNavLink } from './components/navigation/queryNavLink';
import './assets/styles/styles.scss';

const App = () => {
    const data = getAllData();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleOnChange = (event) => {
        const filter = event.target.value;

        if (filter) {
            setSearchParams({ filter });
        } else {
            setSearchParams({});
        }
    }

    return (
        <div className="main__container">
            <h1 className="page__title">Listado de canciones</h1>
            <nav className="nav__main">
                <input
                    className="nav__input"
                    value={searchParams.get("filter") || ""}
                    onChange={ (event) => handleOnChange(event)}
                />
            </nav>
            <div className="songs__container">
                {
                    data
                    .filter((song) => {
                        const filter = searchParams.get("filter");
                        if (!filter) return true;

                        const name = song.titulo.toLowerCase();
                        return name.includes(filter.toLowerCase());
                    })
                    .map((song) => (
                        <QueryNavLink
                            className="songs__item"
                            style={
                                ({ isActive }) => ({
                                    color: isActive ? "red" : "",
                                })
                            }
                            to={ `/song/${ song.id }` }
                            key={ song.id }
                        >
                            { song.titulo }
                        </QueryNavLink>
                    ))
                }
            </div>
            <Outlet />
        </div>
    );
}

export default App;
