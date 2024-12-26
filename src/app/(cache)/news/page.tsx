import { sleep } from '@/utils'

export default async function Page() {
  await sleep(3000)
  return (
    <div>
      新闻：{ new Date().toLocaleString() }
    </div>
  )
}
