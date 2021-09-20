import { ImgHTMLAttributes } from 'react';
import { Link } from 'react-router-dom'

export type ImgProps = ImgHTMLAttributes<HTMLImageElement>

function Minicart(props: ImgProps) {
    return (
        <div className="minicart">
            <Link to="/">
                <img {...props} alt="minicart icon"/>
            </Link>
        </div>
    )
}

export default Minicart