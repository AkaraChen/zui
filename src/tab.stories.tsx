import {
    Code2Icon,
    SquareFunctionIcon,
    TerminalIcon,
    TextCursorIcon,
    TreePineIcon,
} from 'lucide-react'
import { useState, type FC } from 'react'
import { Tab, type TabItem } from './tab'

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

export const normal: FC = () => {
    const [tab, setTabs] = useState<TabItem>(tabs[0]!)
    return <Tab tabs={tabs} tab={tab} onTabChange={setTabs} />
}
