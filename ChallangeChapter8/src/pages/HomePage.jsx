import NavigationBar from 'components/common/NavigationBar';
import SocialMediaBar from 'components/common/SocialMediaBar';
import HomePageComponents from 'components/resources/HomePage';

const HomePage = () => (
  <div>
    <NavigationBar />

    <HomePageComponents.PlayNow />
    <HomePageComponents.TheGames />
    <HomePageComponents.Feature />
    <HomePageComponents.Sysreq />
    <HomePageComponents.TopScores />
    <HomePageComponents.Newsletter />

    <SocialMediaBar />
  </div>
);

export default HomePage;