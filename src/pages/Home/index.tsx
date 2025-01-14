
import Hyperspeed from './HyperSpeed'
import NamePhoto from './NamePhoto'
import styles from './style.module.scss'


const Home = () => {
  return <div className={styles.wrapper}>
    <NamePhoto />
    {/* <VideoBg src="/hero.mp4" /> */}
    <Hyperspeed />
  </div>
}

export default Home