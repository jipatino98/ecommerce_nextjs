import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { ProductType } from "@/types/ProductType";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: ProductType) {
  const { features } = metadata;

  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description, features },
      }}
    >
      <div className="text-gray-700">
        <Image
          src={image}
          alt={name}
          width={400}
          height={400}
          className="w-40 h-40 rounded-lg"
        />
        <div>
          <h1>{name}</h1>
          <h2 className="text-sm text-teal-700">
            {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
          </h2>
        </div>
      </div>
    </Link>
  );
}
