import React from 'react';

const Map = () => (
  <div id="map" style={{ height: '400px', width: '100%' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.16357919355!2d-78.4905842!3d-0.2124413!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses-419!2sec!4v1718718852240!5m2!1ses-419!2sec"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

export default Map;
