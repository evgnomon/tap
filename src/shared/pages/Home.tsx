import React from "react";
import { useTranslation } from "react-i18next";
import { Rocket, Laptop, Zap, TrendingUp, Building, Link, Shield, Lock } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t('home.features.serverlessPlatform.title'),
      description: t('home.features.serverlessPlatform.description'),
      icon: <Rocket className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.multiLanguageSupport.title'),
      description: t('home.features.multiLanguageSupport.description'),
      icon: <Laptop className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.instantDeployment.title'),
      description: t('home.features.instantDeployment.description'),
      icon: <Zap className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.autoScaling.title'),
      description: t('home.features.autoScaling.description'),
      icon: <TrendingUp className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.managedInfrastructure.title'),
      description: t('home.features.managedInfrastructure.description'),
      icon: <Building className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.httpsInterfaces.title'),
      description: t('home.features.httpsInterfaces.description'),
      icon: <Link className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.dataReliability.title'),
      description: t('home.features.dataReliability.description'),
      icon: <Shield className="text-gray-600 dark:text-gray-300" size={48} />
    },
    {
      title: t('home.features.selfCustodyOption.title'),
      description: t('home.features.selfCustodyOption.description'),
      icon: <Lock className="text-gray-600 dark:text-gray-300" size={48} />
    }
  ];

  return (
    <div className="px-4 py-8">
      <div className="h-20"></div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 dark:text-gray-100">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto">
          {t('home.subtitle')}
        </p>
        <button className="bg-blue-600 dark:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
          {t('home.getStarted')}
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
