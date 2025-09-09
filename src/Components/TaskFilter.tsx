import React from "react";
import Select from "react-select";
import useDebouncedSearch from "../Hooks/useDebouncedSearch";
import { priorityOptions, tagsOptions } from "../Helpers/Types/ElementsOfTypes";
import { useTheme } from "../Hooks/useTheme";


export default function TaskFilters ({ priorityFilter, setPriorityFilter, tagFilter, setTagFilter, setSearchFilter }: { priorityFilter: string; setPriorityFilter: (value: string) => void; tagFilter: string; setTagFilter: (value: string) => void; searchFilter: string; setSearchFilter: (value: string) => void; }) {
  const { theme } = useTheme();
  const customStyles = {
  control: (provided: object) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    border: "none",
    boxShadow: "none",
  }),
  menu: (provided: object) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    border: theme === 'dark' ? '1px solid #374151' : '1px solid #e5e7eb',
  }),
  menuList: (provided: object) => ({
    ...provided,
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    padding: 0,
  }),
  
  option: (provided: object) => ({
    ...provided,
    color: theme === 'dark' ? '#f1f5f9' : '#1e293b',
    backgroundColor: theme === 'dark' ? '#0f172a' : '#ffffff',
    '&:hover': { backgroundColor: theme === 'dark' ? '#1e293b' : '#f3f4f6'
    },
    cursor: 'pointer'
  }),
  singleValue: (provided: object) => ({
    ...provided,
    color: theme === 'dark' ? '#f1f5f9' : '#1e293b',
  }),
  placeholder: (provided: object) => ({
    ...provided,
    color: theme === 'dark' ? '#9ca3af' : '#6b7280',
  })
}

  const [search, setSearch] = React.useState<string>('');
  const debouncedSearch = useDebouncedSearch({ value: search, delay: 300 });
  React.useEffect(() => {
    setSearchFilter(debouncedSearch);
  }, [debouncedSearch, setSearchFilter]);

  return (
    <div className="flex flex-col lg:flex-row gap-4 mt-6 lg:ml-2">
      <div className="w-full">
      <input className="w-full  p-2 ultraThinBorder !rounded-sm" style={{ borderColor: theme === 'dark' ? '#4b5563' : '#d1d5db' }} type="text" placeholder="Search task..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="flex flex-row gap-4 w-full">
      <Select
      styles={customStyles}
      className="ultraThinBorder !rounded-sm w-1/2"
      value={priorityOptions.find(option => option.value === priorityFilter)}
      onChange={(selectedOption) => setPriorityFilter(selectedOption?.value || '')}
      options={priorityOptions}
      placeholder="All priorities"
      isClearable
      />
      <Select
      styles={customStyles}
      className="ultraThinBorder !rounded-sm w-1/2"
      value={tagsOptions.find(option => option.value === tagFilter)}
      onChange={(selectedOption) => setTagFilter(selectedOption?.value || '')}
      options={tagsOptions}
      placeholder="All tags"
      isClearable
      />
      </div>
    </div>
    
  )
}