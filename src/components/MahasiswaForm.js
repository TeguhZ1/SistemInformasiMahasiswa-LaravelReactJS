import React, { useState } from 'react';
import axios from 'axios';

const MahasiswaForm = () => {
    const [nim, setNim] = useState('');
    const [nama, setNama] = useState('');
    const [fakultas, setFakultas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mahasiswa = {
            nim, nama, fakultas,
        };
        axios.post('http://mahasiswa-api.test/api/mahasiswa', mahasiswa)
            .then(response => {
                alert('Berhasil ditambahkan!');
                // Reset form
                setNim('');
                setNama('');
                setFakultas('');
            })
            .catch(error => {
                console.error(error);
                alert('Gagal menambahkan');
            });
    };

    return (
        <div className="container mb-6">
            <div className="box">
                <h2 className="title is-4">FORM MAHASISWA</h2>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label className="label">NIM</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Masukkan NIM"
                                value={nim}
                                onChange={(e) => setNim(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-id-card"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">NAMA</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Masukkan Nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">FAKULTAS</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Masukkan Nama Fakultas"
                                value={fakultas}
                                onChange={(e) => setFakultas(e.target.value)}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-university"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="submit" className="button is-primary">
                                <span className="icon">
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span>Tambahkan Data</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MahasiswaForm;
