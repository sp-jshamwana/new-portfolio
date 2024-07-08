import { useState, useEffect } from "react";
import axios from "axios";

const usePodcasts = (term) => {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchPodcasts = async () => {
            try {
                const response = axios.get(`https://itunes.apple.com/search?media=podcast&term=${term}`);
                setPodcasts((await response).data.results)
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchPodcasts();
    }, [term]) ;
    return { podcasts, loading, error};
}

export default usePodcasts;