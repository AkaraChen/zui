import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react'
import './card.less'
import '@fontsource/ia-writer-quattro'
import { zc } from './utils'

export interface CardProps extends PropsWithChildren<ComponentProps<'div'>> {
    head: ReactNode
    body: ReactNode
    foot?: ReactNode
}

export const CardTitle: FC<PropsWithChildren> = props => {
    const { children } = props
    return <div className='zui_card_title'>{children}</div>
}

export const Card: FC<CardProps> = props => {
    const { head, body, foot, ...rest } = props
    return (
        <div className={zc('card')} {...rest}>
            <div className={zc('card', 'head')}>{head}</div>
            <div className={zc('card', 'body')}>{body}</div>
            {foot && <div className={zc('card', 'foot')}>{foot}</div>}
        </div>
    )
}
