import type { FC } from 'react'
import { Title } from './title'

export const h1: FC = () => <Title level={1}>Our Vision</Title>

export const h2: FC = () => (
    <Title level={2}>Mission-critical tools should be hyper-responsive.</Title>
)
