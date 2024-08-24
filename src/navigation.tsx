import '@fontsource/ia-writer-quattro'
import clsx from 'clsx'
import { ChevronDown, type LucideIcon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'
import { HoverCard } from './hover-card'
import { Icon } from './icon'
import { Menu, MenuItem } from './menu'
import './navigation.less'
import { zc } from './utils'

export interface NavigationItem {
    label: string
    href?: string
    onClick?: ComponentProps<typeof MenuItem>['onClick']
    icon?: LucideIcon
}

export interface NavigationProps extends Omit<NavigationItem, 'icon'> {
    items?: NavigationItem[]
}

export const Navigation: FC<NavigationProps> = props => {
    const { label, href, items, onClick } = props
    const handleClick: ComponentProps<typeof MenuItem>['onClick'] = e => {
        if (href) {
            window.location.href = href
        }
        onClick?.(e)
    }
    if (!items) return <MenuItem onClick={handleClick}>{label}</MenuItem>
    return (
        <HoverCard
            trigger={
                <MenuItem
                    onClick={handleClick}
                    className={clsx(zc('navigation', 'item'))}
                >
                    {label}{' '}
                    <Icon
                        lucide={ChevronDown}
                        variant='normal'
                        className={clsx(zc('navigation', 'item', 'icon'))}
                    />
                </MenuItem>
            }
        >
            <Menu style={{ width: '100px' }}>
                {items?.map(item => (
                    <MenuItem
                        key={item.label}
                        icon={item.icon}
                        onClick={item.onClick}
                    >
                        {item.label}
                    </MenuItem>
                ))}
            </Menu>
        </HoverCard>
    )
}
