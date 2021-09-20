import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { databaseRef } from '../../services/firebase';
import './../../styles/recommendations.scss'

type FeaturedProduct = {
    details: {
        dimmentions: {
            width: number;
            height: number;
        }
        size: number;
        description: string;
        recommendations: [
            {
            src: string;
            alt: string;
            }
        ]
    }
}

function Recommendations() {

    const [products, setProducts] = useState<any>([])

    useEffect(() => {
        databaseRef.on('value', (snapshot) => {
            let items = snapshot.val();

            setProducts(items)
        });
    }, [])

    return (
        <aside className="container-recommendations">
            <h3 className="sub-title">People also buy</h3>
            {products.filter((product: { featured: boolean; }) => product.featured === true).map((productFeatured: FeaturedProduct, index:number) => (
                <div key={index + 20}>
                    <div className="products-recommendations">
                    {productFeatured.details.recommendations.map((recommendation: any, index: number) => (
                        <Link to="/" className="link" key={index + 30}>
                            <img src={recommendation.src} alt={recommendation.alt} />
                        </Link>
                    ))}
                    </div>
                    <h3 className="sub-title">Details</h3>
                    <div className="container-details">
                        <p>Size: {productFeatured.details.dimmentions.width} x {productFeatured.details.dimmentions.height}</p>
                        <p>Size: {productFeatured.details.size} mb</p>
                    </div>
                </div>
            ))}
        </aside>
    )
}

export default Recommendations


