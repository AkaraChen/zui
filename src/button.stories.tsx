import { Download } from 'lucide-react'
import type { FC } from 'react'
import { Button } from './button'

export const primary: FC = () => <Button variant='primary'>Download Now</Button>
export const normal: FC = () => <Button>Log in</Button>
export const withIcon: FC = () => (
    <Button icon={Download} variant='primary'>
        Download Now
    </Button>
)
export const withIconAndShortcut: FC = () => (
    <Button icon={Download} kbdShortcut='D' variant='primary'>
        Download Now
    </Button>
)

export const normalWithAll: FC = () => (
    <Button icon={Download} kbdShortcut='D' variant='normal'>
        Download Now
    </Button>
)
