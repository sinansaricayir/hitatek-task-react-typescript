import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface UserInput {
  username: string;
  password: string;
  confirmPassword: string;
  role: string;
}

const Register = () => {
  const { register, handleSubmit } = useForm<UserInput>();
  const navigate = useNavigate();
  const onSubmitHandler = (values: UserInput) => {
    if (values.password === values.confirmPassword) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: values.username,
          password: values.password,
          role: "user",
        })
      );
      console.table(values);
      navigate("/login");
    } else {
      alert("Girilen Parolalar Uyuşmuyor!");
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://www.hitatek.com/tr/images/logo.png"
          />
          HITATEK
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Kayıt Ol
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmitHandler)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Kullanıcı Adı
                </label>
                <input
                  {...register("username")}
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="kullanıcı adı"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Parola
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="*******"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Parola Tekrarı
                </label>
                <input
                  {...register("confirmPassword")}
                  type="password"
                  placeholder="*******"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Kayıt Ol
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Hesabınız var mı?
                <a
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500 ml-2"
                >
                  Giriş Yap
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
