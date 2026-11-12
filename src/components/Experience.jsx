import { useState, useEffect } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceItem from "./ExperienceItem";

export default function Experience({ openExperienceForm, onFormClose }) {
  const [experiences, setExperiences] = useState(() => {
    try {
      return JSON.parse(
        localStorage.getItem("linkedin-experiences")
      ) || [];
    } catch {
      return [];
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Open form from Profile button
  useEffect(() => {
    if (openExperienceForm) {
      setEditingId(null);
      setShowForm(true);
    }
  }, [openExperienceForm]);

  // Save data in local storage
  useEffect(() => {
    localStorage.setItem(
      "linkedin-experiences",
      JSON.stringify(experiences)
    );
  }, [experiences]);

  // Close form
  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    onFormClose?.();
  };

  // Save or update experience
  const handleSave = (data) => {
    if (editingId !== null) {
      setExperiences((previous) =>
        previous.map((item) =>
          item.id === editingId
            ? { ...data, id: editingId }
            : item
        )
      );
    } else {
      setExperiences((previous) => [
        { ...data, id: Date.now() },
        ...previous,
      ]);
    }

    closeForm();
  };

  // Edit experience
  const handleEdit = (id) => {
    setEditingId(id);
    setShowForm(true);
  };

  // Delete experience
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      setExperiences((previous) =>
        previous.filter((item) => item.id !== id)
      );
    }
  };

  const editingExperience = experiences.find(
    (item) => item.id === editingId
  );

  return (
    <section className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">

      {/* Section Heading */}
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Experience
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Your professional journey
          </p>
        </div>

        <button
          onClick={() => {
            setEditingId(null);
            setShowForm(true);
          }}
          className="text-blue-700 font-semibold text-sm border border-blue-600 rounded-lg px-4 py-2 hover:bg-blue-50"
        >
          + Add
        </button>
      </div>

      {/* Experience Form */}
      {showForm && (
        <div className="mb-6">
          <ExperienceForm
            key={editingId ?? "new"}
            initialData={editingExperience}
            onSave={handleSave}
            onCancel={closeForm}
          />
        </div>
      )}

      {/* Experience List */}
      {experiences.length === 0 ? (
        <div className="text-center py-8">
          <div className="text-4xl mb-3">💼</div>

          <h3 className="font-semibold text-gray-800">
            No experience added yet
          </h3>

          <p className="text-sm text-gray-500 mt-2">
            Add your professional experience to your profile.
          </p>
        </div>
      ) : (
        <div>
          {experiences.map((item) => (
            <ExperienceItem
              key={item.id}
              experience={item}
              onEdit={() => handleEdit(item.id)}
              onDelete={() => handleDelete(item.id)}
            />
          ))}
        </div>
      )}

    </section>
  );
}
