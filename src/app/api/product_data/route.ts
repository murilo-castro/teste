import { NextResponse } from 'next/server';
import productData from './product_data';

export async function GET(request: Request) {
    try {
        const product = productData();
        console.log(product);
        return NextResponse.json(product)
    } catch (error) {
        console.log(error);
        return NextResponse.json(error)
    }
}
