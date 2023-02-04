import renderSubPage from '@hoc/renderSubPage'
import One from '@ex/layouts/one'
import Two from '@ex/layouts/two'

const map = {
  1: One,
  2: Two,
}

export default function Layouts() {
  return renderSubPage(map, { wrapper: false })
}
