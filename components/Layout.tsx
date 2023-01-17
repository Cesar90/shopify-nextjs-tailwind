import Nav from "./Nav"

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <div className="flex flex-col justify-between main-h-screen">
      <Nav />
      <main>{children}</main>
      <footer>
        Footer
      </footer>
    </div>
  )
}