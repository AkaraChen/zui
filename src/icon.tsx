import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, FC } from 'react'
import { zc, type ZSize, type ZVariant } from './utils'
import './icon.less'

export interface IconProps extends ComponentProps<LucideIcon> {
    lucide: LucideIcon
    size?: ZSize
    variant?: ZVariant
}

export const Icon: FC<IconProps> = props => {
    const {
        lucide: Lucide,
        className,
        variant = 'primary',
        size = 'medium',
        ...rest
    } = props
    return (
        <Lucide
            className={clsx(
                className,
                zc('icon'),
                zc('icon', size),
                zc('icon', variant),
            )}
            {...rest}
        />
    )
}
