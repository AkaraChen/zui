import '@fontsource/ia-writer-quattro'
import clsx from 'clsx'
import { Command } from 'cmdk'
import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, Dispatch, FC, SetStateAction } from 'react'
import './cmdk.less'
import { Icon } from './icon'
import { zc } from './utils'

export interface CmdkItem {
    id: string
    label: string
    icon: LucideIcon
    onClick?: ComponentProps<'div'>['onClick']
}

export interface CmkdGroup {
    id: string
    label: string
    items: CmdkItem[]
}

export interface CmdkProps {
    groups: CmkdGroup[]
    search: string
    onSearch: Dispatch<SetStateAction<string>>
    placeholder?: string
}

export const Cmdk: FC<CmdkProps> = props => {
    const { groups, search, onSearch, placeholder } = props
    return (
        <Command className={clsx(zc('cmdk'))}>
            <Command.Input
                value={search}
                onValueChange={onSearch}
                className={clsx(zc('cmdk', 'input'))}
                placeholder={placeholder}
            />
            <Command.List className={clsx(zc('cmdk', 'list'))}>
                <Command.Empty>No results found.</Command.Empty>

                {groups.map(group => (
                    <Command.Group
                        key={group.id}
                        heading={group.label}
                        className={clsx(zc('cmdk', 'group'))}
                    >
                        {group.items.map(item => (
                            <Command.Item
                                className={clsx(zc('cmdk', 'group', 'item'))}
                                onClick={item.onClick}
                            >
                                <Icon lucide={item.icon} />
                                {item.label}
                            </Command.Item>
                        ))}
                    </Command.Group>
                ))}
            </Command.List>
        </Command>
    )
}
