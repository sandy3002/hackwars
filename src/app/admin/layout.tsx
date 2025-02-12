const layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <title>Admin Panel | HackWars</title>
        {children}
      </div>
    );
  };
  
  export default layout;