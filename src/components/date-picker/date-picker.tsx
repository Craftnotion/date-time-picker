import React from 'react'

import style from '../../styles/test.module.scss'
import type { DateTimePickerProps } from '../../types/types.js'

export const DatePicker: React.FC<DateTimePickerProps> = () => {
  return (
    <div className={style.test}>
      <input type="date" />
    </div>
  )
}
