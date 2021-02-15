import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="https://th.pngtree.com/so/little-boy">
            <Image width={120} height={100} src="/logo.png" title="little boy png จาก th.pngtree.com" />
          </a>
        </div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/users">
          <a>User Listing</a>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
