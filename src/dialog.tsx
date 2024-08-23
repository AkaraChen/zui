import type { FC, PropsWithChildren, ReactNode } from 'react'
import './dialog.less'
import * as RDialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { zc } from './utils'

export interface DialogProps extends PropsWithChildren {
    trigger: ReactNode
    title: ReactNode
    footer?: ReactNode
    open?: boolean
    onOpenChange?: (open: boolean) => void
}

export const Dialog: FC<DialogProps> = props => {
    const { trigger, title, footer, children, open, onOpenChange } = props
    return (
        <RDialog.Root open={open} onOpenChange={onOpenChange}>
            <RDialog.Trigger asChild>{trigger}</RDialog.Trigger>
            <RDialog.Portal>
                <RDialog.Overlay className={clsx(zc('dialog', 'overlay'))} />
                <RDialog.Content className={clsx(zc('dialog', 'content'))}>
                    <RDialog.Title className={clsx(zc('dialog', 'title'))}>
                        {title}
                    </RDialog.Title>
                    <div className={clsx(zc('dialog', 'body'))}>
                        {children}
                        {footer && (
                            <div className={clsx(zc('dialog', 'footer'))}>
                                {footer}
                            </div>
                        )}
                    </div>
                </RDialog.Content>
            </RDialog.Portal>
        </RDialog.Root>
    )
}
