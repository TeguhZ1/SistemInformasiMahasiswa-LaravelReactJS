import React from 'react';
import MahasiswaList from './components/MahasiswaList';
import MahasiswaForm from './components/MahasiswaForm';

function App() {
    return (
        <div className="section">
            <div className="container is-max-desktop">
                <h1 className="title has-text-centered mb-6">SISTEM INFORMASI MAHASISWA</h1>
                <MahasiswaForm />
                <MahasiswaList />
            </div>
        </div>
    );
}

export default App;
