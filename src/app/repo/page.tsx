"use client";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
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
import { useEffect, useState } from "react";
import { saveRepo } from "@/actions/saveSubmission";
import { getTeamName } from "@/actions/getTeamName";
import { RepoFormType, repoSchema } from "@/schemas/repo";

export default function Register() {
  const {toast} = useToast();
  const [formLoading, setFormLoading]=useState(false);
  const [teamNameLoading, setTeamNameLoading] = useState(false);
  const [teamNameActive, setTeamNameActive] = useState(false);
  const [teamName, setTeamName] = useState("");
  const router = useRouter();
  const form = useForm<RepoFormType>({ 
    resolver: zodResolver(repoSchema),
    defaultValues:{
      teamId:"",
      repo: ""
    }
  });
  const formState = form.formState;
  const teamId= form.watch('teamId')
  useEffect(()=>{
    if(/^T[0-9]{4}$/.test(teamId)){
      setTeamNameActive(true);
      setTeamNameLoading(true);
      getTeamName(teamId).then((name)=>{
        setTeamName(name)
        setTeamNameLoading(false);
      })
    }else {
      setTeamNameActive(false);
    }
  },[teamId])
  async function submit(formData:RepoFormType) {
    setFormLoading(true);
    const resp = await saveRepo(formData);
    if(resp){
      toast({
        title: "Error!",
        description: resp,
        className:"bg-red-500 text-white"
      })
    } else {
      toast({
        title: "Successfully submitted!",
        description: `Keep checking the websites/socials for updates!`,
        className:"bg-green-700 text-white"
      })
      router.push('/');
    }
    form.reset({},{keepValues:true, keepIsValid:false})
    setFormLoading(false);
    return;
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
              onE Small Step!
            </h1>
              <FormField
                control={form.control}
                name="teamId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team ID</FormLabel>
                    <FormControl>
                      <Input placeholder="T1234" {...field} />
                    </FormControl>
                    <FormDescription>
                      {teamNameLoading?
                        <Spinner size={"sm"} variant={"muted"}/>
                        :teamNameActive?teamName? 
                          <span className="text-green-400">Team: {teamName}</span>
                          :<span className="text-red-500">Invalid Team ID</span>
                          :''
                      }
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="repo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Repository Link</FormLabel>
                    <FormControl>
                      <Input placeholder="github.com/sandy3002/hackwars" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <button disabled={!formState.isValid || formState.disabled || formLoading || teamNameLoading} className="w-full box__link button-animation" type="submit">
              {!formLoading?"Submit":<Spinner variant={"muted"}/>}
            </button>
          </form>
        </Form>
      </Card>
      </div>
    </div>
  );
}