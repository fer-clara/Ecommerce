import './../../styles/sort.scss'
import imgSortIcon from './../../assets/images/sort.svg'

export function Sort() {

    return (
        <div className="custom-select">
            <div className="container">
                <img src={imgSortIcon} alt="Sort Icon" />
                <p>Sort By</p>
            </div>
            <select>
                <option value="0">Price</option>
                <option value="1">Alfabet</option>
            </select>
        </div>
    )
}



