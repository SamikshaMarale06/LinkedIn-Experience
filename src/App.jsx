import { useState } from "react";
import Profile from "./components/Profile";
import Experience from "./components/Experience";

export default function App() {
  const [openExperienceForm, setOpenExperienceForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#f3f6fb]">

      {/* Task Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-3xl font-bold">
            in
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">
              Task 1: LinkedIn – Add Experience Form
            </h1>
            <p className="text-sm text-blue-100 mt-1">
              Add your professional experience and see it in your profile.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="space-y-6">
          <Profile onAddClick={() => setOpenExperienceForm(true)} />

          <Experience
            openExperienceForm={openExperienceForm}
            onFormClose={() => setOpenExperienceForm(false)}
          />
        </div>
      </main>

      <footer className="text-center py-6 text-sm text-gray-500">
        LinkedIn Experience Project © 2026
      </footer>
    </div>
  );
}
