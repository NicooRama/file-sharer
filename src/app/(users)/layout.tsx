import type {Metadata} from 'next'

export const metadata: Metadata = {}

export default function Layout({
                                   children,
                               }: {
    children: React.ReactNode
}) {
    return (
        <div className={'container'}>
            {children}
        </div>
    )
}
