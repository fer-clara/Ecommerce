import { useState } from 'react'
import { FilterModal } from './modal';
import { FilterDesktop } from './filter';

import './../../styles/filter.scss'
import imgFilter from './../../assets/images/filter.svg'

export function Filter() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <div className="filter-component mobile">
                <button className="filter-button mobile" onClick={() => setOpenModal(!openModal)}>
                    <img src={imgFilter} alt="filter button" />
                </button>
            </div>
            { openModal && <FilterModal onClick={() => setOpenModal(!openModal)}/>}
            <FilterDesktop />
        </div>
    )
}