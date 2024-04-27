import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

export default function HttpDemo1() {
    const [products, setProducts] = useState([]);
    const [isLoading, setisLoading] = useState(false);

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 4;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const filteredProducts = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    const fetchProducts = async () => {
        const productsArr = await fetch('https://fakestoreapi.com/products');
        const finalData = await productsArr.json();
        setProducts(finalData);
    }
    const fetchProductsAxios = async () => {
        setisLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products')
        setProducts(response.data);
        setisLoading(false);
    }

    useEffect(() => {
        // fetchProducts();
        // fetchProductsAxios();
    }, []);

    return <>
        <h1 className='text-center'>This is Product List Component</h1>
        <button onClick={fetchProductsAxios}>Fetch Data</button>

        {isLoading ? <h1>Loading....</h1> :
            <div className='container'>
                <div className='row'>
                    {filteredProducts.map(prod => {
                        const { id, title, description, image, price, category } = prod;
                        return <div className='col-sm-3' key={id}>
                            <div className="card text-center">
                                <img src={image} className="card-img-top" alt="..." height='200px' />
                                <div className="card-body">
                                    <h5 className="card-title">{category}</h5>
                                    <p className="card-text">{title}</p>
                                    <p className="card-text">Price: {price}</p>
                                    <a href="#" className="btn btn-primary">Buy Now</a>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeLinkClassName="active"
                />
            </div>

        }

    </>
}
