import Link from 'next/link'

export const NavLink = ({
  href,
  target,
  children,
}: {
  href: string
  target?: string
  children?: React.ReactNode
}) => {
  return (
    <Link
      href={href}
      target={target || '_self'}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
