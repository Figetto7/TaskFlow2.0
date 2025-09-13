import type { JSX } from "react"
import type { Task } from "../Helpers/Types/Types";
import Select from "react-select";
import { useTasks } from "../Hooks/useTasks";
import { Controller, useForm } from "react-hook-form";
import { useTheme } from "../Hooks/useTheme";
import { useState, useEffect } from "react";
import { tagsOptions, priorityOptions } from "../Helpers/Types/ElementsOfTypes";
import type { FormData } from "../Helpers/Types/Types";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function DashboardRestrictionModal({ isOpen, onClose, task }: { isOpen: boolean; onClose: () => void; task: Task }): JSX.Element {
  const { theme} = useTheme();
  const { updateTask, deleteTask } = useTasks();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formatDate = (date: Date) => date.toISOString().split("T")[0];
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    defaultValues: { 
      title: task?.title || '', 
      description: task?.description || '', 
      dueDate: task?.dueDate ? formatDate(task.dueDate) : formatDate(new Date()),
      priority: task?.priority || '',
      tags: task?.tags || ''
    }
  });

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer); 
    }
  }, [showSuccessMessage]);

  if (!isOpen) return <></>;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const onSubmit = (data: FormData) => {
    const modifiedTask = {
      ...task, 
      title: data.title, 
      description: data.description, 
      dueDate: new Date(data.dueDate),
      priority: (data.priority || "Choose a priority") as "low" | "medium" | "high" | "Choose a priority",
      tags: (data.tags?.toLowerCase() || "Choose a category") as "school" | "work" | "personal" | "others" | "Choose a category"
    };
    updateTask(modifiedTask);
    setShowSuccessMessage(true);
  }

  const hasError = Object.keys(errors).length > 0;

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

  return (
    <div className="fixed inset-0 flex items-center modal-overlay justify-center" onClick={handleOverlayClick}>
      <div style={{backgroundColor: "var(--modal-bg)"}} className="ultraThinBorder w-11/12 md:w-2/3 lg:w-5/12 p-4" onClick={(e) => e.stopPropagation()}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center mb-1">
        <h1 className="text-2xl text-center font-semibold">Modify your Task</h1>
        <button onClick={onClose} className="text-xl"> <IoCloseCircleOutline size={30} /></button>
        </div>
        <div className="text-center mb-2">
          {hasError && <span className="font-semibold" style={{color: "var(--overdue-color)"}}>The fields in red are mandatory</span>}
          {showSuccessMessage && <div style={{color:"var(--completed-color)"}}>Task Updated Successfully.</div>}
        </div>
        
        <label htmlFor='title' className="text-lg font-semibold">Title *</label>
        <input {...register("title", { required: true })} id="title" className="ultraThinBorder p-1 !rounded-sm" />

        <label htmlFor='description' className="text-lg font-semibold">Description *</label>
        <textarea {...register("description", { required: true })} id="description" className="ultraThinBorder p-1 !rounded-sm  resize-none"></textarea>

        <div className="flex flex-col lg:flex-row gap-4 lg:justify-between">
        <label htmlFor='priority' className="text-lg font-semibold mt-2 lg:mt-1">Priority *</label>
        <Controller name="priority" control={control} rules={{ required: true }} render={({ field }) => (
            <Select 
              styles={customStyles} 
              className="ultraThinBorder !rounded-sm -mt-3 lg:mt-1" 
              {...field} 
              inputId="priority" 
              options={priorityOptions} 
              isClearable
              onChange={val => field.onChange(val?.value || '')} 
              value={priorityOptions.find(opt => opt.value === field.value) || null} 
            />
          )}
        />

        <label htmlFor='tags' className="text-lg font-semibold -mt-3 lg:mt-1">Category *</label>
        <Controller name="tags" control={control} rules={{ required: true }} render={({ field }) => (
            <Select 
              styles={customStyles} 
              className="ultraThinBorder !rounded-sm -mt-3 mb-2 lg:mt-1" 
              {...field} 
              inputId="tags" 
              options={tagsOptions} 
              isClearable
              onChange={val => field.onChange(val?.value || '')} 
              value={tagsOptions.find(tag => tag.value === field.value) || null} 
            />
          )}
        />
        </div>
        <label htmlFor='dueDate' className="text-lg font-semibold">Due Date *</label>
        <input className="ultraThinBorder p-1 !rounded-sm" type="date" {...register("dueDate", { required: true })} id="dueDate" />
        
        <div className="flex flex-row gap-4 mt-4">
          <button type="submit" className="!w-1/2 loginButton">Update Task</button>
          <button type="button" className="w-1/2 redBorder !rounded-sm" style={{ color: "var(--overdue-color)"}} onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
      </form>
      </div>
    </div>
  );
}