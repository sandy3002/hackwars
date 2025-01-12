"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { saveTeam } from "@/actions/saveTeam";
import { Team, teamSchema } from "@/schemas/team";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Spinner } from "@/components/Spinner";
import { useState } from "react";
export default function Register() {
  const {toast} = useToast();
  const [formLoading, setFormLoading]=useState(false);
  const router = useRouter();
  const form = useForm<Team>({ 
    resolver: zodResolver(teamSchema),
    defaultValues:{
      id: "",
      createdAt: 0,
      members:[{name: "",email:""},{name: "",email:""},{name: "",email:""}]
    }
  });
  const formState = form.formState;
  async function submit(team: Team,) {
    setFormLoading(true);
    const resp = await saveTeam(team);
    if(resp == null){
      console.log("CONGRATULATIONS, YOU HAVE FOUND AN EASTER EGG! Contact Abhigyan for a gift!");
      toast({
        title: "Successfully registered!",
        description: "A mail will been sent to your team. Contact us if you don't recieve it in 10 minutes.",
        className:"bg-green-700 text-white"
      })
      router.push('/');
      setFormLoading(false);
      return;
    }
    toast({
      title: "Error!",
      description: resp,
      className:"bg-red-500 text-white"
    })
    form.reset({},{keepValues:true, keepIsValid:false})
    setFormLoading(false);
  }
  return (
    <div className="flex min-h-screen md:mx-16 items-center">
      <div className="max-w-[500px] sm:w-[75%] w-[95%] mx-auto align-middle card4">

      <Card className="backdrop-blur-md bg-gray-900">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submit)}
            className="space-y-6 container mx-auto p-8"
          >
            <h1 className="sm:text-3xl text-xl font-bold mb-10 text-center font-['Starjedi'] tracking-widest text-white animate-pulse">
              Register your team!
            </h1>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="border-gray-800">
                  <FormLabel>Team Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Team Rocket 🚀" {...field} />
                  </FormControl>
                  <FormDescription>
                    Minimum 4 characters. This name will be displayed to the public.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 border-gray-800">
              <FormField
                control={form.control}
                name="members.0.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 1 name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jessie 💃" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="members.0.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 1 email</FormLabel>
                    <FormControl>
                      <Input placeholder="jessie@team.rocket" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 border-gray-800">
              <FormField
                control={form.control}
                name="members.1.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 2 name</FormLabel>
                    <FormControl>
                      <Input placeholder="James 🕺" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="members.1.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 2 email</FormLabel>
                    <FormControl>
                      <Input placeholder="james@team.rocket" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 gap-4 border-gray-800">
              <FormField
                control={form.control}
                name="members.2.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 3 name</FormLabel>
                    <FormControl>
                      <Input placeholder="Meowth 😼" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="members.2.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 3 email</FormLabel>
                    <FormControl>
                      <Input placeholder="meowth@team.rocket" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button disabled={!formState.isValid || formState.disabled || formLoading} className="w-full box__link button-animation" type="submit">
              {!formLoading?"Create account":<Spinner className="bg-white"/>}
            </button>
          </form>
        </Form>
      </Card>
      </div>
    </div>
  );
}



// import { useEffect, useState } from "react";

// function Typewriter({ text }: { text: string }) {
//   const [displayedText, setDisplayedText] = useState("");

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       index++;
//       if (index === text.length) {
//         clearInterval(interval);
//       }
//     }, 100);
//     return () => clearInterval(interval);
//   }, [text]);

//   return <h2 className="text-center text-white">{displayedText}</h2>;
// }

// export default function Register() {
//   // existing code...

//   return (
//     <div className="flex min-h-screen md:m-16 items-center">
//             <Typewriter text="Welcome to the registration page!" />
        
//     </div>
//   );
// }