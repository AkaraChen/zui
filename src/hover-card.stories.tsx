import type { FC } from 'react'
import { HoverCard } from './hover-card'
import { Button } from './button'
import { Github, Users, Laptop } from 'lucide-react'
import { MenuItem, Menu } from './menu'

export const nav: FC = () => (
    <HoverCard trigger={<Button variant='primary'>Hello</Button>}>
        <Menu style={{ width: '100px' }}>
            <MenuItem icon={Github}>About</MenuItem>
            <MenuItem icon={Users}>Team</MenuItem>
            <MenuItem icon={Laptop}>Jobs</MenuItem>
        </Menu>
    </HoverCard>
)
