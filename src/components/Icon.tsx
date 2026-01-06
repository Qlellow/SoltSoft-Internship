import type { IconProps } from '../global/types'
import { memo } from 'react'

import { CiMoneyCheck1 } from 'react-icons/ci'

const Icon: React.FC<IconProps> = ({ name, size, color }) => {
  switch (name) {
    case 'CiMoneyCheck1':
      return <CiMoneyCheck1 size={size} color={color} />
    default:
      return null
  }
}

export default memo(Icon)
