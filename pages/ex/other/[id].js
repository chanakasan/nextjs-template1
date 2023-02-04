import renderSubPage from '@hoc/renderSubPage'
import One from '@ex/other/alerts'
import Two from '@ex/other/buttons'

const map = {
  1: One,
  2: Two,
}

export default function Other() {
  return renderSubPage(map)
}
