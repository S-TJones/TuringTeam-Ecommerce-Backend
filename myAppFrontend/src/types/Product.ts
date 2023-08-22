interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    status: string;
    user_id: number;
    created_at: Date;
    updated_at: Date;
}

export default Product;
