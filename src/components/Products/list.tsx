import { Container } from './../Container/index'
import { Breadcrumb } from './../Breadcrumb/index'
import { Filter } from './../Filter/index'
import { Sort } from './../Sort/index'
import { databaseRef } from "./../../services/firebase";
import { PRODUCTS_PER_PAGE } from './../../utils/constantPage'
import { Pagination } from './../Pagination/index'

import './../../styles/products.scss'
import { Link } from 'react-router-dom'
import { Button } from '../Button'
import { SetStateAction, useEffect, useState } from 'react'

function ProductList() {

    const [products, setProducts] = useState<any>([]);
    const [page, setPage] = useState(1);
    const startIndex = (page - 1) * PRODUCTS_PER_PAGE;
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        databaseRef.on('value', (snapshot) => {
          let items = snapshot.val();

          setProducts(items)
          
          setTotalPages(Math.ceil(items.length / PRODUCTS_PER_PAGE))
        });
    },[])

    const selectedProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

    const handleClick = (num: SetStateAction<number>) => {
        setPage(num);
    }
    
    return (
        <Container variant="product-list">
            <Breadcrumb />
            <Sort />
            <Filter />
            <div className="gallery">
                {selectedProducts.map((product: any, index: number) => (
                    <div className="product" key={index + 10}>
                        <div className="container-image">
                            <Link to="/" className="link-product">
                                <img src={product.image.src} alt={product.image.alt} />
                            </Link>
                            {product.bestseller === true && (
                                <span className="disclaimer disclaimer-list">Best seller</span>
                            )}
                            <Button className="button button-product-list">
                                ADD TO CART
                            </Button>
                        </div>
                        <div className="description description-list">
                            <p className="category">{product.category}</p>
                            <h4 className="sub-title sub-title-list">{product.name}</h4>
                            <p className="price">{product.currency} {product.price} </p>
                        </div>
                    </div>
                ))}
            </div>
            <Pagination totalPages={totalPages} handleClick={handleClick}/>
        </Container>
    )
}

export default ProductList