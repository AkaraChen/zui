import { Download, Timer, User } from 'lucide-react'
import { useState, type FC } from 'react'
import { Button } from './button'
import { Dialog } from './dialog'
import { Statistic } from './statistic'

export const Simple: FC = () => {
    const [open, setOpen] = useState(false)
    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
            trigger={<Button>Edit Profile</Button>}
            title='Catppuccin Themes'
            footer={
                <div
                    onClick={() => setOpen(false)}
                    style={{ display: 'flex', width: '100%', gap: '8px' }}
                >
                    <Button style={{ width: '100%' }}>Install</Button>
                    <Button style={{ width: '100%' }}>Close</Button>
                </div>
            }
        >
            <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
            >
                <p style={{ margin: 'unset', fontSize: '14px' }}>
                    🦀 Soothing pastel theme for Zed
                </p>
                <Statistic icon={User} label='Andrew Tec' />
                <Statistic icon={Download} label='Published at July 31, 2024' />
                <Statistic icon={Timer} label='Version 0.2.10' />
                <Statistic icon={Download} label='Downloads: 87k' />
            </div>
        </Dialog>
    )
}
