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
async function submit(team: Team) {
  console.log("here");
  
  await saveTeam(team);
  redirect("/");
}
export default function Register() {
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
  return (
    <div className="flex min-h-screen m-16 items-center">
      <Card className="max-w-[500px] sm:w-[75%] backdrop-blur-md mx-auto bg-gray-900/10">
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
            <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white" type="submit">
              Create account
            </Button>
          </form>
        </Form>
      </Card>
      {/* <section id="register" className="py-20 bg-gray-900/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-10 mt-10 text-center font-['Starjedi'] tracking-widest	 " >Register</h2>
                    <div className="max-w-xl mx-auto">
                        <Card className="p-6  border-gray-800">
                            <form className="space-y-10">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-3">Team Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    />
                                </div>

                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 1 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 2 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Member 3 Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-3">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        />
                                    </div>
                                </div>

                                <Button className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 text-white">
                                    Complete Registration
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </section> */}
    </div>
  );
}
