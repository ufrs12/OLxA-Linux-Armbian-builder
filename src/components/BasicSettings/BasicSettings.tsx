import "./BasicSettings.css";
import { useForm, Controller } from 'react-hook-form';
import { armbian, build } from '../Installer/Installer';
import React from "react";

interface IFormInput {
  board: string;
  core: string;
  apps: string[];
}

const BasicSettings: React.FC = () => {
  const { control, watch, setValue } = useForm<IFormInput>({
    defaultValues: {
      board: build.board,
      core: build.kernel,
      apps: build.basicprogs
  }});

  build.board = watch('board');
  build.kernel = watch('core');  
  build.basicprogs = watch('apps');  

  const Dropdown: React.FC<{
    name: string, 
    children: React.ReactNode
  }> = ({name, children}) => {
    return(
      <Controller
        name={name as 'board' | 'core'}
        control={control}
        render={({ field }) => (
          <select {...field} onChange={(e) => {
            field.onChange(e);
            setValue(name as 'board' | 'core', e.target.value);
          }} className="dropdown-list">
            {children}
          </select>
  )}/>)}
  
  return (
    <form>
      <section className="dropdown-group">
        <div className="dropdown-container">
          <label>Плата:</label>
          <Dropdown name="board">
            {armbian.boards.map((item, index) => (
              <option key={index} value={item.name}>{item.text}</option>
            ))}
          </Dropdown>
        </div>
        <div className="dropdown-container">
          <label>Версия ядра:</label>
          <Dropdown name="core">
            {armbian.boards.find(b => b.name === watch('board'))?.kernels.map((kernel, index) => (
              <option key={index} value={kernel}>{kernel}</option>
            ))}
          </Dropdown>
        </div>
      </section>
      <section>
        <label>Базовые компоненты:</label>
        <Controller 
          name="apps"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div className="app-list">
              {armbian.basicProgs.map((app, index) => (
                <label key={index} htmlFor={app} className="app-item">
                  {/* <img src="" alt={app} /> */}
                  <input 
                    type="checkbox"
                    //className="app-item-box" 
                    id={app} 
                    value={app}
                    checked={value.includes(app)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      let updatedApps = isChecked
                        ? [...value, app]
                        : value.filter((v) => v !== app);
    
                      onChange(updatedApps);
                      setValue('apps', updatedApps);
                    }} 
                  /> 
                  {app}
                </label>))}
            </div>)}
        />
      </section>
    </form>
  );
};

export default BasicSettings;
