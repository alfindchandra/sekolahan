import Fromregister from "@/components/auth/form-register";

const Register = () => {
  return (
    <div className="p-6 space-y-4 z-50 ">
      <h1 className="text-2xl font-bold text-gray-900 text-center">
        Tambah Akun
      </h1>
      <Fromregister />
    </div>
  );
};

export default Register;
