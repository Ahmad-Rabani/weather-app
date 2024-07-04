import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Loader = () => {
  return (
    <>
    <Skeleton />
    <Skeleton count={5} />
    </>
  )
}

export default Loader