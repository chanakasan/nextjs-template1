import style from './home.module.css'
import {
  Routes,
  Header,
  Footer,
} from '@components/_helpers'

const routes1 = [
  'alerts',
  'buttons',
]
const routes2 = [
  'layout 1',
  'layout 1',
]
const routes3 = [
  'form 1',
  'form 2',
]
const routes4 = [
  'card 1',
  'card 2',
]

const routes = [
  'test1',
  'test2'
]

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header title="NextJS Template1" />
      <main className={style.main}>
        <h1>Examples</h1>
        <div className={style.columns}>
          <Routes ex={true} p='other' l={routes1} />
          <Routes ex={true} p='layouts' l={routes2} />
          <Routes ex={true} p='cards' l={routes4} />
          <Routes ex={true} p='forms' l={routes3}  />
        </div>

        <h1>Pages</h1>
        <div className={style.columns}>
          <Routes l={routes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
