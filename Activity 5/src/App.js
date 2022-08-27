import React  from 'react';
import Card from './Card';

class App extends React.Component {
    state = {albumList: [
                {
                    "id": 0,
                    "title": "album 1",
                    "year": 1989,
                },
                {
                    "id": 1,
                    "title": "album 2",
                    "year": 1978
                },
            ]
        };
        
    renderedList = () => {
        return this.state.albumList.map(
            (album) => {
                return (<Card albumTitle = {album.title} year = {album.year} />)
            }
        );
    }
    
    render() {
        return (
            <>
                <div>This is my music app</div>
                <div>
                    {this.renderedList()}
                </div>
            </>
        )
    }
}

export default App;