import { useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import Select from "react-select";
import { useTasks } from '../Hooks/useTasks';
import { priorityOptions, tagsOptions } from "../Helpers/Types/ElementsOfTypes";
import type { Task, FormData } from "../Helpers/Types/Types";
import { useTheme } from "../Hooks/useTheme";

export default function NewTaskForm() {
  const { addTask } = useTasks();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { reset, register, handleSubmit, control, formState: { errors } } = useForm<FormData>();
  const hasError = Object.keys(errors).length > 0;
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
  
  const onSubmit: SubmitHandler<FormData> = (data:FormData) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: data.title,
      description: data.description,
      completed: false,
      dueDate: new Date(data.dueDate),
      priority: data.priority,
      tags: data.tags,
      createdAt: new Date()
    }
    addTask(newTask);
    reset();
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 2000);
  };

  return (
    <>
      
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 lg:gap-4 ultraThinBorder p-3 mt-6 lg:w-3/5 lg:m-auto">
        <p className="text-center text-lg">Complete the form to create your new task</p>
        <div className="text-center mb-2">
          {hasError && <span className="font-semibold" style={{color: "var(--overdue-color)"}}>The fields in red are mandatory</span>}
          {showSuccessMessage && <div style={{color:"var(--completed-color)"}}>Task Created Successfully, you can view it on the Home page</div>}
        </div>
        
        <label htmlFor='title' className="text-lg font-semibold">Title *</label>
        <input {...register("title", { required: true })} placeholder="Ex. Make dinner..." id="title" className="ultraThinBorder p-1 !rounded-sm" />

        <label htmlFor='description' className="text-lg font-semibold">Description *</label>
        <textarea {...register("description", { required: true })} placeholder=" Ex. Describe your task... " id="description" className="ultraThinBorder p-1 !rounded-sm  resize-none"></textarea>

        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
        <label htmlFor='priority' className="text-lg font-semibold">Priority *</label>
        <Controller name="priority" control={control} rules={{ required: true }} render={({ field }) => (
            <Select styles={customStyles} className="ultraThinBorder !rounded-sm lg:w-1/4" {...field} inputId="priority" options={priorityOptions} placeholder="Select priority" isClearable
            onChange={val => field.onChange(val?.value || '')} value={priorityOptions.find(opt => opt.value === field.value) || null} />
          )}
        />

        <label htmlFor='tags' className="text-lg font-semibold">Category *</label>
        <Controller name="tags" control={control} rules={{ required: true }} render={({ field }) => (
            <Select styles={customStyles} className="ultraThinBorder !rounded-sm" {...field} inputId="tags" options={tagsOptions} placeholder="Select category" isClearable
              onChange={val => field.onChange(val?.value || '')} value={tagsOptions.find(tag => tag.value === field.value) || null} />
          )}
        />
        </div>
        <label htmlFor='dueDate' className="text-lg font-semibold">Due Date *</label>
        <input className="ultraThinBorder p-1 !rounded-sm" type="date" {...register("dueDate", { required: true })} id="dueDate" />
        
        <div className="flex flex-row gap-4 mt-4">
          <button type="submit" className="w-1/2 loginButton">Create Task</button>
          <button type="button" className="w-1/2 redBorder !rounded-sm" style={{ color: "var(--overdue-color)"}} onClick={() => reset()}>Reset</button>
        </div>
      </form>
    </>
  );
}