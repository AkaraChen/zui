import { Download } from 'lucide-react'
import type { FC } from 'react'
import { Statistic } from './statistic'

export const example: FC = () => (
    <Statistic icon={Download} label='Downloads: 458k' />
)
