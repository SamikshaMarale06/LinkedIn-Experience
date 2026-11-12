export default function Profile({ onAddClick }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">

      {/* Profile Cover */}
      <div className="h-28 bg-gradient-to-r from-blue-700 to-blue-400"></div>

      {/* Profile Details */}
      <div className="px-6 pb-6">

        <div className="flex flex-wrap items-end justify-between gap-4">

          <div className="-mt-14">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white object-cover shadow"
            />
          </div>

          <button
            onClick={onAddClick}
            className="border border-blue-600 text-blue-700 px-5 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition"
          >
            + Add Experience
          </button>

        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Samiksha Marale
          </h2>

          <p className="text-base text-gray-700 mt-1">
            Student | Aspiring Software Developer
          </p>

          <p className="text-sm text-gray-500 mt-2">
            Maharashtra, India
          </p>
        </div>

        {/* Profile Navigation */}
        <div className="flex gap-7 mt-6 border-t border-gray-200 overflow-x-auto">
          {["About", "Experience", "Skills", "Education"].map((tab) => (
            <button
              key={tab}
              className={`py-4 text-sm font-medium whitespace-nowrap ${
                tab === "Experience"
                  ? "text-blue-700 border-b-2 border-blue-700"
                  : "text-gray-500 hover:text-blue-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
