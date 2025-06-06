import Navigation from "@/components/navigation"
import HomePage from "@/components/home-page"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <Navigation />
      <HomePage />
      <Footer />
    </div>
  )
}
