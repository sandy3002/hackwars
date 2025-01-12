"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

import TeamCard from "@/components/TeamCard";

export default function Register() {
  const {toast} = useToast();
  const router = useRouter();
  return (
    
<div className="container items-center justify-center ">
	<div className="mx-auto w-2/3  flex justify-between py-32 row vh-100">  {/* md:flex-col not working */}


<TeamCard/>
	
		<div className="col-sm-6  col-lg-3 my-auto">
			<div className="box h-96 shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src="/images/abhigyan.png" alt="..." />
				</div>
				<div className="box-desc">
					<h5>Abhigyan Prakash Singh</h5>
					<p className="text-zinc-700">Organizer</p>
					<p className="text-zinc-700">Designer</p>
					<p className="text-zinc-700">Web Developer</p>
				</div>
				
			</div>
		</div>
		<div className="col-sm-6 col-lg-3 my-auto">
			<div className="box h-96 shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src="/images/ubuntu.jpg" alt="..." />
				</div>
				<div className="box-desc">
					<h5>Ubuntu</h5>
					<p className="text-zinc-700">Mental Support</p>
					<p className="text-zinc-700">Emotional Support</p>
					<p className="text-zinc-700">Existential Support</p>
				</div>
				
			</div>
		</div>
		<div className="col-sm-6  col-lg-3 my-auto">
			<div className="box h-96 shadow-sm p-4">
				<div className="image-wrapper mb-3">
					<img className="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
				</div>
				<div className="box-desc">
					<h5>Sandipan chatterjee</h5>
					<p className="text-zinc-700">.</p>
					<p className="text-zinc-700">.</p>
					<p className="text-zinc-700">something i guess</p>
				</div>
				
			</div>
		</div>
		
	</div>
</div>	
	
  );
}


