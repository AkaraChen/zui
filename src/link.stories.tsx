import type { FC } from 'react'
import { Link } from './link'

export const link: FC = () => <Link href='#'>Click me</Link>
export const linkWithLeftArrow = () => <Link>← Back to Blog</Link>
