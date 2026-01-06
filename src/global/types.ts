/* eslint-disable @typescript-eslint/no-explicit-any */
export type HeaderProps = {
  money: number
}

export type ProductCardProps = {
  product: {
    name: string
    price: number
    imageUrl?: string
  }
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedProduct: React.Dispatch<any>
}

export type ModalProps = {
  name: string
  price: number
  imageUrl?: string
  quantity: number
  isModalOpen: boolean
  onClose: () => void
  handleBuy: () => void
  setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
}

export type IconProps = {
  name: string
  size?: number
  color?: string
}
