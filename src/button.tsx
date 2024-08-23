import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import {
    forwardRef,
    type ComponentProps,
    type FC,
    type PropsWithChildren,
} from 'react'
import './button.less'
import { Kbd } from './kbd'
import { zc } from './utils'

export interface ButtonProps
    extends PropsWithChildren<ComponentProps<'button'>> {
    variant?: 'primary' | 'normal'
    icon?: LucideIcon
    kbdShortcut?: string
}

export const Button: FC<ButtonProps> = forwardRef((props, ref) => {
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
            ref={ref}
        >
            {Icon && <Icon className={zc('button', 'icon')} />}
            {children}
            {kbdShortcut && <Kbd variant={variant}>{kbdShortcut}</Kbd>}
        </button>
    )
})
