import { useState } from 'react';
import axios from 'axios';

export const useEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const url = import.meta.env.VITE_API_URL;
  const to = import.meta.env.VITE_USER_EMAIL;

  const sendEmail = async (from, subject, message) => {
    setIsLoading(true);
    setError(null);

    console.log(to);

    try {
      const response = await axios.post(`${url}/api/email/send`, {
        to,
        from,
        subject,
        message,
      });

      return {
        success: true,
        data: response.data,
        message: 'Email enviado exitosamente',
      };
    } catch (error) {
      console.error('Email error:', error);

      let errorMessage = 'Error al enviar el email';
      let errorDetails = '';

      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        const status = error.response.status;
        const data = error.response.data;

        switch (status) {
          case 400:
            errorMessage = 'Datos inválidos';
            errorDetails =
              data?.message || 'Verifica que todos los campos estén correctos';
            break;
          case 401:
            errorMessage = 'No autorizado';
            errorDetails = 'Credenciales de email incorrectas';
            break;
          case 403:
            errorMessage = 'Acceso denegado';
            errorDetails = 'No tienes permisos para enviar emails';
            break;
          case 404:
            errorMessage = 'Servicio no encontrado';
            errorDetails = 'El endpoint de email no está disponible';
            break;
          case 429:
            errorMessage = 'Demasiadas solicitudes';
            errorDetails = 'Espera un momento antes de intentar nuevamente';
            break;
          case 500:
            errorMessage = 'Error del servidor';
            errorDetails = data?.message || 'Problema interno del servidor';
            break;
          default:
            errorMessage = `Error ${status}`;
            errorDetails = data?.message || 'Error desconocido del servidor';
        }
      } else if (error.request) {
        // La petición fue hecha pero no se recibió respuesta
        errorMessage = 'Sin conexión';
        errorDetails =
          'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
      } else {
        // Algo pasó al configurar la petición
        errorMessage = 'Error de configuración';
        errorDetails = error.message || 'Error al preparar la petición';
      }

      const fullError = {
        message: errorMessage,
        details: errorDetails,
        originalError: error,
      };

      setError(fullError);
      throw fullError;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return { sendEmail, isLoading, error, clearError };
};
