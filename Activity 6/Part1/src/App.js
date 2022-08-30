import React  from 'react';
import Card from './Card';
import Albums from './albums.json';

class App extends React.Component {
    state = {albumList: []};
        
    componentDidMount() {
        this.setState({albumList: Albums});
    }
    
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