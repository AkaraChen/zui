import { Github, Laptop, Users } from 'lucide-react'
import type { FC } from 'react'
import { Button } from './button'
import { HoverCard } from './hover-card'
import { Menu, MenuItem } from './menu'

export const nav: FC = () => (
    <HoverCard trigger={<Button variant='primary'>Hello</Button>}>
        <Menu style={{ width: '100px' }}>
            <MenuItem icon={Github}>About</MenuItem>
            <MenuItem icon={Users}>Team</MenuItem>
            <MenuItem icon={Laptop}>Jobs</MenuItem>
        </Menu>
    </HoverCard>
)
