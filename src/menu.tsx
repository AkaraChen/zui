import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { Icon } from './icon'
import './menu.less'
import { zc } from './utils'

export interface MenuProps extends PropsWithChildren<ComponentProps<'div'>> {}

export interface MenuItemProps
    extends PropsWithChildren<ComponentProps<'button'>> {
    icon?: LucideIcon
}

export const Menu: FC<MenuProps> = props => {
    const { children, className, ...rest } = props
    return (
        <div className={clsx(className, zc('menu'))} {...rest}>
            {children}
        </div>
    )
}

export const MenuItem: FC<MenuItemProps> = props => {
    const { children, className, icon, ...rest } = props
    return (
        <button className={clsx(className, zc('menu', 'item'))} {...rest}>
            {icon && <Icon lucide={icon} />}
            {children}
        </button>
    )
}
