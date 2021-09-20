import React from 'react'
import { Link } from 'react-router-dom'

import './../../styles/breadcrumb.scss'

export function Breadcrumb() {
    return (
        <div className="breadcrumb">
            <Link to="/" className="link">
                Photography
            </Link>
            <span>/</span>
            <Link to="/" className="link current">
                Premium Photos
            </Link>
        </div>
    )
}