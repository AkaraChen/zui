import type { ComponentProps, FC } from 'react'
import { zc } from './utils'
import clsx from 'clsx'
import './input.less'

export interface InputProps extends ComponentProps<'input'> {}

export const Input: FC<InputProps> = props => {
    const { className, ...rest } = props
    return <input className={clsx(zc('input'), className)} {...rest} />
}
