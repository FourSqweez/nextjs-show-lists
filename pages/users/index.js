import style from '../../styles/Users.module.scss'
import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()

  return {
    props: {
      users: data,
    },
  }
}
const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>User List | Users</title>
        <meta name="keyword" content="users" />
      </Head>
      <div>
        <h1>All users</h1>
        {users.map((user) => (
          <Link key={user.id} href={`/users/${user.id}`}>
            <a className={style.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Users
