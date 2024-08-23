import type { FC } from 'react'
import { Menu, MenuItem } from './menu'
import { Github, Laptop, Users } from 'lucide-react'

export const basic: FC = () => (
    <Menu style={{ width: '100px' }}>
        <MenuItem>About</MenuItem>
        <MenuItem>Team</MenuItem>
        <MenuItem>Jobs</MenuItem>
    </Menu>
)

export const basicWithIcon: FC = () => (
    <Menu style={{ width: '100px' }}>
        <MenuItem icon={Github}>About</MenuItem>
        <MenuItem icon={Users}>Team</MenuItem>
        <MenuItem icon={Laptop}>Jobs</MenuItem>
    </Menu>
)
