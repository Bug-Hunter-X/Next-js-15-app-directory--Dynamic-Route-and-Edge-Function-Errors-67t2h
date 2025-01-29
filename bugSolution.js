// bugSolution.js
import { MetadataRoute } from 'next/server'
export default function Metadata(): MetadataRoute {
  return {
    headers: {
      'Content-Type': 'application/json'
    }
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const productId = url.searchParams.get('productId');

  //Validate productId 
  if (!productId || isNaN(parseInt(productId))) {
    return new Response(JSON.stringify({ error: 'Invalid productId' }), { status: 400 });
  }

  const validProductId = parseInt(productId);
  try {
    //Fetch data using the validated productId
    const product = await fetch(`https://api.example.com/products/${validProductId}`);

    if (!product.ok) {
        //Handle API errors
      throw new Error(`Failed to fetch product: ${product.status}`);
    }
    const productData = await product.json();
    return new Response(JSON.stringify(productData));
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
