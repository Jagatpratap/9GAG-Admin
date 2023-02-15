import AccountInfo from '@/components/AccountInfo'
import Audience from '@/components/Audience'
import Followers from '@/components/Followers'
import Navbar from '@/components/Navbar'
import 'react-circular-progressbar/dist/styles.css';
import styles from '@/styles/Home.module.css'
import Score from '@/components/Score';
import Posts from '@/components/Posts';
import FollowersChart from '@/components/Chart/FollowersChart';
import GenderChart from '@/components/Chart/GenderChart';
import CountryChart from '@/components/Chart/CountryChart';
import CityChart from '@/components/Chart/CityChart';
import AgeGroupChart from '@/components/Chart/AgeGroupChart';
import AgeSplitChart from '@/components/Chart/AgeSplitChart';



export default function Home() {
  return (
    <>
      <Navbar />
      <div className='flex flex-col lg:flex-row w-full gap-5 px-5 lg:px-[50px] my-7 '>
        <div id="left" className='flex flex-col w-full gap-5 lg:w-1/5'>
          <AccountInfo />
          <Audience />
        </div>
        <div id="mid" className='flex flex-col gap-5 w-full  lg:max-w-[58%] '>
          <FollowersChart />
          <GenderChart />
          <div className='flex flex-col gap-5 lg:flex-row'>
            <CityChart/>
            <CountryChart />
          </div>
          <div className="flex flex-col items-stretch gap-5 lg:flex-row">
            <AgeSplitChart/>
            <AgeGroupChart/>
          </div>



          <Posts />
        </div>
        <div id="right" className='flex flex-col w-full gap-5 lg:w-1/5'>
          <Followers />
          <Score />
        </div>
      </div>
    </>
  )
}
