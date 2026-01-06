import type { ModalProps } from '../global/types'

const Modal = ({ name, price, imageUrl, quantity, isModalOpen, onClose, handleBuy, setQuantity }: ModalProps) => {
  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center
        bg-black/40
        transition-opacity duration-300 ease-out
        ${isModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      onClick={onClose}>
      <div
        className={`
          bg-white rounded-2xl p-8 w-100 space-y-6
          transform transition-all duration-300 ease-out
          ${isModalOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-95'}
        `}
        onClick={e => e.stopPropagation()}>
        <h2 className="text-xl font-bold">상품 구매하기</h2>

        <div>
          <div className="inline-flex w-full justify-center select-none">
            <img src={imageUrl} alt={name} className="w-40 object-cover" />
          </div>

          <h3 className="mt-4 font-bold text-md">{name}</h3>

          <div className="border rounded-xl flex items-center mt-2 px-3 py-2 justify-between">
            <span
              className="flex size-7 justify-center select-none text-xl cursor-pointer"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}>
              -
            </span>

            <input
              type="number"
              value={quantity}
              min={1}
              className="text-center no-spinner w-auto"
              onChange={e => setQuantity(Number(e.target.value))}
            />

            <span
              className="flex size-7 justify-center select-none text-xl cursor-pointer"
              onClick={() => setQuantity(quantity + 1)}>
              +
            </span>
          </div>
        </div>

        <div className="flex justify-between font-extrabold">
          <h3>총 금액</h3>
          <h3 className="text-blue-600">{(price * quantity).toLocaleString()}원</h3>
        </div>

        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white" onClick={handleBuy}>
            구매하기
          </button>
          <button className="px-4 py-2 rounded-full bg-gray-200" onClick={onClose}>
            취소
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
