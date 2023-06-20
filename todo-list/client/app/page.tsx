"use client"

import ListItem from '@/components/ListItem'

export default function Home() {
  return (
    <main>
      <button>Add</button>
      <button>Clear</button>
      <ListItem task="Water the plants"/>
    </main>
  )
}
