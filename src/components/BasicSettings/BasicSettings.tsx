import "./BasicSettings.css";
import { useForm, Controller } from 'react-hook-form';
import { armbian, build } from '../Installer/Installer';

interface IFormInput {
  board: string;
  core: string;
}

const BasicSettings: React.FC = () => {
  const { control, watch, setValue } = useForm<IFormInput>({
    defaultValues: {
      board: build.board,
      core: build.kernel}
  });

  build.board = watch('board');
  build.kernel = watch('core');  
  
  return (
    <form>
      <Controller
        name="board"
        control={control}
        render={({ field }) => (
          <select {...field} onChange={(e) => {
            field.onChange(e);
            setValue('board', e.target.value);
            console.log(e);
          }}>
            {armbian.boards.map((item, index) => (
              <option key={index} value={item.name}>{item.text}</option>
            ))}
          </select>
        )}
      />
      <Controller
        name="core"
        control={control}
        render={({ field }) => (
          <select {...field} onChange={(el) => {
            field.onChange(el);
            setValue('core', el.target.value);

          }}>
            {armbian.boards.find(b => b.name === watch('board'))?.kernels.map((kernel, index) => (
              <option key={index} value={kernel}>{kernel}</option>
            ))}
          </select>
        )}
      />
    </form>
  );
};

export default BasicSettings;
