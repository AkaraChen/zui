import clsx from 'clsx'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import './kbd.less'
import { zc, type ZVariant } from './utils'

export interface KbdProps extends PropsWithChildren<ComponentProps<'kbd'>> {
    variant?: ZVariant
}

export const Kbd: FC<KbdProps> = props => {
    const { children, className, variant = 'normal', ...rest } = props
    return (
        <kbd
            className={clsx(className, zc('kbd'), zc('kbd', variant))}
            {...rest}
        >
            {children}
        </kbd>
    )
}
