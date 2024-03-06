export const GameLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="m-auto flex min-h-screen w-fit max-w-md flex-col items-center justify-center gap-6 p-2">
    {children}
  </div>
);
