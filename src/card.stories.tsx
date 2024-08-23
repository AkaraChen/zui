import { Card, CardTitle } from './card'

export const card = () => (
    <Card
        style={{
            width: '300px',
        }}
        head={<CardTitle>Card Title</CardTitle>}
        body={<p>Card Body</p>}
    />
)
