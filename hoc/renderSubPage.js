import { useRouter } from 'next/router'
import Wrapper from '@components/page-wrapper'

const render = (Component, opts) => {
  const defaultOpts = {
    box: true,
    wrapper: true,
  }
  const _opts = {
    ...defaultOpts,
    ...opts,
  }
  const useBox = _opts.box
  const useWrapper = _opts.wrapper
  if (!Component) {
    return (
      <Wrapper>
        <h1>Component Not Found</h1>
      </Wrapper>
    )
  }
  if (!useWrapper) {
    return <Component />
  }
  return (
    <Wrapper useBox={useBox}>
      <Component />
    </Wrapper>
  )
}

const renderSubPage = (map, opts) => {
  const router = useRouter()
  const { id } = router.query
  const Component = map[id]
  return render(Component, opts)
}

export default renderSubPage
