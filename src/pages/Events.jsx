import EventCard from "../components/EventCard";
const Events = () => {
  return(<section className=" h-screen flex ">
  <div className=" ml-[10%]">
     <div className="m-[150px] mb-0 ml-[70px]">
        <h1 className=" text-5xl font-thin">Upcoming <i>Events</i></h1>
     </div>
     <div className="flex gap-12 m-10 flex-wrap">
     <div className="">
     <EventCard
        eventImg={"https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
        uni={"DAIICT"}
        eventName={"hACKOUT"}
        />
     </div>
     <div>
     <EventCard
        eventImg={"https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
        uni={"DAIICT"}
        eventName={"hACKOUT"}
        />
     </div>
     <div>
     <EventCard
        eventImg={"https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
        uni={"DAIICT"}
        eventName={"hACKOUT"}
        />
     </div>
       
     </div>
     
  </div>
     
  </section>);
}