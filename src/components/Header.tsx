import type { HeaderProps } from '../global/types'
import Icon from './Icon'

const Header: React.FC<HeaderProps> = ({ money }) => {
  return (
    <div className="w-full h-20 bg-white shadow-md flex flex-row items-center justify-between px-12">
      <h2 className="text-2xl font-extrabold">SHOP-FLOW</h2>
      <div className="flex flex-row items-center justify-center px-3 py-1 rounded-full bg-blue-100">
        <Icon name="CiMoneyCheck1" size={24} color="blue" />
        <span className="ml-2 font-extrabold text-blue-600">잔액: {money.toLocaleString()}원</span>
      </div>
    </div>
  )
}

export default Header
