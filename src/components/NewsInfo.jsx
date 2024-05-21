const NewsInfo = () => {
  const menuItems = [
    {
      text: "SPI - 2024 परीक्षेसाठी अत्यंत महत्वाचे",
      new: true,
      url: "#",
      bg: "bg-[#337AB7]",
    },
    {
      text: "सैनिकी सेवापूर्व प्रशिक्षण संस्था (SPI) विषयी माहिती",
      url: "#",
      bg: "bg-[#D9534F]",
    },
    {
      text: "SPI - प्रवेश परीक्षा विद्यार्थ्यांचे प्रश्न आणि उत्तरे",
      url: "#",
      bg: "bg-[#D9534F]",
    },
    {
      text: "SPI - परीक्षेची तयारी व मार्गदर्शन",
      url: "#",
      bg: "bg-[#D9534F]",
    },
    { text: "SPI - परीक्षेसाठी उपयुक्त पुस्तके", url: "#", bg: "bg-[#D9534F]" },
    { text: "Sainik School RIMC/JNV Section", url: "#", bg: "bg-[#D9534F]" },
  ];

  return (
    <div className="w-7/12">
      <h1 className="text-2xl">
        Welcome to Disha Foundation's SPI Aurangabad Entrance Exam Classes
      </h1>
      <span className="text-lg">What's new?</span>

      <div className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className={`${item.bg} text-white flex items-center justify-between p-4 rounded shadow-md cursor-pointer hover:bg-opacity-90 transition`}
          >
            <span className="flex items-center space-x-2 font-semibold">
              <span>&#9654;</span>
              <span>{item.text}</span>
            </span>
            {item.new && (
              <span className="text-yellow-300 font-bold animate-pulse">
                New
              </span>
            )}
          </a>
        ))}
      </div>
      <span className="p-4 cursor-pointer text-[#337AB7] text-sm font-medium hover:text-[#0000FF]">
        Click here to APPLY SPI-Boys/Girls Exam 2024 information{" "}
        <span className="text-yellow-300 font-bold animate-pulse">New</span>{" "}
      </span>
    </div>
  );
};

export default NewsInfo;
