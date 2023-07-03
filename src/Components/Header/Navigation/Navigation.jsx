import { Categories } from './Catogories/Categories.jsx'
import { Gender } from './Gender/Gender.jsx'

export const Navigation = () => (
  <nav>
    <div className="container">
      <Gender />
      <Categories />
    </div>
  </nav>
)
