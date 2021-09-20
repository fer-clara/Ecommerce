import { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>

function Logo(props: ImgProps) {
    return (
        <div className="logo">
            <Link to='/'>
                <img {...props} alt="Logo Bejamas"/>
            </Link>
        </div>
    )
}

export default Logo