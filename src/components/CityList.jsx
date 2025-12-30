import { useEffect, useState } from 'react';
import api from '../services/api';

function CityList({ refreshTrigger }) {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchCities = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await api.get('/ciudades');
            setCities(response.data);
        } catch (error) {
            console.error('Error fetching cities:', error);
            setError('No se pudieron cargar las ciudades. El servidor puede estar inactivo o tener problemas de conexión.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCities();
    }, [refreshTrigger]);

    const handleDelete = async (nombre) => {
        if (!confirm(`¿Estás seguro de que deseas eliminar ${nombre}?`)) return;
        try {
            await api.delete(`/ciudades/${nombre}`);
            fetchCities();
        } catch (error) {
            console.error('Error deleting city:', error);
            alert('Error al eliminar la ciudad. Intenta nuevamente.');
        }
    };

    if (loading && cities.length === 0) return <div className="loading">Cargando ciudades...</div>;

    if (error) {
        return (
            <div className="city-list-container">
                <div className="error-container" style={{ textAlign: 'center', padding: '2rem', color: '#ef4444' }}>
                    <h3>Error de Conexión</h3>
                    <p>{error}</p>
                    <button onClick={fetchCities} className="retry-btn" style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#334155', color: 'white', border: 'none', borderRadius: '0.5rem', cursor: 'pointer' }}>
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="city-list-container">
            <h2>Ciudades Registradas</h2>
            {cities.length === 0 ? (
                <p className="no-data">No hay ciudades registradas.</p>
            ) : (
                <div className="cities-grid">
                    {cities.map((city) => (
                        <div key={city.ciudad} className="city-card">
                            <div className="city-info">
                                <h3>{city.ciudad}</h3>
                                <p className="temp">{city.temperatura}°C</p>
                                <p className="weather">{city.clima}</p>
                            </div>
                            <button
                                onClick={() => handleDelete(city.ciudad)}
                                className="delete-btn"
                                aria-label={`Eliminar ${city.ciudad}`}
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CityList;
