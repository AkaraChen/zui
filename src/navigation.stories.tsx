import { Github, Laptop, Users } from 'lucide-react'
import type { FC } from 'react'
import { Navigation, type NavigationProps } from './navigation'

const links: NavigationProps[] = [
    { label: 'Releases' },
    { label: 'Extensions' },
    { label: 'Docs' },
    { label: 'Blog' },
    {
        label: 'Company',
        items: [
            { label: 'About', icon: Github },
            { label: 'Team', icon: Users },
            { label: 'Jobs', icon: Laptop },
        ],
    },
]

export const simple: FC = () => (
    <div style={{ display: 'flex', gap: '8px' }}>
        {links.map((link, index) => (
            <Navigation key={index} {...link} />
        ))}
    </div>
)
