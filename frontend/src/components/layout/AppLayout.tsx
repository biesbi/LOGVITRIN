import { Sidebar } from './Sidebar';import { MobileBottomNav } from './MobileBottomNav';
export function AppLayout({children}:{children:React.ReactNode}){return <div className='min-h-screen md:grid md:grid-cols-[240px_1fr]'><Sidebar/><main className='pb-20 md:pb-0'>{children}</main><MobileBottomNav/></div>}
