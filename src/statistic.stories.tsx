import type { FC } from 'react'
import { Statistic } from './statistic'
import { Download } from 'lucide-react'

export const example: FC = () => (
    <Statistic icon={Download} label='Downloads: 458k' />
)
