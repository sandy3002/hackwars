import TeamCard, { Organizer } from "@/components/TeamCard"

const organizers : Organizer[] = [
	{
		name: "Abhigyan Singh",
		description:"Lead",
		email: "ap2513@cse.jgec.ac.in",
		linkedin: "https://www.linkedin.com/in/abhigyan103",
		github: "https://github.com/Abhigyan103",
		image: "/assets/abhigyan.webp"
	},
	{
		name: "Sandipan Chatterjee",
		description:"DevOps",
		email: "sc2521@cse.jgec.ac.in",
		linkedin: "https://www.linkedin.com/in/sandipan-chatterjee-jgec",
		github: "https://github.com/sandy3002/",
		image: "/assets/sandipan.webp"
	},
	{
		name: "Rohini Afsana",
		description:"Social Media",
		email: "ra2554@ee.jgec.ac.in",
		linkedin: "https://www.linkedin.com/in/rohini-afsana-7a0385250/",
		github: null,
		image: "/assets/rohini.webp"
	},
	{
		name: "ubuntu",
		description:"Support (Emotional)",
		email: "hackwars.jgec@gmail.com",
		linkedin: "https://www.linkedin.com/company/hackwars",
		github: null,
		image: "/assets/ubuntu.webp"
	},
]

function TeamPage() {
  return (
	<div className="flex flex-col min-h-screen md:mx-16 justify-center items-center">
		<h1 className="sm:text-3xl text-xl font-bold my-10 text-center font-['Starjedi'] tracking-widest text-white animate-pulse">
            Meet our Team!
        </h1>
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
			{organizers.map((e)=><TeamCard key={e.name} className="w-[20rem] h-[30rem]" info={e}/>)}
		</div>
	</div>
  )
}

export default TeamPage
