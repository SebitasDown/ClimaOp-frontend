import { useState } from 'react';
import api from '../services/api';

function CityForm({ onCityAdded }) {
    const [nombre, setNombre] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!nombre.trim()) return;

        setLoading(true);
        setError(null);
        try {
            await api.post('/ciudades', { nombre });
            setNombre('');
            if (onCityAdded) onCityAdded();
        } catch (err) {
            setError('Error al agregar la ciudad. Intenta nuevamente.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="city-form-container">
            <h2>Agregar Ciudad</h2>
            <form onSubmit={handleSubmit} className="city-form">
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre de la ciudad"
                    disabled={loading}
                    className="city-input"
                />
                <button type="submit" disabled={loading} className="add-btn">
                    {loading ? 'Agregando...' : 'Agregar'}
                </button>
            </form>
            {error && <p className="error-msg">{error}</p>}
        </div>
    );
}

export default CityForm;
