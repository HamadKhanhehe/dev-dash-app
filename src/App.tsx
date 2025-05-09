import { Provider } from "react-redux"
import { Home } from "./Pages/home/Home"
// import GithubStats from "./components/githubstats/GithubStats"
import { Header } from "./components/header/header"
import { Layout } from "./components/layout/Layout"
// import { WeatherWidget } from "./components/weatherWidget/WeatherWidget"
import { store } from "./store/store"




function App() {

  return (
    <>
    <Provider store={store}>
    <Header />
      <Layout>
        <Home />
    {/* <GithubStats />
    <WeatherWidget /> */}
      </Layout>
      </Provider>
    </>
  )
}

export default App




