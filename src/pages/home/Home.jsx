import Footer from "../../components/layouts/Footer"
import Header from "../../components/layouts/Header"
import AddSubject from "./AddSubject"
import Attendence from "./Attendence"

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-4 min-h-[calc(100vh_-_9rem)]">
        <AddSubject />
        <Attendence />
      </main>
      <Footer/>
    </div>
  )
}
