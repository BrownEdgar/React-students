
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    width={1000}
    height={760}
    viewBox="0 0 1200 760"
    backgroundColor="#dedede"
    foregroundColor="#ccc"
    {...props}
  >
    <rect x="9" y="6" rx="2" ry="2" width="350" height="180" />
  </ContentLoader>
)

export default MyLoader

