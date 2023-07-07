import  { useRef } from 'react';
import html2canvas from 'html2canvas';

const useScreenshot = () => {
  const targetRef = useRef(null);

  const takeScreenshot = () => {
    const targetElement = targetRef.current;

    // Method 1: Using html2canvas
    if(!targetElement)
        throw new Error('NO element to take screenshot on')  
    html2canvas(targetElement)
      .then((canvas) => {
        const imgData = canvas.toDataURL();
        downloadScreenshot(imgData);
      })
      .catch((error) => {
        console.error('Failed to capture screenshot:', error);
      });

  };

  const downloadScreenshot = (dataUrl: string) => {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = 'screenshot.png';
    link.click();
  };

  return [ targetRef, takeScreenshot ];
};

export default useScreenshot