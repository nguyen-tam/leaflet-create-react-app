import React, { Component, StrictMode } from 'react';
import Leaflet from 'leaflet';
import SimpleExample from './examples/simple';
import EventsExample from './examples/events';
import ViewportExample from './examples/viewport';
import VectorLayersExample from './examples/vector-layers';
import OtherLayersExample from './examples/other-layers';
import ZoomControlExample from './examples/zoom-control';
import LayersControlExample from './examples/layers-control';
import DraggableExample from './examples/draggable-marker';
import BoundsExample from './examples/bounds';
import CustomComponentExample from './examples/custom-component';
import AnimateExample from './examples/animate';
import TooltipExample from './examples/tooltip';
import PaneExample from './examples/pane';
import WMSTileLayerExample from './examples/wms-tile-layer';
import VideoOverlayExample from './examples/video-overlay';
import './App.css';
import '../node_modules/leaflet/dist/leaflet.css';

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/';

class App extends Component {
  render() {
    return (
      <StrictMode>   
        <h1>React-Leaflet examples</h1>
        <h2>Popup with Marker</h2>
        <SimpleExample />
        <h2>Events</h2>
        <p>Click the map to show a marker at your detected location</p>
        <EventsExample />
        <h2>Viewport</h2>
        <p>Click the map to reset it to its original position</p>
        <ViewportExample />
        <h2>Vector layers</h2>
        <VectorLayersExample />
        <h2>Other layers</h2>
        <OtherLayersExample />
        <h2>Tooltips</h2>
        <TooltipExample />
        <h2>Zoom control</h2>
        <ZoomControlExample />
        <h2>Layers control</h2>
        <LayersControlExample />
        <h2>Panes</h2>
        <PaneExample />
        <h2>Draggable Marker</h2>
        <DraggableExample />
        <h2>Map view by bounds</h2>
        <p>Click a rectangle to fit the map to its bounds</p>
        <BoundsExample />
        <h2>List of markers (custom component)</h2>
        <CustomComponentExample />
        <h2>Animate</h2>
        <p>Click the map to move to the location</p>
        <AnimateExample />
        <h2>WMS tile layer</h2>
        <WMSTileLayerExample />
        <h2>Video overlay</h2>
        <VideoOverlayExample />
      </StrictMode>
    );
  }
}

export default App;
