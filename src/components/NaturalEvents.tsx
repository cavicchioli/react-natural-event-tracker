import React from 'react';
import { Table } from 'react-bootstrap';
import useNaturalEventService from '../services/useNaturalEventService';
import Loader from './Loader';
import NaturalEvent from './NaturalEvent';

export interface Filters {
    categoryFrom: string;
    beginingDateFrom: string;
    endingDateFrom: string;
    statusFrom: string;
}

const NaturalEvents: React.FC<Filters> = ({ categoryFrom, beginingDateFrom, endingDateFrom, statusFrom }) => {
    const filters = [{ prop: "category", value: categoryFrom }, { prop: "beginingDate", value: beginingDateFrom }, { prop: "endingDate", value: endingDateFrom }, { prop: "status", value: statusFrom }];
    const naturalService = useNaturalEventService(filters);
    const [url, setUrl] = React.useState('');
    return (
        <>
            {
                <div className="card">
                    <Table bordered hover size="sm">
                        <tbody>
                            {naturalService.status === 'loading' && (
                                <div className="loader-container">
                                    <Loader />
                                </div>
                            )}
                            {naturalService.status === 'loaded' &&
                                naturalService.payload.map(event => (
                                    <tr onClick={() => setUrl("/events/" + event.id)} key={event.id} className={`${event.closed ? "closedColor" : ""}`}>
                                        <td>{event.id}</td>
                                        <td>{event.title}</td>
                                        <td>{event.categories[0].title}</td>
                                        <td>{(event.geometries[0].date)}</td>
                                        <td>{event.closed ? (event.closed) : ""}</td>
                                    </tr>
                                ))}
                            {!!url && <NaturalEvent url={url} onClose={() => setUrl('')} />}
                        </tbody>
                    </Table>
                </div>
            }
            {
                naturalService.status === 'error' && (
                    <div>Error, the backend moved to the dark side.</div>
                )
            }
        </>
    );
};

export default NaturalEvents;
