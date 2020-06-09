import axios from 'axios';

export const startStream = async payload => {
  await axios.post('http://localhost:5000/start', payload);
};

export const stopStream = async () => {
  await axios.post('http://localhost:5000/stop');
};
