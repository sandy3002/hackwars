import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Hackwars",
  description: "A hackathon. Made by JGEC students, for JGEC students",
};
const layout = ({ children, modal }: { children: React.ReactNode, modal: React.ReactNode }) => {
    return (
      <div>
        {modal}
        {children}
      </div>
    );
  };
  
  export default layout;