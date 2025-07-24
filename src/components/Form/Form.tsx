import { Modal } from '@/components/Modal';
import { FC, useState, FormEvent } from 'react'
import classes from './Form.module.scss'
export const Form: FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreeToTerms: false
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Здесь можно добавить логику отправки формы на сервер
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={classes.formContainer}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.formGroup}>
          <label htmlFor="name">Имя:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={classes.formGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className={classes.checkboxGroup}>
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            required
          />
          <label htmlFor="agreeToTerms">Я согласен с условиями</label>
        </div>
        
        <div className={classes.buttonContainer}>
          <button type="submit" className={classes.submitButton}>Отправить</button>
        </div>
      </form>
      
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Форма отправлена</h2>
        <p>Спасибо за заполнение формы!</p>
      </Modal>
    </div>
  )
}
