"use client";
import Image from "next/image";

type ProductCardProps = {
  title: string;
  description: string;
  image: string;
  price?: string;
  category?: string;
  index?: number;
};

const ProductCard = ({
  title,
  description,
  image,
  price,
  category,
}: ProductCardProps) => {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-stroke bg-surface-card shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/10] w-full shrink-0 bg-surface-muted">
        <Image src={image} alt="" fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
        {category && (
          <div className="absolute left-4 top-4">
            <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              {category}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-jakarta text-xl font-bold text-text-heading group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-text-body">
          {description}
        </p>
        {price && (
          <div className="mt-auto flex items-center justify-between border-t border-stroke pt-4">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <span className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white">
              Visit
            </span>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
