import React, { useEffect } from 'react';
import error from '../img/symbols/error.svg';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const Notfound = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 180);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log('homepage time now');
      navigate('/ecommerce-store', { replace: 'true' });
    }, 4800);
  }, []);

  return (
    <div className="text-slate-50 text-center error flex flex-col px-10 pt-10 pb-6 rounded-3xl bg-zinc-800 gap-6">
      <div className="flex items-center">
        <img src={error} alt="error-404" />
        <div className="">
          This page is not available! Redirecting you back to the home page.
        </div>
      </div>
      <div className="">
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
    </div>
  );
};
