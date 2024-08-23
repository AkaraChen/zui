import clsx from 'clsx'
import type { LucideIcon } from 'lucide-react'
import type { FC, ReactNode } from 'react'
import { Icon } from './icon'
import './tab.less'
import { zc } from './utils'

export interface TabItem {
    id: string
    label: ReactNode
    icon: LucideIcon
}

export interface TabProps {
    tabs: TabItem[]
    tab: TabItem
    onTabChange: (tab: TabItem) => void
}

export const Tab: FC<TabProps> = props => {
    const { tabs, tab, onTabChange } = props
    return (
        <div className={zc('tab')}>
            {tabs.map(t => (
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
            ))}
        </div>
    )
}
