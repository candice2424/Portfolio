import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { fetchme } from "./Services/ME/meservices";

export default function Home() {

  const [me, setMe] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4242/aboutme');

        setMe(response);
      } catch (error) {
        console.error("ERREUR:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4 white text">
        {me.map((Me,index) => (
          <HeroSection
          key={index}
          firstname={Me.firstname} 
          lastname={Me.lastname}
          phone={Me.phone}
          email={Me.email}
          address={Me.address}
          city={Me.city}
          country={Me.country}
          description={Me.description}
          birth={Me.birth_date}
          />
        ))}
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}