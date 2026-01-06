import './App.css'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import Header from './components/Header'
import ProductCard from './components/ProductCard'
import Modal from './components/Modal'

import { products } from './data'
import type { Product } from './global/types'
import ProductCardSkeleton from './components/ProductCardSkeleton'

function App() {
  const [money, setMoney] = useState<number>(100000000)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleBuy = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    })

    if (selectedProduct && money >= selectedProduct.price * quantity) {
      setMoney(money - selectedProduct.price * quantity)
      setIsModalOpen(false)
      Toast.fire({
        icon: 'success',
        position: 'top',
        title: '상품을 구매하였습니다',
        background: '#F0FFF5',
        color: '#1A6633',
        width: 'auto'
      })
    } else {
      Toast.fire({
        icon: 'error',
        position: 'top',
        title: '잔액이 부족합니다.',
        background: '#FFF0F0',
        color: '#991A1A',
        width: 'auto'
      })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-screen h-screen">
      <Header money={money} />

      <div className="px-12 py-4">
        <h1 className="text-2xl font-black my-6">추천 상품</h1>

        <div className="flex flex-wrap gap-6">
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => <ProductCardSkeleton key={i} />)
            : products.map(p => (
                <ProductCard
                  key={p.id}
                  product={p}
                  setIsModalOpen={setIsModalOpen}
                  setSelectedProduct={setSelectedProduct}
                />
              ))}
        </div>
      </div>

      {selectedProduct && (
        <Modal
          name={selectedProduct.name}
          price={selectedProduct.price}
          imageUrl={selectedProduct.imageUrl}
          quantity={quantity}
          setQuantity={setQuantity}
          isModalOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          handleBuy={handleBuy}
        />
      )}
    </div>
  )
}

export default App
