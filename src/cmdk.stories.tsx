import {
    BlocksIcon,
    BookTextIcon,
    DownloadIcon,
    FileCheck2Icon,
    FrameIcon,
    HomeIcon,
    LaptopIcon,
    MoonIcon,
    NewspaperIcon,
    RocketIcon,
    SignpostIcon,
} from 'lucide-react'
import { useState, type FC } from 'react'
import { Cmdk } from './cmdk'

export const normal: FC = () => {
    const [search, setSearch] = useState('')
    return (
        <Cmdk
            search={search}
            onSearch={setSearch}
            placeholder='Search for commands...'
            groups={[
                {
                    id: 'theme',
                    label: 'Website theme',
                    items: [
                        {
                            id: 'theme-toggle',
                            label: 'Turn dark mode on',
                            icon: MoonIcon,
                        },
                        {
                            id: 'follow-system-theme',
                            label: 'Follow system theme',
                            icon: LaptopIcon,
                        },
                    ],
                },
                {
                    id: 'zed-brand',
                    label: "Zed's brand",
                    items: [
                        {
                            id: 'copy-logo-as-svg',
                            label: 'Copy logo as SVG',
                            icon: FrameIcon,
                        },
                        {
                            id: 'copy-wordmark-as-svg',
                            label: 'Copy wordmark as SVG',
                            icon: SignpostIcon,
                        },
                        {
                            id: 'view-brand-guidelines',
                            label: 'View brand guidelines',
                            icon: FileCheck2Icon,
                        },
                    ],
                },
                {
                    id: 'pages',
                    label: 'Pages',
                    items: [
                        {
                            id: 'home',
                            label: 'Home',
                            icon: HomeIcon,
                        },
                        {
                            id: 'download',
                            label: 'Download',
                            icon: DownloadIcon,
                        },
                        {
                            id: 'release',
                            label: 'Release',
                            icon: RocketIcon,
                        },
                        {
                            id: 'docs',
                            label: 'Docs',
                            icon: BookTextIcon,
                        },
                        {
                            id: 'extensions',
                            label: 'Extensions',
                            icon: BlocksIcon,
                        },
                        {
                            id: 'blog',
                            label: 'Blog',
                            icon: NewspaperIcon,
                        },
                    ],
                },
            ]}
        />
    )
}
