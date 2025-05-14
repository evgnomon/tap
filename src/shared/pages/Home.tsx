import React from "react";
import { useTheme } from "@shared/context/ThemeContext";

const Home: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div className="rounded-full px-2 py-1.5 text-sm/6">
      <div className="h-20"></div>
      <h1 className="text-5xl font-bold text-center p-3">
        {" "}
        HGL/Zygote: A Free Boilerplateless web cooperating system kernel for a
        digital civilization
      </h1>
      <h1 className="text-4xl text-center p-3">
        {" "}
        Build your own web platform and your web applications/functions layered
        over/under HTTPs IO using your own programming language!
      </h1>
      <h2 className="text-2xl text-center text-gray-500 p-3">
        {" "}
        We give you a free complete meal when we need it most and receive no
        meal unless a free complete one when you need it most! You are just a
        single push away from a running function/building-block that scales for
        the latest user like the first and scales for the first user like the
        last. The infrastructure, tables, cache, replication, sharding, and
        nodes are handled by Zygote for Z and by Z for Zygote. There is no
        information stored in Zygote unless replicated and sharded! Therefore,
        as a developer you just take and make the next important building block
        without wasting a second! Make an initial push for your function in
        Zygote .Run, immediately get it up running. You pay a small fee in
        Bitcoin unless you want to take self-custody. You (are) welcome to fork
        Zygote .Run together with your functions and data, so run and maintain
        the same code at your own custody.
      </h2>
      <div className="flex justify-center items-center">
        <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Build the spaceship while flying
        </button>
      </div>
    </div>
  );
};

export default Home;
