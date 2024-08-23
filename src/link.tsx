import clsx from 'clsx'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import './link.less'
import '@fontsource/ia-writer-quattro'

export interface LinkProps extends PropsWithChildren<ComponentProps<'a'>> {}

export const Link: FC<LinkProps> = props => {
    const { children, className, ...rest } = props
    return (
        <a className={clsx(className, 'zui_link')} {...rest}>
            {children}
        </a>
    )
}
