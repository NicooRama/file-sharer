import type {Metadata} from 'next'

export const metadata: Metadata = {}

//TODO: los que no son root layout no deben tener html y body?
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
