import React from 'react';
import useNaturalEventByUrlService from '../services/useNaturalEventByUrlService';
import Loader from './Loader';

export interface Props {
    url: string;
    onClose(): void;
}

const NaturalEvent: React.FC<Props> = ({ url, onClose }) => {
    const service = useNaturalEventByUrlService(url);

    return (
        <div className="event-modal-container">
            <div className="event-modal-background" onClick={onClose} />

            {service.status === 'loading' && <Loader />}

            {service.status === 'loaded' && (
                <div className="event">
                    <h2>{service.payload.title}</h2>
                    {/* GOOGLE MAPS -  TO SHOW POINTS */}
                    <div className="event-info">
                        <div className="event-info-item">
                            <div className="label">Id</div>
                            <div className="data">{service.payload.id}</div>
                        </div>
                        <div className="event-info-item">
                            <div className="label">Date</div>
                            <div className="data">{service.payload.geometries[0].date}</div>
                        </div>
                        <div className="event-info-item">
                            <div className="label">Categories</div>
                            <div className="data">{service.payload.categories.map(c => (
                                c.title + " "
                            ))}</div>
                        </div>
                        <div className="event-info-item">
                            <div className="label">Geometries</div>
                            <div className="data">{service.payload.geometries.map(c => (
                                c.coordinates + " "
                            ))}</div>
                        </div>
                    </div>
                </div>
            )}

            {service.status === 'error' && (
                <div className="event">
                    Error, something weird happened with the event.
        </div>
            )}
        </div>
    );
};

export default NaturalEvent;
