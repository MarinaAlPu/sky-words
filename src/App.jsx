import { useEffect, useState } from 'react'
import './App.css'
import { Content } from './components/Content'
import { Header } from './components/Header'


function App() {
  // [loading, setLoading] - кортеж - точно знаем, сколько элементов будет внутри массива
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>
      <Header />
      {/* {!loading ? <Content loading={loading}/> : null} */}
      {!loading && <Content loading={loading}/>}
      {/* <Content loading={loading}/> */}
    </>
  )
}

export default App
