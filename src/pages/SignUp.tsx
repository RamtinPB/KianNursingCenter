import {
  Card,
  Typography,
  CardBody,
  Button,
  IconButton,
  Input,
  CardHeader,
} from "@material-tailwind/react";
import { SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../ContextProviders/AuthContext";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const { user, signUp } = useAuth();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/AdminDashboard");
    }
  }, [user, navigate]);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      // Call signUp function from the context
      const user = await signUp(email, password);

      // Only navigate if signUp was successful
      if (user as unknown as boolean) {
        navigate("/AdminDashboard");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Invalid email or password. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleBackClick = () => navigate("/");

  return (
    <>
      <div className="container mx-auto">
        {/* @ts-ignore */}
        <Card className="items-center bg-inherit shadow-none">
          <div className="rounded-3xl bg-blue-gray-50 p-3 shadow md:p-4">
            {/* @ts-ignore */}
            <CardHeader className="m-0 w-full bg-inherit shadow-none">
              <div className={`grid grid-cols-12 text-center`}>
                {/* @ts-ignore */}
                <div className="col-span-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="black"
                    className="size-8"
                    onClick={handleBackClick}
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
                      clipRule="evenodd"
                      className="cursor-pointer"
                    />
                  </svg>
                </div>

                {/* @ts-ignore */}
                <Typography variant="h4" className="col-span-8 mb-0 text-black">
                  SignUp
                </Typography>
              </div>
            </CardHeader>
            {/* @ts-ignore */}
            <CardBody className="bg-inherit pb-3">
              <form
                style={{
                  direction: "ltr",
                }}
                onSubmit={handleSignUp}
              >
                {/* <div className="mb-2 flex justify-between p-1">
                  <Typography variant="paragraph" className="text-black">
                    asdas
                  </Typography>

                  <Typography
                    as={"a"}
                    href="/SignUp"
                    variant="paragraph"
                    className="text-black hover:text-blue-500"
                  >
                    fgwetwgwg
                  </Typography>
                </div> */}

                <div className="mb-3 p-1">
                  {/* @ts-ignore */}
                  <Input
                    variant="outlined"
                    type="email"
                    color="blue-gray"
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setEmail(e.target.value)}
                    label={"Email"}
                    className="min-w-[201.6px"
                  />
                </div>

                <div className="relative mb-3 p-1">
                  {/* @ts-ignore */}
                  <Input
                    variant="outlined"
                    color="blue-gray"
                    type={showPassword ? "text" : "password"}
                    label={"Password"}
                    placeholder="**********"
                    className="min-w-[201.6px]"
                    onChange={(e: {
                      target: { value: SetStateAction<string> };
                    }) => setPassword(e.target.value)}
                  />
                  {/* @ts-ignore */}
                  <IconButton
                    size="sm"
                    color="blue-gray"
                    onClick={togglePasswordVisibility}
                    className="!absolute right-2 top-2 cursor-pointer rounded-lg"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.28 2.22a.75.75 0 0 0-1.06 1.06l14.5 14.5a.75.75 0 1 0 1.06-1.06l-1.745-1.745a10.029 10.029 0 0 0 3.3-4.38 1.651 1.651 0 0 0 0-1.185A10.004 10.004 0 0 0 9.999 3a9.956 9.956 0 0 0-4.744 1.194L3.28 2.22ZM7.752 6.69l1.092 1.092a2.5 2.5 0 0 1 3.374 3.373l1.091 1.092a4 4 0 0 0-5.557-5.557Z"
                          clipRule="evenodd"
                        />
                        <path d="m10.748 13.93 2.523 2.523a9.987 9.987 0 0 1-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 0 1 0-1.186A10.007 10.007 0 0 1 2.839 6.02L6.07 9.252a4 4 0 0 0 4.678 4.678Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="size-5"
                      >
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path
                          fillRule="evenodd"
                          d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </IconButton>
                </div>

                {/* <div
                  className={`form-check mb-3 flex justify-start p-1`}
                  style={{
                    direction: "ltr",
                  }}
                >
                  <Checkbox
                    label={
                      <div>
                        <Typography color="blue-gray" className="font-medium">
                          fqweqwrqr
                        </Typography>

                        <Typography
                          variant="small"
                          color="gray"
                          className="font-normal"
                        >
                          bbgnhtyethh
                        </Typography>
                      </div>
                    }
                    containerProps={{
                      className: "-mt-5",
                    }}
                  />
                </div> */}

                <div className="p-1 text-center">
                  {/* @ts-ignore */}
                  <Button type="submit" size="md" className="rounded-full">
                    SignUp
                  </Button>
                </div>
              </form>
            </CardBody>
          </div>
        </Card>
      </div>
    </>
  );
}
