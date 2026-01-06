const ProductCardSkeleton = () => {
  return (
    <div
      className="
        flex flex-col
        rounded-2xl shadow-lg
        bg-white
        pb-4
        w-62
        select-none
      ">
      {/* 이미지 영역 (실 카드와 동일) */}
      <div className="w-full h-48 overflow-hidden rounded-t-2xl">
        <div className="w-full h-full bg-gray-200 animate-pulse" />
      </div>

      {/* 텍스트 영역 (항상 같은 높이) */}
      <div className="px-4 pt-3 space-y-2">
        {/* 상품명 2줄 */}
        <div className="h-4 w-11/12 bg-gray-200 rounded animate-pulse" />

        {/* 가격 */}
        <div className="h-4 w-6/12 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  )
}

export default ProductCardSkeleton
