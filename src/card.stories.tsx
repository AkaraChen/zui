import { Download } from 'lucide-react'
import { Card, CardTitle } from './card'
import { Statistic } from './statistic'

export const card = () => (
    <Card
        style={{
            width: '300px',
        }}
        head={<CardTitle>Card Title</CardTitle>}
        body={<p>Card Body</p>}
        foot={<Statistic icon={Download} label='Published at July 31, 2024' />}
    />
)
