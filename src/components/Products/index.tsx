import { Container } from '../Container/index'
import { Button } from '../Button/index'
import { databaseRef } from "./../../services/firebase";
import { lazy, Suspense } from 'react'
import { Loading } from './../Loading/index'

import './../../styles/products.scss'
import { useEffect, useState } from 'react';

type FeaturedProduct = {
    name: string,
    image: {
        src: string | undefined;
        alt: string
    },
    category: string,
    details: {
        description: string;
    }
}

export function MainProduct( { page }: any ) {

    const [products, setProducts] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        databaseRef.on('value', (snapshot) => {

            let items = snapshot.val();

            setProducts(items);
            setLoading(false);
        });
    }, [])

    const Recommendations = lazy(() => import('./recommendations'))
    const ProductList = lazy(() => import('./list'))

    return (
        <main>
            {loading ? <Loading /> : <>
                <Container variant="container-products">
                    {products.filter((product: { featured: boolean; }) => product.featured === true).map((productFeatured: FeaturedProduct, index: number) => (
                        <div key={index}>
                            <h1 className="title">{productFeatured.name}</h1>
                            <div className="container-image">
                                <img src={productFeatured.image.src} alt={productFeatured.image.alt} />
                                <span className="disclaimer">Photo of the day</span>
                            </div>
                            <Button className="button button-product">
                                ADD TO CART
                            </Button>
                            <div className="description">
                                <h2 className="sub-title">About the {productFeatured.name}</h2>
                                <p className="category category-main-product">{productFeatured.category}</p>
                                <p>{productFeatured.details.description}</p>
                            </div>
                        </div>
                    ))}
                    <Suspense fallback={Loading}>
                        <Recommendations />
                    </Suspense>
                </Container>
                <Suspense fallback={Loading}>
                    <ProductList {...page}/>
                </Suspense>
            </>}
        </main>
    )
}



