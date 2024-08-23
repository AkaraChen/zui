import type { ComponentProps, FC, PropsWithChildren } from 'react'
import './button.less'
import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import '@fontsource/ia-writer-quattro'
import { zc } from './utils'

export interface ButtonProps
    extends PropsWithChildren<ComponentProps<'button'>> {
    variant?: 'primary' | 'normal'
    icon?: LucideIcon
    kbdShortcut?: string
}

export const Button: FC<ButtonProps> = props => {
    const {
        children,
        className,
        variant = 'normal',
        icon: Icon,
        kbdShortcut,
        ...rest
    } = props
    return (
        <button
            className={clsx(className, zc('button'), zc('button', variant))}
            {...rest}
        >
            {Icon && <Icon className={zc('button', 'icon')} />}
            {children}
            {kbdShortcut && (
                <kbd className={zc('button', 'kbd')}>{kbdShortcut}</kbd>
            )}
        </button>
    )
}
