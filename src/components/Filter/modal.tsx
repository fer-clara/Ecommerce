import { Button } from './../Button/index'
import { FormFilter } from './form'

import './../../styles/filter.scss'
import imgClose from './../../assets/images/close.svg'
import { ImgHTMLAttributes } from 'react'

type imgProps = ImgHTMLAttributes<HTMLImageElement>

export function FilterModal(props: imgProps) {

    return (
        <>
            <div className="overlay"></div>
            <div className="modal-filter">

                <button className="button-close">
                    <img src={imgClose} alt="Close" {...props} />
                </button>

                <FormFilter />
                
                <div className="container-button">
                    <Button className="clear">Clear</Button>
                    <Button className="save">Save</Button>
                </div>

            </div>
        </>
    )
}