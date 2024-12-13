import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MahasiswaList = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [editData, setEditData] = useState({
        nim: '',
        nama: '',
        fakultas: ''
    });

    useEffect(() => {
        fetchMahasiswa();
    }, []);

    const fetchMahasiswa = () => {
        axios.get('http://mahasiswa-api.test/api/mahasiswa')
            .then(response => setMahasiswa(response.data))
            .catch(error => console.error(error));
    };

    const handleDelete = (id) => {
        if (window.confirm('Ingin menghapus data ini?')) {
            axios.delete(`http://mahasiswa-api.test/api/mahasiswa/${id}`)
                .then(() => {
                    alert('Berhasil dihapus!');
                    fetchMahasiswa();
                })
                .catch(error => {
                    console.error(error);
                    alert('Gagal menghapus');
                });
        }
    };

    const handleEdit = (mhs) => {
        setEditMode(mhs.id);
        setEditData({
            nim: mhs.nim,
            nama: mhs.nama,
            fakultas: mhs.fakultas
        });
    };

    const handleUpdate = (id) => {
        axios.put(`http://mahasiswa-api.test/api/mahasiswa/${id}`, editData)
            .then(() => {
                alert('Berhasil diperbarui!');
                setEditMode(null);
                fetchMahasiswa();
            })
            .catch(error => {
                console.error(error);
                alert('Gagal memperbarui');
            });
    };

    const handleCancelEdit = () => {
        setEditMode(null);
        setEditData({
            nim: '',
            nama: '',
            fakultas: ''
        });
    };

    return (
        <div className="container">
            <div className="box">
                <h2 className="title is-4">DATA MAHASISWA</h2>
                <div className="table-container">
                    <table className="table is-fullwidth is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th className="has-text-centered">NIM</th>
                                <th className="has-text-centered">NAMA</th>
                                <th className="has-text-centered">FAKULTAS</th>
                                <th className="has-text-centered"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {mahasiswa.map((mhs) => (
                                <tr key={mhs.id}>
                                    {editMode === mhs.id ? (
                                        <>
                                            <td className="has-text-centered">
                                                <input
                                                    className="input is-small"
                                                    type="text"
                                                    value={editData.nim}
                                                    onChange={(e) => setEditData({ ...editData, nim: e.target.value })}
                                                />
                                            </td>
                                            <td className="has-text-centered">
                                                <input
                                                    className="input is-small"
                                                    type="text"
                                                    value={editData.nama}
                                                    onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                                                />
                                            </td>
                                            <td className="has-text-centered">
                                                <input
                                                    className="input is-small"
                                                    type="text"
                                                    value={editData.fakultas}
                                                    onChange={(e) => setEditData({ ...editData, fakultas: e.target.value })}
                                                />
                                            </td>
                                            <td className="has-text-centered">
                                                <div className="buttons are-small is-centered">
                                                    <button
                                                        className="button is-success is-small"
                                                        onClick={() => handleUpdate(mhs.id)}
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-save"></i>
                                                        </span>
                                                        <span>Simpan</span>
                                                    </button>
                                                    <button
                                                        className="button is-light is-small"
                                                        onClick={handleCancelEdit}
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-times"></i>
                                                        </span>
                                                        <span>Batal</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td className="has-text-centered">{mhs.nim}</td>
                                            <td className="has-text-centered">{mhs.nama}</td>
                                            <td className="has-text-centered">{mhs.fakultas}</td>
                                            <td className="has-text-centered">
                                                <div className="buttons are-small is-centered">
                                                    <button
                                                        className="button is-info is-small"
                                                        onClick={() => handleEdit(mhs)}
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-edit"></i>
                                                        </span>
                                                        <span>Edit</span>
                                                    </button>
                                                    <button
                                                        className="button is-danger is-small"
                                                        onClick={() => handleDelete(mhs.id)}
                                                    >
                                                        <span className="icon">
                                                            <i className="fas fa-trash"></i>
                                                        </span>
                                                        <span>Hapus</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MahasiswaList;
