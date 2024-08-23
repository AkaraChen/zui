import clsx from 'clsx'
import type { ComponentProps, FC } from 'react'
import './input.less'
import { zc } from './utils'

export interface InputProps extends ComponentProps<'input'> {}

export const Input: FC<InputProps> = props => {
    const { className, ...rest } = props
    return <input className={clsx(zc('input'), className)} {...rest} />
}
