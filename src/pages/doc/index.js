import { FaCalendarAlt, FaUser, FaSearch, FaClipboardList, FaMoneyBillAlt, FaChartBar } from 'react-icons/fa';


const Index = () => {
  return (
    <div className=''>
            <div className=" text-gray-900">
                <div
                    className=" pb-8 bg-right bg-cover"
                    // style="basckground-image:url('bg.svg');"
                >
                    <div className="container pt-24 md:pt-15 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        {/* <!--Left Col--> */}
                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                                Main Hero Message to sell your app
                            </h1>
                            <p className="leading-normal text-base md:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle">
                                Sub-hero message, not too long and not too
                                short. Make it just right!
                            </p>

                            <p className="text-blue-400 font-bold pb-4 lg:pb-3 text-center md:text-left fade-in">
                                Download our app:
                            </p>
                            <div className="flex w-full justify-center md:justify-start pb-6 lg:pb-0 fade-in">
                                <img
                                    // href="App Store.svg"
                                    className="h-12 pr-4 bounce-top-icons"
                                />
                                <img
                                    // href="Play Store.svg"
                                    className="h-12 bounce-top-icons"
                                />
                            </div>
                        </div>

                        {/* <!--Right Col--> */}
                        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                            <img
                                className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
                                // href="devices.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Dashboard />
        </div>
  )
}

const DashboardCard = ({ title, icon, desc, dlink }) => {
    return (
      <div className="max-w-sm p-6 bg-white border justify-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400">{icon}</div>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h2>
        <div className="mb-3 font-normal text-gray-500 dark:text-gray-400">{desc}</div>
        <a href={`doc/${dlink}`} className="inline-flex items-center text-blue-600 hover:underline">
          See our guideline
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
          </svg>
        </a>
      </div>
    );
  };
  
  const DashboardSection = ({ data }) => {
    return (
      <div className="flex items-center mx-auto flex-col md:flex-row md:space-x-16">
        {data.map((item, index) => (
          <div key={index} className="md:w-1/3 mb-4 md:mb-0">
            <DashboardCard
              title={item.title}
              icon={item.icon}
              desc={item.desc}
              dlink={item.dlink}
            />
          </div>
        ))}
      </div>
    );
  };
  
  const Dashboard = () => {
  
    const appointmentsData = [
      {
        title: "Appointments Today",
        icon: <FaCalendarAlt />,
        desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
        dlink: "doc/AppointmentsToday"
      },
      {
        title: "Appointments Request",
        icon: <FaUser />,
        desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
        dlink: "doc/AppointmentsRequest"
      },
      {
        title: "Appointments Manage",
        icon: <FaClipboardList />,
        desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
        dlink: "doc/AppointmentManager"
      }
    ];

    const appointmentsData1 = [
        {
          title: "Search",
          icon: <FaSearch />,
          desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
          dlink: "Search"
        },
        {
          title: "Your Prescription",
          icon: <FaMoneyBillAlt />,
          desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
          dlink: "../patient/PatPrescription"
        },
        {
          title: "Your Lab Report",
          icon: <FaClipboardList />,
          desc: "Go to this step by step guideline process on how to certify for your weekly benefits:",
          dlink: "LabReport"
        }
      ];

    return (
      <div className="flex flex-col space-y-4">
        <DashboardSection data={appointmentsData} />
        <DashboardSection data={appointmentsData1} />
      </div>
    );
  };
  
  
export default Index