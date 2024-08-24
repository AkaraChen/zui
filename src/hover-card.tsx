import * as RHoverCard from '@radix-ui/react-hover-card'
import type {
    Dispatch,
    FC,
    PropsWithChildren,
    ReactNode,
    SetStateAction,
} from 'react'
import './hover-card.less'
import { zc } from './utils'

export interface HoverCardProps extends PropsWithChildren {
    trigger: ReactNode
    open?: boolean
    onOpenChange?: Dispatch<SetStateAction<boolean>>
}

export const HoverCard: FC<HoverCardProps> = props => {
    const { trigger, open, onOpenChange, children } = props
    return (
        <RHoverCard.Root
            open={open}
            onOpenChange={onOpenChange}
            openDelay={200}
            closeDelay={200}
        >
            <RHoverCard.Trigger className={zc('hover-card', 'trigger')}>
                {trigger}
            </RHoverCard.Trigger>
            <RHoverCard.Portal>
                <RHoverCard.Content
                    className={zc('hover-card', 'content')}
                    sideOffset={5}
                >
                    {children}
                </RHoverCard.Content>
            </RHoverCard.Portal>
        </RHoverCard.Root>
    )
}
