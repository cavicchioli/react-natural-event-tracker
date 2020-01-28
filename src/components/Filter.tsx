import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import useCategoryService from '../services/useCategoryService';
import NaturalEvents from './NaturalEvents';

const Filter: React.FC<{}> = () => {

    const categoryService = useCategoryService();
    const [categoryFrom, setCategory] = useState('');
    const [beginingDateFrom, setBeginingDate] = useState('');
    const [endingDateFrom, setEndingDate] = useState('');
    const [statusFrom, setStatus] = useState('');
    const [sortingFrom, setSort] = useState('');

    return (
        <>
            {
                <Navbar className="bg-light justify-content-between">
                    <label>[Navbar Filter: Partially Done, Google Maps API - TO-DO]</label>
                    {/* <Form inline>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={event => setCategory(event.currentTarget.value)}>
                                <option value="">All</option>
                                {categoryService.status === 'loaded' &&
                                    categoryService.payload.map(category => (
                                        <option
                                            value={category.title}
                                            key={category.title}>
                                            {category.title}
                                        </option>
                                    ))}
                            </Form.Control>
                        </Form.Group>
                         <Form.Group controlId="date">
                            <Form.Label>Date</Form.Label>
                            <Form.Control id="beginingDate" type="text" placeholder="Begining" onMouseLeave={event => setBeginingDate("startingDate=" + event} />
                            <Form.Control id="endingDate" type="text" placeholder="Ending" onMouseLeave={event => setEndingDate("endingDate=" + event.currentTarget.value)} />
                        </Form.Group> 
                        <Form.Group controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Form.Control as="select" onChange={event => setStatus(event.currentTarget.value)}>
                                <option value="">All</option>
                                <option value="Open">Open</option>
                                <option value="Closed">Closed</option>
                            </Form.Control>
                        </Form.Group>
                    </Form> */}
                </Navbar>
            }

            <NaturalEvents beginingDateFrom={beginingDateFrom} categoryFrom={categoryFrom} endingDateFrom={endingDateFrom} statusFrom={statusFrom} />

        </>
    );
};


export default Filter;
