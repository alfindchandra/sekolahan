const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-slate-900">
      <div className="flex flex-col justify-center items-center px-7 py-9 mx-auto h-screen">
        <div className="w-full max-w-md bg-white shadow mt-0 rounded-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
