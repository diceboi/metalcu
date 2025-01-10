import Hero from "./components/Hero"
import Elonyok from "./components/Elonyok"
import Termekek from "./components/Termekek"
import Szolgatltatasok from "./components/Szolgaltatasok"
import Velemenyek from "./components/Velemenyek"

export default function Home() {
  return (
    <>
    <Hero />
    {/*<Elonyok />*/}
    <Termekek />
    <Szolgatltatasok />
    {/*<Velemenyek />*/}
    </>
  )
}
