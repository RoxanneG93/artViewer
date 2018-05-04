import React from 'react';

export default () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyright &copy; {new Date().getFullYear()} ArtFolio
      <p>***The Artists featured in this application are for presentation purposes only. 
      All art and creater's brand name belong to the Artists respectfully.</p>
    </footer>
  );
};
