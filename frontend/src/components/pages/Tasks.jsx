import { useLocation } from 'react-router-dom';
import style from './Tasks.module.css';
import { useState, useEffect } from 'react';
import api from '../../api';
import CardTask from '../card/CardTask';

const Tasks = () => {
  const location = useLocation()
    const [tasks, setTasks] = useState([]);
    let message;
    if(location.state) {
    message = location.state.message
    console.log(message)
  }
    useEffect(() => {
      const fetchTasks = async () => {
        try {
          const response = await api.get('/tasks');
          setTasks(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Erro ao buscar tarefas:', error);
        }
      };

      fetchTasks();
    }, []);

    return (
        <div className={style.task_container}>
            <h2 className={style.title}>Tarefas</h2>
            <div className={style.card_container}>
                {tasks.map(task => (
                    <CardTask key={task._id} name={task.name} desc={task.description} />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
