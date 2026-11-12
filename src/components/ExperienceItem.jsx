export default function ExperienceItem({ experience, onEdit, onDelete }) {
  return (
    <div className="flex gap-4 py-5 border-b border-gray-200 last:border-b-0">

      {/* Company Icon */}
      <div className="w-12 h-12 shrink-0 bg-blue-100 text-blue-700 rounded-lg flex items-center justify-center text-xl font-bold">
        {experience.company?.charAt(0).toUpperCase() || "C"}
      </div>

      {/* Experience Details */}
      <div className="flex-1 min-w-0">

        <h3 className="text-lg font-bold text-gray-900">
          {experience.jobTitle}
        </h3>

        <p className="text-sm text-gray-800 mt-1">
          {experience.company} · {experience.employmentType}
        </p>

        {experience.location && (
          <p className="text-sm text-gray-500 mt-1">
            {experience.location}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-1">
          {experience.startDate} – {experience.endDate}
        </p>

        {experience.description && (
          <p className="text-sm text-gray-700 mt-3 whitespace-pre-wrap leading-relaxed">
            {experience.description}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            onClick={onEdit}
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            ✎ Edit
          </button>

          <button
            onClick={onDelete}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}
