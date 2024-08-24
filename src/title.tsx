import '@fontsource-variable/lora'
import clsx from 'clsx'
import type { ComponentProps, FC } from 'react'
import './title.less'
import { zc } from './utils'

export interface TitleProps extends ComponentProps<'h1'> {
    level: 1 | 2 | 3 | 4 | 5 | 6
}

export const Title: FC<TitleProps> = props => {
    const { level, children, className, ...rest } = props
    const Tag = `h${level}` as const
    return (
        <Tag {...rest} className={clsx(className, zc('title'))}>
            {children}
        </Tag>
    )
}
