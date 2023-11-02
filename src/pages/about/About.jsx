import Footer from "../../components/layouts/Footer";
import Header from "../../components/layouts/Header";
import { aboutApp, howToUse, note } from "../../data/const";

export default function About() {
    return (
        <>
            <Header />
            <section className="p-4 min-h-[calc(100vh_-_9rem)]">
                <div className="px-4">

                    <h1 className="mb-4">About This App</h1>
                    <ul className="list-disc list-outside">
                        {aboutApp.map(item => {
                            return <li key={item.id} className="text-balance">{item.desc}</li>
                        })}

                    </ul>

                    <h1 className="my-4">How To Use</h1>
                    <ol className="list-decimal list-outside">
                        {howToUse.map(item => {
                            return <li key={item.id} className="text-balance">{item.desc}</li>
                        })}
                    </ol>

                    <h1 className="my-4 text-red">NOTE</h1>
                    <ul className="list-disc list-outside">
                        {note.map(item => {
                            return <li key={item.id} className="text-balance">{item.desc}</li>
                        })}
                    </ul>
                </div>
            </section>
            <Footer />
        </>
    )
}
