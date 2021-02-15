import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit corrupti
        iste exercitationem perferendis! Exercitationem, excepturi. Porro esse
        eaque natus aliquid doloremque tempore. Magnam voluptatibus amet dolore
        rerum incidunt non molestias.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, qui.
        Dolorum totam, in accusamus ipsum magni aspernatur voluptates quam
        nostrum laudantium. Id quae non quod enim libero adipisci doloremque
        autem.
      </p>
      <Link href="/users">
        <a>See Users Listing</a>
      </Link>
    </div>
  )
}
