import { Box } from '@mui/material';
import { Route, Routes } from 'react-router';
import './App.css';
import ChannelDetail from './components/ChannelDetail/ChannelDetail';
import Feed from './components/Feed/Feed';
import SearchFeed from './components/SearchFeed/SearchFeed';
import VideoDetail from './components/VideoDetail/VideoDetail';

function App() {
    return (
        <Box>
            Navbar
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/' element={<VideoDetail />} />
                <Route path='/channel/' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    );
}

export default App;
