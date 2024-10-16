import React from "react";
import Navbar from "./Navbar";
const products = [
  {
    id: 1,
    name: "Jumper Wires",
    href: "#",
    price: "Rs.50",
    imageSrc:
      "https://cdn.littlebird.com.au/images/files/000/056/706/large/SF-PRT-11709.jpg?1535768036",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Motor",
    href: "#",
    price: "Rs.500",
    imageSrc:
      "https://images-cdn.ubuy.co.in/643d3af09995cb379d77cae1-6v-60rpm-micro-dc-gear-speed-reduction.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://m.media-amazon.com/images/I/61bkyBbnBPL._AC_UF1000,1000_QL80_.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://harishprojects.com/cdn/shop/files/10-Core-Ribbon-Wire-Harish-Projects.webp?v=1718122135",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://images-eu.ssl-images-amazon.com/images/I/51xA613taAL.AC_UL600_SR600,600.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://robu.in/wp-content/uploads/2015/10/pulley-wheel-1-500x5001.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://m.media-amazon.com/images/I/51SGZaQY5dL.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://probots.co.in/pub/media/catalog/product/cache/dae07e5368c25ed1643ed23ff1b30de1/p/r/promaxrockerswitchdpdtkcd4.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 1,
    name: "Jumper Wires",
    href: "#",
    price: "Rs.50",
    imageSrc:
      "https://5.imimg.com/data5/SELLER/Default/2020/9/VY/DW/OA/69897210/steel-curtain-pipe-rod.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Motor",
    href: "#",
    price: "Rs.500",
    imageSrc:
      "https://m.media-amazon.com/images/I/61nQOfGrXYL._AC_UF894,1000_QL80_.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://m.media-amazon.com/images/I/61c9DWyge1L._AC_UF1000,1000_QL80_.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  
  // More products...
];
function Product() {
  return (
    <div>
      <Navbar />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
          </div>
  );
}

export default Product;
