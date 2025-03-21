import "../styles/about.css";

const ENews = () => {
  const features = [
    { title: "Latest Updates", icon: "M3 10h11M9 21V3m8 7h4m-2-2v4m-7-7h11" }, // Clock
    { title: "24/7 Access", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }, // Timer
    { title: "Trusted Sources", icon: "M9 12l2 2 4-4m-7 8h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" }, // Shield
    { title: "Global Coverage", icon: "M21 12.79A9 9 0 1112 3v9l3 3m6 0a9 9 0 01-9 9" } // Globe
  ];

  return (
    <div className="main">
<div className=" bg-white flex items-center justify-center px-6 py-5">
<div className="rounded-lg overflow-hidden w-full max-w-6xl p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Why E-News Section */}
          <div>
          <h1 className="text-5xl font-bold text-orange-400" style={{ marginBottom: "2rem" }}>
  WHY E-News?
</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="bg-orange-100 p-4 rounded-full">
                    <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon}></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-800">{feature.title}</h2>
                    <p className="text-gray-600 mt-2">Stay informed with the latest news.</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 mb-10 text-left" >
              <p className="text-2xl font-semibold text-gray-800 mb-6" style={{ marginTop: "2rem" }}>Stay Updated!</p>
              <p className="text-2xl font-semibold text-gray-800">
                Get The <span className="text-orange-500">Latest News...</span>
              </p>
              <button  className="bg-orange-500 text-white px-8 py-3 mt-8 rounded-full text-lg font-medium hover:bg-orange-600 transition duration-300" style={{ backgroundColor: '#ff7f00', marginTop: "2rem"  }}>
                Read More
              </button>
            </div>
          </div>

          {/* Introduction Video Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Watch Our Introduction</h2>
            <div className="w-full">
              <iframe
                className="w-full h-80 md:h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="YouTube video"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
  );
};

export default ENews;
