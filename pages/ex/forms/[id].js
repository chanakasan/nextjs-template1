import renderSubPage from '@hoc/renderSubPage'
import One from '@ex/forms/editable'
import Two from '@ex/forms/formik'

const map = {
  1: One,
  2: Two,
}

export default function Forms() {
  return renderSubPage(map)
}
