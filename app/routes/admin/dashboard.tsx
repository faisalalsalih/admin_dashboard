import { Header } from 'components'
import StatsCard from 'components/StatsCard';
import TripCard from 'components/TripCard';
import React from 'react'
import { dashboardStats, user, allTrips } from '~/constants/index';


const Dashboard = () => {

  return (
    <>
      <main className='dashboard wrapper'>


        <Header title={`Welcome ${user.name ?? 'Guest'} 👋`} description="Track activity, trends and popular destinations in real time"/>
        
        <section className='flex flex-col gap-6'>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

            <StatsCard headerTitle="Total Users" total={dashboardStats.totalUsers} currentMonthCount={dashboardStats.userJoined.currentMonth} lastMonthCount={dashboardStats.userJoined.lastMonth} />
            <StatsCard headerTitle="Total Trips" total={dashboardStats.totalTrips} currentMonthCount={dashboardStats.tripsCreated.currentMonth} lastMonthCount={dashboardStats.tripsCreated.lastMonth} />
            <StatsCard headerTitle="Active Users Today" total={dashboardStats.userRole.total} currentMonthCount={dashboardStats.userRole.currentMonth} lastMonthCount={dashboardStats.userRole.lastMonth} />


          </div>



        </section>


        <section className='trip-grid'>

          {allTrips.slice(0, 4).map(({id, name, imageUrls, itinerary, tags, estimatedPrice }) => (
            <TripCard key={id} id={id.toString()} name={name} imageUrl={imageUrls[0]} location={itinerary?.[0]?.location ?? ''} tags={tags} price={estimatedPrice}/>
          ))}

          
        </section>


      </main>
    </>
  )
}

export default Dashboard
