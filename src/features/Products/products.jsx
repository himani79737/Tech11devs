import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productslice";


function Products() {
    console.log("Products component rendered"); 
    const dispatch = useDispatch()
    const { products, loading, error } = useSelector(
        (state) => state.products
    );


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>{error}</h2>;

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-200">

            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((p) => (
                    <div
                        key={p.id}
                        className="border border-gray-200 rounded-xl p-5 bg-white hover:shadow-md transition-all duration-300 flex flex-col"
                    >
                        <div className="flex justify-center items-center h-40 mb-4">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="max-h-full object-contain"
                            />
                        </div>

                        <div className="flex flex-col flex-1">
                            <h2 className="font-semibold text-gray-800 text-sm md:text-base mb-2 line-clamp-2">
                                {p.title}
                            </h2>

                            <div className="mt-auto">
                                <p className="text-blue-600 font-bold text-lg">${p.price}</p>
                                <p className="text-xs text-gray-400 capitalize mt-1">{p.category}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}
export default Products