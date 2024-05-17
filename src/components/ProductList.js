
import { useState } from 'react';
import products from '../data';
import SearchResultNotFound from './SearchResultNotFound';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import subCatData from '../subCatData';

const ProductList = () => {
    const { category } = useParams();
    const [searchTerm, setSearchTerm] = useState('');
    const [subCategory, setSubCategory] = useState('ALL'); // new state for subcategory filter

    const handleSubCategoryClick = (subCat) => { 
        // now show only products that belong to the selected subcategory   
        setSubCategory(subCat);

    };

    const subcategories = subCatData.filter(subCat => subCat.categories === category);

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };


   const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (subCategory === 'ALL' || product.subCategories === subCategory)
);

    return (
        <>
        
        <div className='flex items-center justify-center py-5' >
    <button
        onClick={() => handleSubCategoryClick('ALL')}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2`}
    >
        All
    </button>
    {subcategories.map(subCat => (
        <button
            key={subCat.id}
            onClick={() => handleSubCategoryClick(subCat.name)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mr-2`}
        >
            {subCat.name}
        </button>
    ))}
</div>

            <div className="flex items-center justify-center py-5">

                {/* Need below div and search bar in diff line */}

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search product..."
                        onChange={handleSearch}
                        className="w-full h-10 pl-10 pr-20 rounded-full text-sm focus:outline-none"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56.966 56.966">
                            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
          s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
          c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
          s-17-7.626-17-17S14.61,6,23.984,6z"/>
                        </svg>
                    </button>
                </div>
            </div>

            {filteredProducts.length > 0 ? (

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                    {filteredProducts.map((product) => (
                        product.categories === category && (
                            <div className="flex-1 m-1" key={product.id}>
                                <div className="w-full sm:w-72 max-w-sm my-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                    <Link to={`/product/${product.id}`}>
                                        <img className="p-8 rounded-t-lg object-cover w-full h-48" src={product.image} alt={product.name} />
                                    </Link>
                                    <div className="px-5 pb-5">
                                        <Link to={`/product/${product.id}`}>
                                            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                                        </Link>
                                        <div className="flex items-center mt-2.5 mb-5">
                                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{product.price}</span>
                                            <Link to={`/product/${product.id}`}>
                                                <button className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Take on Rent</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )))}
                </div>
            ) : (
                <SearchResultNotFound />
            )}

        </>
    );
};

export default ProductList;

