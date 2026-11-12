
import { useState } from "react";

export default function ExperienceForm({ onSave, onCancel, initialData }) {
  const [formData, setFormData] = useState({
    jobTitle: initialData?.jobTitle || "",
    company: initialData?.company || "",
    employmentType: initialData?.employmentType || "Full-time",
    location: initialData?.location || "",
    startDate: initialData?.startDate || "",
    endDate: initialData?.endDate === "Present" ? "" : initialData?.endDate || "",
    isPresent: initialData?.isPresent ?? initialData?.endDate === "Present",
    description: initialData?.description || "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      endDate: formData.isPresent ? "Present" : formData.endDate,
    });
  };

  const inputClass =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
    >
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-xl font-bold text-gray-900">
          {initialData ? "Edit Experience" : "Add Experience"}
        </h3>

        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-red-600 text-xl"
        >
          ×
        </button>
      </div>

      {/* Job Title */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Job Title *
        </label>
        <input
          type="text"
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="e.g. Software Developer"
          className={inputClass}
          required
        />
      </div>

      {/* Company */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Company Name *
        </label>
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="e.g. Google"
          className={inputClass}
          required
        />
      </div>

      {/* Employment Type */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Employment Type
        </label>
        <select
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
          className={inputClass}
        >
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Self-employed</option>
          <option>Freelance</option>
          <option>Internship</option>
          <option>Contract</option>
        </select>
      </div>

      {/* Location */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="e.g. Pune, Maharashtra"
          className={inputClass}
        />
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold mb-2">
            Start Date *
          </label>
          <input
            type="month"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            End Date
          </label>
          <input
            type="month"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className={inputClass}
            disabled={formData.isPresent}
            required={!formData.isPresent}
          />
        </div>
      </div>

      {/* Currently Working */}
      <label className="flex items-center gap-2 text-sm text-gray-700 mb-5">
        <input
          type="checkbox"
          name="isPresent"
          checked={formData.isPresent}
          onChange={handleChange}
          className="w-4 h-4 accent-blue-700"
        />
        I am currently working in this role
      </label>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Describe your responsibilities and achievements..."
          rows="4"
          maxLength="500"
          className={inputClass}
        />

        <p className="text-xs text-gray-400 text-right mt-1">
          {formData.description.length}/500
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-2.5 rounded-lg bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800"
        >
          {initialData ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
}
