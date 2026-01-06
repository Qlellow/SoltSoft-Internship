import type { ProductCardProps } from '../global/types'
import { memo } from 'react'

const ProductCard: React.FC<ProductCardProps> = ({ product, setIsModalOpen, setSelectedProduct }) => {
  const handleClick = () => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  return (
    <div
      className="space-y-2 rounded-2xl flex flex-col shadow-lg pb-4 max-w-3xs bg-white cursor-pointer"
      onClick={handleClick}>
      <div className="flex w-full rounded-2xl justify-center h-48 overflow-hidden select-none">
        <img src={product.imageUrl} alt={product.name} className="object-cover h-full" />
      </div>

      <div className="px-4">
        <h3 className="mt-2 font-extrabold text-md truncate">{product.name}</h3>
        <p className="text-gray-600 font-medium text-sm">{product.price.toLocaleString()}원</p>
      </div>
    </div>
  )
}

export default memo(ProductCard)
