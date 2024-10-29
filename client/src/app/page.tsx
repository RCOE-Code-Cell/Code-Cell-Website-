
import Herotext from '@/components/Herotext';
import HomeEventCard from '@/components/HomeEventCard';
import Footer from '@/components/Footer';
import UserIcon from '@/components/UserIcon';
export default function Home() {
  return (
   <div >
    {/* <UserIcon></UserIcon> */}
    <Herotext></Herotext>
    
    <HomeEventCard></HomeEventCard>
    <Footer></Footer>
   </div>
  );
}
