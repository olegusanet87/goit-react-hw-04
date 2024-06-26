import { InfinitySpin } from "react-loader-spinner";

import css from '../Loader/Loader.module.css'

export default function Loader() {
    return (
      <span className={css.loader}>
        <InfinitySpin
  visible={true}
  width="200"
  color="#5e5eff"
  ariaLabel="infinity-spin-loading"
  />
      </span>
          
    )
}