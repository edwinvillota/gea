import React from 'react';
import '../assets/styles/lib/leaflet.css';
import { Map, TileLayer } from 'react-leaflet-universal';

// Assets
import '../assets/styles/components/MTMapViewer.scss';

const MTMapViewer = () => {

  return (
    <Map center={[3.6255078, -75.0975521]} zoom={11}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </Map>
  );
};

export default MTMapViewer;
