import type { ComponentProps, FC, PropsWithChildren } from 'react'
import './menu.less'
import clsx from 'clsx'
import { zc } from './utils'
import type { LucideIcon } from 'lucide-react'
import '@fontsource/ia-writer-quattro'
import { Icon } from './icon'

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
