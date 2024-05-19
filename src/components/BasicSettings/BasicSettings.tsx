import "./BasicSettings.css";
import { useForm, Controller } from 'react-hook-form';
import { armbian, build } from '../Installer/Installer';

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

  // function Dropdown (){
  //   return()
  // }
  
  return (
    <form>
      <section>
        <label>Плата:</label>
        <Controller
          name="board"
          control={control}
          render={({ field }) => (
            <select {...field} onChange={(e) => {
              field.onChange(e);
              setValue('board', e.target.value);
            }}>
              {armbian.boards.map((item, index) => (
                <option key={index} value={item.name}>{item.text}</option>
              ))}
            </select>
          )}
        />
      </section>
      <section>
        <label>Версия ядра:</label>
        <Controller
          name="core"
          control={control}
          render={({ field }) => (
            <select {...field} onChange={(e) => {
              field.onChange(e);
              setValue('core', e.target.value);
            }}>
              {armbian.boards.find(b => b.name === watch('board'))?.kernels.map((kernel, index) => (
                <option key={index} value={kernel}>{kernel}</option>
              ))}
            </select>
          )}
        />
      </section>
      <section>
        <Controller 
          name="apps"
          control={control}
          render={({ field: { onChange, value } }) => (
            <div>
              {armbian.basicProgs.map((app, index) => (
                <label key={index} htmlFor={app}>
                  <div>
                    {/* <img src="" alt={app} /> */}
                    <p>
                      <input 
                        type="checkbox" 
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
                    </p>
                  </div>
                </label>
              ))}
            </div>
          )}
        />
      </section>
    </form>
  );
};

export default BasicSettings;
