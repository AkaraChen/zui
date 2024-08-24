import { useState, type FC } from 'react'
import { Nav, type NavItem } from './nav'

export const simple: FC = () => {
    const items: NavItem[] = [
        { id: 'all', label: 'All Posts' },
        { id: 'featured', label: 'Featured Posts' },
        { id: 'decoded', label: 'Zed Decoded' },
        { id: 'weekly', label: 'Zed Weekly' },
    ]
    const [active, setActive] = useState<NavItem>(items[0]!)
    return (
        <Nav
            items={items}
            active={active}
            onActiveChange={setActive}
            style={{
                width: '150px',
            }}
        />
    )
}
