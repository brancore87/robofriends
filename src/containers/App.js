import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


function App() {

    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => { setRobots(users) });
    }, []) // only run when count changes

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const handleClick = () => {
         console.log(searchfield);
    }
     
    const filteredRobots = robots.filter(robot => { 
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        return !robots.length ?
            <h1 className='tc f1'>Loading ...</h1>:
            (
                <div className='tc'>
                    <h1 className='f1'>RoboYourself</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <h3 className='tc white f2'>{ searchfield }</h3>
                    <button className="
                            tc pill pa3 ma3 grow br3 
                            b--light-purple bg-black white"
                        onClick={handleClick}>
                        Generate
                    </button>
                    <Scroll>   
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} /> 
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>
            );
}


export default App;

// Props -> Are simply things that come out of state
// State -> Description or what describes the App
// It is something that can change and affect our App
// Children -> Way to render children. Every props object has children