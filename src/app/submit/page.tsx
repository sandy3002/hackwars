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
import { string } from "zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { submitFormSchema, SubmitFormType } from "@/schemas/submit";
import { saveSubmission } from "@/actions/saveSubmission";
import { Textarea } from "@/components/ui/textarea";
import { watch } from "fs";
import { getTeamName } from "@/actions/getTeamName";

export default function Register() {
  const {toast} = useToast();
  const [formLoading, setFormLoading]=useState(false);
  const [teamName, setTeamName] = useState("");
  const router = useRouter();
  const form = useForm<SubmitFormType>({ 
    resolver: zodResolver(submitFormSchema),
    defaultValues:{
      teamId:"",
      repo: "",
      video: "",
      comments: ""
    }
  });
  const formState = form.formState;
  const teamId= form.watch('teamId')
  useEffect(()=>{
    if(/^T[0-9]{4}$/.test(teamId)){
      getTeamName(teamId).then((name)=>{
        setTeamName(name)
      })
    }else if(teamName!='') {
      setTeamName('');
    }
  },[teamId])
  async function submit(formData:SubmitFormType) {
    setFormLoading(true);
    const resp = await saveSubmission(formData);
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
              You Submitting??
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
                    <FormDescription className="text-green-400">
                      {teamName && `Team : ${teamName}`}
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your project category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="edu">Education</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                        <SelectItem value="fin">Finance</SelectItem>
                        <SelectItem value="game">Games</SelectItem>
                        <SelectItem value="combo">Combination of 2 or more! </SelectItem>
                      </SelectContent>
                    </Select>
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
              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Presentaion Video Link</FormLabel>
                    <FormControl>
                      <Input placeholder="youtube.com/watch?v=xvFZjo5PgG0" {...field} />
                    </FormControl>
                    <FormDescription>
                      Can be a youtube, drive, github link or anything else.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Anything else?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="This project made me miserable...."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            <button disabled={!formState.isValid || formState.disabled || formLoading} className="w-full box__link button-animation" type="submit">
              {!formLoading?"Submit":<Spinner variant={"muted"}/>}
            </button>
          </form>
        </Form>
      </Card>
      </div>
    </div>
  );
}