import '@fontsource/ia-writer-quattro'
import clsx from 'clsx'
import type { ComponentProps, Dispatch, FC, SetStateAction } from 'react'
import './nav.less'
import { zc } from './utils'

export interface NavItem {
    id: string
    label: string
}

export interface NavProps extends ComponentProps<'nav'> {
    items: NavItem[]
    active: NavItem
    onActiveChange: Dispatch<SetStateAction<NavItem>>
}

export const Nav: FC<NavProps> = props => {
    const { items, active, onActiveChange, className, ...rest } = props
    return (
        <nav {...rest} className={clsx(zc('nav'), className)}>
            {items.map(item => (
                <button
                    key={item.id}
                    className={clsx(
                        zc('nav', 'item'),
                        active.id === item.id && zc('nav', 'item', 'active'),
                    )}
                    onClick={() => onActiveChange(item)}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    )
}
