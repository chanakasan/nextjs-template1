import style from './_helpers.module.css'

// components
export const Spacer = () => <div className={style.spacer}></div>
export const Header = ({ title }) => (
  <header className={style.header}>
    <h1>{title}</h1>
  </header>
)
export const Footer = ({ link }) => (
  <footer className={style.footer}>
    <a href={link || '#'} target="_blank">Docs</a>
  </footer>
)
export const Routes = ({ l, p, ex }) => {
  const list = l
  const href = (r,i) => ex === true ? `/ex/${p}/${i+1}` : `/${r}` 
  return (
    <div className={style.nav}>
      {
        list.map((r, i) =>
          <a key={r} target="_blank" href={href(r, i)}>{r}</a>
        )
      }
    </div>
  )
}

// utils
export const createArray = (n) => Array.from({length: n}, (_, i) => i + 1)
