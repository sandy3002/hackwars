"use client";
import { redirect, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { saveTeam } from "@/actions/saveTeam";
import { Team, teamSchema } from "@/schemas/team";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
export default function Register() {
  const {toast} = useToast();
  const form = useForm<Team>({ 
    resolver: zodResolver(teamSchema),
    defaultValues:{
      id: "",
      createdAt: 0,
      members: [
        {name: "",email:""},
        {name: "",email:""},
        {name: "",email:""}
      ]
    }
  });
  async function submit(team: Team,) {
    await saveTeam(team);
    console.log("CONGRATULATIONS, YOU HAVE FOUND AN EASTER EGG! Contact Abhigyan for a free .xyz domain!");
    toast({
      title: "Successfully registered!",
      description: "A mail has been sent.",
      className:"bg-green-700 text-white"
    })
    redirect("/");
  }
  return (
    <div className="flex min-h-screen md:m-16 items-center">
      <Card className="max-w-[500px] sm:w-[75%] w-[95%] backdrop-blur-md mx-auto bg-gray-900/10">
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
                    <Input placeholder="Team Rocket" {...field} />
                  </FormControl>
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
                    <FormLabel>Team member 3 name</FormLabel>
                    <FormControl>
                      <Input placeholder="Meowth" {...field} />
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
                    <FormLabel>Team member 3 email</FormLabel>
                    <FormControl>
                      <Input placeholder="meowth@team.rocket" {...field} />
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
                    <FormLabel>Team member 1 name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jessie" {...field} />
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
                name="members.2.name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team member 2 name</FormLabel>
                    <FormControl>
                      <Input placeholder="James" {...field} />
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
                    <FormLabel>Team member 2 email</FormLabel>
                    <FormControl>
                      <Input placeholder="james@team.rocket" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <button disabled={ form.formState.isSubmitting} className="w-full box__link button-animation text-sm" type="submit">
              Create account
            </button>
          </form>
        </Form>
      </Card>
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