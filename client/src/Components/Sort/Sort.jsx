import './Sort.scss'

const Sort = () => {
    return (
        <div className="sort">
            <div className="sort__close-container">
                <img className="sort__close-button"src="" alt="" />
            </div>
            <div className="sort__body">
                <h1 className="sort__header">Sort Results By</h1>
                <button className="sort__button sort__button--blue">OPEN NOW</button>
                <button className="sort__button">PUBLIC STATIONS ONLY</button>
                <button className="sort__button sort__button--blue">CLOSEST FIRST</button>
                <button className="sort__button">LOWEST RATE FIRST</button>
                <button className="sort__button-save">SAVE CHANGES</button>
            </div>
        </div>
    )
}

export default Sort
