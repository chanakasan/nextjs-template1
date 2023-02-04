import renderSubPage from '@hoc/renderSubPage'
import One from '@ex/cards/one'

const map = {
  1: One,
}

export default function Cards() {
  return renderSubPage(map, { box: false })
}
