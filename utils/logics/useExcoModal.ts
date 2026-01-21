import { useState } from 'react';
import { Executive } from '../excosData';

export const useExcoModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExco, setSelectedExco] = useState<Executive | null>(null);

  const openModal = (excoMember: Executive) => {
    setSelectedExco(excoMember);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExco(null);
  };

  const handleUpdate = async (updatedData: Executive): Promise<void> => {
    console.log('Updated exco data:', updatedData);
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Exco updated successfully:', updatedData);
        resolve();
      }, 1500);
    });
  };

  return {
    isModalOpen,
    selectedExco,
    openModal,
    closeModal,
    handleUpdate
  };
};
