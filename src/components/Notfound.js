import React, { useEffect } from 'react';
import error from '../img/symbols/error404.svg';
import { useNavigate } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const Notfound = ({ darken }) => {
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
    <main
      className="text-slate-50 text-center error flex flex-col p-8 sm:px-12 sm:pt-14 sm:pb-8 
    rounded-3xl bg-zinc-800 gap-6 w-[90%] sm:w-[600px]"
    >
      <div className="flex flex-col items-center gap-4 xs:gap-8">
        <img src={error} className="h-14 xs:h-20 sm:h-48" alt="error-404" />
        <div>
          <h3 className="text-xl xs:text-2xl font-secondary font-bold">
            <span className="text-blue-400">/this-page</span> is not available!
          </h3>
          <h4 className="text-base xs:text-lg">
            Redirecting you back to the home page.
          </h4>
        </div>
      </div>
      <div>
        <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </div>
    </main>
  );
};
