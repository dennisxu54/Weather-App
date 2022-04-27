import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { WiDayRainMix } from "react-icons/wi";

const Home: NextPage = () => {
  const days = ["Monday", "Tusday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  const temp = [23, 35, 20, 18, 15, 10, 1]
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <main className={styles.container}>
        <h1>
          Weather Forecast
        </h1>

        <h3>
          City Country°
        </h3>

        <div className={styles.card_container}>
          <div className={styles.card}>
            The first Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The second Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The third Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The fourth Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The fifth Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The sixth Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
          <div className={styles.card}>
            The seventh Day weather <br/>
            23°C <br/>
            <WiDayRainMix size={70} />
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
