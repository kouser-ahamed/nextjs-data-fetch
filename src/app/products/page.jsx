import Product from "@/components/Product";

const getProducts = async () => {
    const res = await fetch("http://localhost:5000/products", { next: { revalidate: 10 } });
    return res.json();
}

const ProductsPage = async() => {

    const products = await getProducts();
    console.log(products);

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product key={product.id} product={product} />

                  )

                }
            </div>
            
        </div>
    );
};

export default ProductsPage;