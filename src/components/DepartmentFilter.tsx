import { departments } from "../data/departments";

interface DepartmentFilterProps {
  selectedDepartment: string | null;
  onDepartmentChange: (department: string | null) => void;
}

export function DepartmentFilter({
  selectedDepartment,
  onDepartmentChange,
}: DepartmentFilterProps) {
  return (
    <div className='flex flex-wrap gap-2 mb-6'>
      <button
        onClick={() => onDepartmentChange(null)}
        className={`px-4 py-2 rounded-full transition-colors duration-300 ${
          selectedDepartment === null
            ? "bg-emerald-600 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-emerald-100"
        }`}
      >
        All
      </button>
      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() => onDepartmentChange(dept)}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            selectedDepartment === dept
              ? "bg-emerald-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-emerald-100"
          }`}
        >
          {dept}
        </button>
      ))}
    </div>
  );
}
