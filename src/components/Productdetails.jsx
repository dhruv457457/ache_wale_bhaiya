'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { StarIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductDetails() {
  const { productId } = useParams() // Extract product ID from the URL
  const [product, setProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch product details from API or backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.example.com/products/${productId}`)
        const data = await response.json()
        setProduct(data)
        setSelectedImage(data.images[0]) // Set the first image as default
        setLoading(false)
      } catch (error) {
        console.error('Error fetching product:', error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [productId])

  if (loading) return <p>Loading product details...</p>
  if (!product) return <p>Product not found.</p>

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb">
          <ol role="list" className="flex space-x-2 px-4 sm:px-6 lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    className="mx-2 h-5 w-4 text-gray-300"
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm text-gray-500">{product.name}</li>
          </ol>
        </nav>

        {/* Main layout with image on the left and product details on the right */}
        <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8">
            {/* Image Section */}
            <div className="flex flex-col items-center">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 flex space-x-4">
                {product.images.map((image) => (
                  <button
                    key={image.src}
                    onClick={() => setSelectedImage(image)}
                    className={classNames(
                      selectedImage.src === image.src
                        ? 'ring-2 ring-indigo-500'
                        : 'ring-1 ring-gray-300',
                      'h-20 w-20 overflow-hidden rounded-md'
                    )}
                  >
                    <img src={image.src} alt={image.alt} className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-sm text-gray-500 mt-2">{product.condition}</p>
              <p className="mt-2 text-xl font-semibold text-indigo-600">{product.price}</p>

              {/* Reviews */}
              <div className="mt-4 flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5'
                      )}
                    />
                  ))}
                </div>
                <p className="ml-2 text-sm text-gray-500">
                  {product.reviews.totalCount} reviews
                </p>
              </div>

              {/* Product Highlights */}
              <div className="mt-8">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                <ul className="list-disc space-y-2 pl-4 text-sm text-gray-600">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              {/* Contact Seller */}
              <div className="mt-8">
                <p className="text-sm text-gray-700">Seller: {product.seller}</p>
                <button className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">
                  Contact Seller
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
