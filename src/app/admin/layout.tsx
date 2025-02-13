import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Hackwars",
  description: "A hackathon. Made by JGEC students, for JGEC students",
};
const layout = ({ children, submitModal }: { children: React.ReactNode, submitModal: React.ReactNode }) => {
    return (
      <>
        {submitModal}
        {children}
      </>
    );
  };
  
  export default layout;