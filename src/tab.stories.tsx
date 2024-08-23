import {
    Code2Icon,
    ListTreeIcon,
    SpellCheck2Icon,
    SquareFunctionIcon,
    TerminalIcon,
    TextCursorIcon,
    TreePineIcon,
    WrapTextIcon,
} from 'lucide-react'
import { useState, type FC } from 'react'
import { Tab, type TabItem } from './tab'

export const normal: FC = () => {
    const tabs: TabItem[] = [
        {
            id: 'muilti-model',
            label: 'Muilti Model',
            icon: Code2Icon,
        },
        {
            id: 'interactive-programming',
            label: 'Interactive Programming',
            icon: SquareFunctionIcon,
        },
        {
            id: 'multi-language',
            label: 'Multi Language',
            icon: TreePineIcon,
        },
        {
            id: 'terminal-task-manager',
            label: 'Terminal Task Manager',
            icon: TerminalIcon,
        },
        {
            id: 'vim-friendly',
            label: 'Vim Friendly',
            icon: TextCursorIcon,
        },
    ]
    const [tab, setTabs] = useState<TabItem>(tabs[0]!)
    return <Tab tabs={tabs} tab={tab} onTabChange={setTabs} />
}

export const vertical: FC = () => {
    const tabs: TabItem[] = [
        {
            id: 'language-server-support',
            label: 'Language Server support',
            description: 'Integrate with any language server.',
            icon: SpellCheck2Icon,
        },
        {
            id: 'outline-view',
            label: 'Outline View',
            description: "Navigate through a file's symbols.",
            icon: ListTreeIcon,
        },
        {
            id: 'text-and-line-maniplation',
            label: 'Text and Line Manipulation',
            description: 'Smoothly and efficiently edit your code.',
            icon: WrapTextIcon,
        },
    ]
    const [tab, setTabs] = useState<TabItem>(tabs[0]!)
    return (
        <Tab
            tabs={tabs}
            tab={tab}
            onTabChange={setTabs}
            vertical
            style={{
                width: '512px',
            }}
        />
    )
}
