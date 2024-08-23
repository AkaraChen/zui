import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, FC, ReactNode } from 'react'
import { Icon } from './icon'
import './statistic.less'
import { zc } from './utils'
import clsx from 'clsx'

export interface StatisticProps extends ComponentProps<'div'> {
    icon: LucideIcon
    label: ReactNode
}

export const Statistic: FC<StatisticProps> = props => {
    const { icon, className, label, ...rest } = props
    return (
        <div className={clsx(className, zc('statistic'))} {...rest}>
            <Icon
                lucide={icon}
                variant='normal'
                className={zc('statistic', 'icon')}
            />
            <div className={zc('statistic', 'label')}>{label}</div>
        </div>
    )
}
