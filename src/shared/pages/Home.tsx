import React from "react";

const Home: React.FC = () => {
  const features = [
    {
      title: "Serverless Platform",
      description: "A free and open source serverless platform for your web applications. Deploy functions without managing infrastructure.",
      icon: "🚀"
    },
    {
      title: "Multi-Language Support",
      description: "Build your next function in any programming language you're comfortable with. No restrictions, maximum flexibility.",
      icon: "💻"
    },
    {
      title: "Instant Deployment",
      description: "Just push your code and everything else is handled automatically. No configuration headaches or deployment complexity.",
      icon: "⚡"
    },
    {
      title: "Auto-Scaling",
      description: "Functions scale automatically for any number of users - from the first user to millions, with consistent performance.",
      icon: "📈"
    },
    {
      title: "Managed Infrastructure",
      description: "In memory storage with replication, sharding. Infrastructure nodes are all managed by Zygote automatically.",
      icon: "🏗️"
    },
    {
      title: "HTTPS Interfaces",
      description: "Simple HTTPS-based architecture. You consume and provide HTTPS interfaces - that's all you need to worry about.",
      icon: "🔗"
    },
    {
      title: "Data Reliability",
      description: "No data is stored unless properly replicated and sharded. Your data is safe and always available when you need it.",
      icon: "🛡️"
    },
    {
      title: "Self-Custody Option",
      description: "Fork Zygote.Run with your functions and data to run and maintain everything under your own custody if desired.",
      icon: "🔐"
    }
  ];

  return (
    <div className="px-4 py-8">
      <div className="h-20"></div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6">
          Build on top of a cloud platform that you own
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
          A free and open source serverless platform that lets you build and deploy functions 
          without worrying about infrastructure and the furture. Just focus on your code!
        </p>
        <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Build the spaceship while flying
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
