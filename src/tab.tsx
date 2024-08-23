import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, FC, ReactNode } from 'react'
import { Icon } from './icon'
import './tab.less'
import { zc } from './utils'

export interface TabItem {
    id: string
    label: ReactNode
    icon: LucideIcon
    description?: string
}

export interface TabProps extends ComponentProps<'div'> {
    tabs: TabItem[]
    tab: TabItem
    onTabChange: (tab: TabItem) => void
    vertical?: boolean
}

export const Tab: FC<TabProps> = props => {
    const { tabs, tab, onTabChange, className, vertical, ...rest } = props
    return (
        <div
            className={clsx(
                className,
                zc('tab'),
                vertical && zc('tab', 'vertical'),
            )}
            {...rest}
        >
            {tabs.map(t =>
                !vertical ? (
                    <div
                        key={t.id}
                        className={clsx(
                            zc('tab', 'item'),
                            tab.id === t.id && zc('tab', 'item', 'active'),
                        )}
                        onClick={() => onTabChange(t)}
                    >
                        <Icon lucide={t.icon} />
                        {t.label}
                    </div>
                ) : (
                    <div
                        key={t.id}
                        className={clsx(
                            zc('tab', 'item'),
                            zc('tab', 'item', 'vertical'),
                            tab.id === t.id && zc('tab', 'item', 'active'),
                        )}
                        onClick={() => onTabChange(t)}
                    >
                        <div
                            className={clsx(
                                zc('tab', 'item', 'vertical', 'head'),
                            )}
                        >
                            <Icon lucide={t.icon} />
                            {t.label}
                        </div>
                        <div
                            className={clsx(
                                zc('tab', 'item', 'vertical', 'description'),
                            )}
                        >
                            {t.description}
                        </div>
                    </div>
                ),
            )}
        </div>
    )
}
