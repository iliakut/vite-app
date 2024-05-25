import { useEffect } from "react"

const VITE_API_URL = import.meta.env.VITE_API_URL

export const Header = () => {
  const id = 123

  useEffect(() => {
    fetch(`${VITE_API_URL}${id}`)
  }, [])

  return (
    <header>App header</header>
  )
}